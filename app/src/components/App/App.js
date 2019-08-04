import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';

import FormReg from '../Form/FormReg';
import FormLogin from '../Form/FormLogin';
import FormPass from '../Form/FormPass';
import Nav from '../Nav';

@observer
class App extends Component {
  handleIncrement = () => { this.props.store.increment(); };

  handleDecrement = () => { this.props.store.decrement(); };

  render() {
    const { store } = this.props;
    console.log('--- ', store);
    return (
      <div className = "container">
        <Nav isLogin = { false } title = ""/>
        <div style = {{ marginTop: 80 }}/>
        <h2> { this.props.store.nickName } </h2>
        <h1> { this.props.store.age } </h1>
        <button onClick = { this.handleDecrement }> -1 </button>
        <button onClick = { this.handleIncrement }> +1 </button>
        <button onClick = { store.getUser }> Get User </button>
        <h3>{ store.user ? store.user.login.username : 'Guest' }</h3>
        <div>
          <Switch>
            <Route exact path="/" />
            <Route exact path = "/session/new" component = { FormReg } />
            <Route exact path = "/session/pass" component = { FormPass} />
            <Route path = "/session" component = { FormLogin } />
            <Route path = "/chat" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
