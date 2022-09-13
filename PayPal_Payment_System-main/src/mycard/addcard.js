import React from "react";

class AddCard extends React.Component {
  state = {
    cardHolderName: "",
    cardName: "",
    date: "",
    cvv: "",
  };

  enroll = (e) => {
    e.preventDefault();
    if (
      this.state.cardHolderName === "" ||
      this.state.cardNumber === "" ||
      this.state.date === "" ||
      this.state.cvv === ""
    ) {
      alert("Please Fill all Blanks");
      return;
    }
    this.props.addCardHandiler(this.state);
    this.setState({ cardHolderName: "", cardNumber: "", date: "", cvv: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <section className=" p-5 p-lg-0 pt-lg-5 text-center ">
        <div className="container ">
        <p className="lead">Add card</p>
              <form onSubmit={this.enroll}>
                <div className="mb-3">
                  <label for="cardHolderName" className="col-form-label">
                    Card Holder Name
                  </label>
                  <input
                    className="form-control"
                    id="cardHolderName"
                    type="text"
                    value={this.state.cardHolderName}
                    onChange={(e) =>
                      this.setState({ cardHolderName: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label for="cardNumber" className="col-form-label">
                    Card Number
                  </label>
                  <input
                    className="cardNumber"
                    id="last-name"
                    type="number"
                    value={this.state.cardNumber}
                    onChange={(e) =>
                      this.setState({ cardNumber: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label for="date" className="col-form-label">
                    date
                  </label>
                  <input
                    className="form-control"
                    id="date"
                    type="text"
                    value={this.state.date}
                    onChange={(e) => this.setState({ date: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label for="cvv" className="col-form-label">
                    cvv
                  </label>
                  <input
                    className="form-control"
                    id="cvv"
                    type="number"
                    value={this.state.cvv}
                    onChange={(e) => this.setState({ cvv: e.target.value })}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg mb-4"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll"
                >
                  Add Card Here
                </button>
              </form>
        </div>
      </section>
    );
  }
}
export default AddCard;
