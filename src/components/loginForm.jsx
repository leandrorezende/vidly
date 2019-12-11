import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //Call the server
    console.log("Submit");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="username"
              label="Username"
              value={data.username}
              error={errors.username}
              onChange={this.handleChange}
            />
            <Input
              name="password"
              label="Password"
              value={data.password}
              error={errors.password}
              onChange={this.handleChange}
            />
            <button disabled={this.validate()} className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default LoginForm;
