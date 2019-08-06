import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FormReg from '../Form/FormReg';
import FormLogin from '../Form/FormLogin';
import FormPass from '../Form/FormPass';
import Nav from '../Nav';

// import Mobx from '../Mobx';

function App(props) {
  const { store } = props;
  console.log('---store ', store);
  return (
    <div className = "container">
      <Nav isLogin = { false } title = ""/>
      <div style = {{ marginTop: 80 }}/>
      {/* <Mobx store = { props.store }/> */}
      <div>
        <Switch>
          <Route exact path="/" />
          <Route exact path = "/session/new" component = { FormReg } />
          <Route exact path = "/session/pass" component = { FormPass} />
          <Route
            path = "/session"
            render = { propsLogin => <FormLogin {...propsLogin} userLogin = { store.userLogin }/> }
          />
          <Route path = "/chat" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
