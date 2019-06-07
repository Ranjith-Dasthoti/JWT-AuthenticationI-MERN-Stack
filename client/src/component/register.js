import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      contactNumber: "",
      errors: ""
    };
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangeContactNumber(e) {
    this.setState({ contactNumber: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const { name, email, password, contactNumber } = this.state;
    axios
      .post("http://localhost:4000/user/register", {
        name,
        email,
        password,
        contactNumber
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
      });
    this.setState({
      name: "",
      email: "",
      password: "",
      contactNumber: ""
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div
        style={{
          marginTop: "100px",
          marginLeft: "25%",
          marginRight: "25%"
        }}
      >
        <form onSubmit={this.onSubmit} className="form">
          <h1>Registration Form</h1>
          <label>Name</label>
          <input
            type="text"
            className={classnames("form-control", {
              "is-invalid": errors.name,
              "is-valid": this.state.name
            })}
            placeholder="Enter your name"
            name="name"
            onChange={this.onChangeName}
            value={this.state.name}
          />
          {this.state.name ? (errors.name = "") : ""}
          {!this.state.name ? (
            <div className="invalid-feedback">{errors.name}</div>
          ) : (
            ""
          )}
          <br />
          <label>Email</label>
          <input
            type="text"
            className={classnames("form-control", {
              "is-invalid": errors.email,
              "is-valid": this.state.email
            })}
            placeholder="Enter your email"
            name="email"
            onChange={this.onChangeEmail}
            value={this.state.email}
          />
          {this.state.email ? (errors.email = "") : ""}
          {errors.email ? (
            <div className="invalid-feedback">{errors.email}</div>
          ) : (
            ""
          )}
          <br />
          <label>Password</label>
          <input
            type="password"
            className={classnames("form-control", {
              "is-invalid": errors.password,
              "is-valid": this.state.password
            })}
            placeholder="Enter your password"
            name="password"
            onChange={this.onChangePassword}
            value={this.state.password}
          />
          {this.state.password ? (errors.password = "") : ""}
          {errors.password ? (
            <div className="invalid-feedback">{errors.password}</div>
          ) : (
            ""
          )}
          <br />
          <label>Contact Number</label>
          <input
            type="text"
            className={classnames("form-control", {
              "is-valid": this.state.contactNumber,
              "is-invalid": errors.contactNumber
            })}
            placeholder="Enter your contact number"
            name="contactNumber"
            onChange={this.onChangeContactNumber}
            value={this.state.contactNumber}
            maxLength="10"
          />
          {this.state.contactNumber ? (errors.contactNumber = "") : ""}
          {errors.contactNumber ? (
            <div className="invalid-feedback">{errors.contactNumber}</div>
          ) : (
            ""
          )}
          <br />
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
          <br />
        </form>
      </div>
    );
  }
}
