import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Mobx extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = () => { this.props.store.increment(); };
    this.handleDecrement = () => { this.props.store.decrement(); };
  }

  render() {
    const { store } = this.props;
    console.log('--- ', store);
    return (
      <div>
        <h2> { this.props.store.nickName } </h2>
        <h1> { this.props.store.age } </h1>
        <button onClick = { this.handleDecrement }> -1 </button>
        <button onClick = { this.handleIncrement }> +1 </button>
        <button onClick = { store.getUser }> Get User </button>
        <h3>{ store.user ? store.user.login.username : 'Guest' }</h3>
      </div>
    );
  }
}

export default Mobx;
