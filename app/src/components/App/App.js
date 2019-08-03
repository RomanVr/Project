import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormReg from '../Form/FormReg';
import FormLogin from '../Form/FormLogin';
import Nav from '../Nav';

function App() {
  return (
    <div className = "container">
      <Nav />
      <div style = {{ marginTop: 80 }}/>
      <div>
        <Switch>
          <Route exact path="/" component = { FormLogin } />
          <Route path = "/session/new" component = { FormReg } />
          <Route path = "/session" component = { FormLogin } />
          <Route path = "/chat" component = { FormLogin } />
        </Switch>
      </div>
    </div>
  );
}

export default App;

// const routes = {
//   root: {
//     path: '',
//     component: FormLogin,
//   },
//   sessionNew: {
//     path: '/session/new',
//     component: FormReg,
//   },
//   session: {
//     path: '/session',
//     component: FormLogin,
//   },
// };

// class App extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     route: window.location.hash.substr(1),
//   };
//   console.log('--- route', this.state.route);
// }

// componentDidMount() {
//   window.addEventListener('hashchange', () => {
//     this.setState({
//       route: window.location.hash.substr(1),
//     });
//     console.log('--- route', this.state.route);
//   });
// }

// render() {
// const Child = routes[_.findKey(routes, { path: this.state.route })];
