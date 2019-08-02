import React, { Component } from 'react';
import _ from 'lodash';
import FormReg from '../Form/FormReg';
import FormLogin from '../Form/FormLogin';
import Nav from '../Nav';

const routes = {
  root: {
    path: '',
    component: FormLogin,
  },
  sessionNew: {
    path: '/session/new',
    component: FormReg,
  },
  session: {
    path: '/session',
    component: FormLogin,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1),
    };
    console.log('--- route', this.state.route);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
      console.log('--- route', this.state.route);
    });
  }

  render() {
    const Child = routes[_.findKey(routes, { path: this.state.route })];
    return (
      <div className = "container">
        <Nav />
        <div style = {{ marginTop: 80 }}/>
        <Child.component />
      </div>
    );
  }
}

export default App;
