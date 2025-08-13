import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        avatar_url: "dummy Avatar Url",
        login: "dummy Login",
        url: "dummy Url",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pradeepkumar1015");
    const json = await data.json();
    this.setState({ user: json });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is called");
  }

  render() {
    const { name } = this.props;
    const { avatar_url, login, url } = this.state.user;
    return (
      <div className="m-4 p-4 bg-gray-100 rounded-lg w-100 h-50 hover:border">
        <h2 className="font-semibold">Name: {name}</h2>
        <div>
          <UserContext.Consumer>
            {(data) => {
              return <p>Logged in User: {data.user}</p>;
            }}
          </UserContext.Consumer>
        </div>
        <img
          className="h-12 w-12 rounded-full mb-2"
          src={avatar_url}
          alt={name}
        />
        <p>Login: {login}</p>
        <p className="word-wrap">Url: {url}</p>
      </div>
    );
  }
}

export default UserClass;

/**
 * In The Mounting phase
 * First Constructor is called
 * Then render method is called
 * and Load the HTML in the with dummy data
 * After that componentDidMount is called
 * ---------Mounting Phase Done
 * Update Phase Starts
 * update the state with the data from API
 * setState is called which triggers a re-render
 * and the render method is called again
 * and the HTML is updated with the data from API
 * --------caomponentDidMount is called only once
 * ---------Mounting Phase Done
 */
