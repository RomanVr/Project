import React, { PureComponent } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  static defaultProps = {
    type: 'text',
    label: '',
    error: '',
    required: false,
    autoComplete: 'off',
    labelClass: '',
    inputClass: '',
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    labelClass: PropTypes.string,
    inputClass: PropTypes.string,
  };

  render() {
    const {
      name, error, labelClass, inputClass, label, required, ...props
    } = this.props;
    return (
      <div className = 'form-group'>
        <label
          className = { cn('label', !!labelClass && labelClass)}
          htmlFor = {`id-${name}`}
        >
          {label}
          {required && '*'}
          <input className = { cn('input', !!inputClass && inputClass, !!error && 'error')}
                name = {name}
                id = {`id-${name}`}
                onFocus = {this.handleFocus}
                onBlur = {this.handleBlur}
                {...props}
          />
          {!!error && <span className = 'errorText'>{error}</span>}
        </label>
        </div>
    );
  }
}

export default Input;
