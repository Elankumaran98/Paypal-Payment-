import { Component } from "react";
import axios from "axios";

export default class AddCard extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      cardnumber: "",
      month: "",
      year: "",
      cvv: "",
    };
    this.changefullname = this.changefullname.bind(this);
    this.changeCardnumber = this.changeCardnumber.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeCvv = this.changeCvv.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changefullname(event) {
    this.setState({
      fullname: event.target.value,
    });
  }

  changeCardnumber(event) {
    this.setState({
      cardnumber: event.target.value,
    });
  }

  changeMonth(event) {
    this.setState({
      month: event.target.value,
    });
  }

  changeYear(event) {
    this.setState({
      year: event.target.value,
    });
  }

  changeCvv(event) {
    this.setState({
      cvv: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const cardregistered = {
      fullname: this.state.fullname,
      cardnumber: this.state.cardnumber,
      month:this.state.month,
      year:this.state.year,
      cvv:this.state.cvv
    };
    axios
      .post("http://localhost:3778/app/addcard", cardregistered)
      .then((response) => console.log(response.data));

    this.setState({
      fullname: "",
      cardnumber: "",
      month:"",
      year:"",
      cvv:""
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label for="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Full Name"
              onChange={this.changefullname}
              value={this.state.fullname}
            />
          </div>
          <div className="form-group">
            <label for="cardnumber">Card Name</label>
            <input
              type="number"
              className="form-control"
              id="cardnumber"
              placeholder="1234 1234 1234 1234"
              onChange={this.changeCardnumber}
              value={this.state.cardnumber}
            />
          </div>
          <div className="form-group">
            <label for="month">Month</label>
            <input
              type="month"
              className="form-control"
              id="month"
              placeholder="10"
              onChange={this.changeMonth}
              value={this.state.month}
            />
            <div className="form-group">
              <label for="year">Year</label>
              <input
                type="year"
                className="form-control"
                id="year"
                placeholder="2021"
                onChange={this.changeYear}
                value={this.state.year}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="cvv">CVV</label>
            <input
              type="number"
              className="form-control"
              id="cvv"
              placeholder="111"
              onChange={this.changeCvv}
              value={this.state.cvv}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
