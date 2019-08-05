import {
  observable, configure, action, computed, decorate,
} from 'mobx';

configure({ enforceActions: 'observed' });

class Store {
  constructor() {
    this.firstName = 'Ivan';
    this.age = 30;
    this.user = null;
  }

  get nickName() {
    return `${this.firstName}-${this.age}`;
  }

  getUser() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then((json) => {
        if (json.results) {
          this.setUser(json.results);
        }
      });
  }

  setUser([user, ...results]) {
    this.user = user;
  }

  increment() { this.age += 1; }

  decrement() { this.age -= 1; }
}

decorate(Store, {
  age: observable,
  increment: action,
  decrement: action,
  nickName: computed,
  user: observable,
  getUser: action.bound,
  setUser: action,
});

export default new Store();
