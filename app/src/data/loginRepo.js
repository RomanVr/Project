import _ from 'lodash';

const user = {
  login: 'admin',
  password: 'admin',
};

const users = [user];

const toLogin = (login, pass) => {
  console.log('---users', users, ' ---login ', login);
  const fUsers = users.filter((item) => {
    console.log('---item', item);
    return item.login === login && item.password === pass;
  });
  console.log('---users', fUsers);
  return _.head(fUsers);
};

export default toLogin;
