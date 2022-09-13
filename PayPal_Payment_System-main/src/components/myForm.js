import React, { Component } from "react";

export default class yForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
    };
  }
  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  render() {
    return (
      <div>
        <label>Enter Payment Amount</label>
        <input
          type="number"
          value={this.state.amount}
          onChange={this.handleAmountChange}
        />
      </div>
    );
  }
}
