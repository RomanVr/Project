import _ from 'lodash';

const user = {
  login: 'admin',
  password: 'admin',
};

const users = [user];

const toLogin = (login, pass) => _.head(users
  .filter(item => item.login === login && item.password === pass));

export default toLogin;
