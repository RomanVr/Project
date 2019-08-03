import React, { Component } from 'react';
import Input from '../Input/Input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        login: '',
        password: '',
        passwordConfirm: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  render() {
    return (
      <div className = 'container d-flex justify-content-center'>
        <form onSubmit = {this.handleSubmit}>
          <Input
            label = 'Логин'
            name = 'login'
            onChange = {this.handleInput}
            value = {this.state.data.login}
            inputClass = 'form-control'
          />
          <Input
            label = 'Пароль'
            name = 'password'
            onChange = {this.handleInput}
            value = {this.state.data.password}
            inputClass = 'form-control'
            type = 'password'
          />
          <input type = 'submit' value = 'Войти'/>
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit data: ', this.state.data);
  }

  handleInput(event) {
    const { name, value } = event.currentTarget;
    console.log('name control: ', name, ' value: ', value);
    this.setState(({ data, errors }) => ({
      data: {
        ...data,
        [name]: value,
      },
    }));
  }
}

export default Form;
