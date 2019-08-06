
import {
  observable, configure, action, computed, decorate,
} from 'mobx';

import toLogin from '../data/loginRepo';

configure({ enforceActions: 'observed' });

class Auth {
  constructor() {
    this.user = null;
  }

  get fullName() {
    if (this.user) {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
    return 'Guest';
  }

  userLogin({ login, password }) {
    const user = toLogin(login, password);
    console.log('---User ', user);
    this.setUser(user);
  }

  setUser(user) {
    this.user = user;
  }
}

decorate(Auth, {
  user: observable,
  userLogin: action.bound,
  setUser: action,
  fullName: computed,
});

export default new Auth();
