import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserKey extends Component {
  static propTypes = {
    updateKey: PropTypes.func.isRequired
  };

  state = {
    key: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { key } = this.state;
    this.props.updateKey(key);
  }

  handleChange = ({ target }) => {
    this.setState({ key: target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="key" value={this.state.key} onChange={this.handleChange}
          placeholder="Enter your NASA API key"></input>
        <button>Enter Key</button>
      </form>
    );
  }
}

export default UserKey;

