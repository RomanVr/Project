import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        middleName: '',
        age: '',
        gender: '',
        city: '',
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
            label = 'Имя'
            name = 'firstName'
            onChange = {this.handleInput}
            value = {this.state.data.firstName}
            inputClass = 'form-control'
            required = {true}
          />
          <Input
            label = 'Отчество'
            name = 'middleName'
            onChange = {this.handleInput}
            value = {this.state.data.middleName}
            inputClass = 'form-control'
          />
          <Input
            label = 'Фамилия'
            name = 'lastName'
            onChange = {this.handleInput}
            value = {this.state.data.lastName}
            inputClass = 'form-control'
            required = {true}
          />
          <Input
            label = 'Возраст'
            name = 'age'
            onChange = {this.handleInput}
            value = {this.state.data.age}
            inputClass = 'form-control'
            required = {true}
          />
          <Input
            label = 'Пол'
            name = 'gender'
            onChange = {this.handleInput}
            value = {this.state.data.gender}
            inputClass = 'form-control'
            required = {true}
          />
          <Input
            label = 'Город проживания'
            name = 'city'
            onChange = {this.handleInput}
            value = {this.state.data.city}
            inputClass = 'form-control'
            required = {true}
          />
          <Link to = "/session/pass">Далее</Link>
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
