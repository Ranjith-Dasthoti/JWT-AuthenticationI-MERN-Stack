import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        // console.log(res.data);
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
        console.log(this.state.errors);
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
        <h1>Login Here</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <label>Email</label>
          <input
            type="text"
            className={classnames("form-control", {
              "is-invalid": errors.email
            })}
            placeholder="Enter your email"
            name="email"
            onChange={this.onChange}
          />
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
              "is-invalid": errors.password
            })}
            placeholder="Enter your password"
            name="password"
            onChange={this.onChange}
          />
          {errors.password ? (
            <div className="invalid-feedback">{errors.password}</div>
          ) : (
            ""
          )}
          <br />
          <button className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    );
  }
}
