import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  username = React.createRef();

  componentDidMount() {
    //this.username.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();
    //Call the server
    const username = this.username.current.value;
    console.log("Submit");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form onSubmit={this.handleSubmit}>
            <Input name="username" label="Username" value={account.username} onChange={this.handleChange} />

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={account.password}
                onChange={this.handleChange}
                id="password"
                name="password"
                type="text"
                className="form-control"
              ></input>
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default LoginForm;
