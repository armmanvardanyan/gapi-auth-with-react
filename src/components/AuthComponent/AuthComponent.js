import React from "react";

let id =
  "64595441703-98saa7uh7shij183peru1pilrmhdh4vr.apps.googleusercontent.com";

class AuthComponent extends React.Component {
  state = {
    isSignedIn: null,
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: id,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
          });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
    });
  };

  onSignOut = () => {
    this.auth.signOut();
  };
  onSignIn = () => {
    this.auth.signIn();
  };

  renderAuth = () => {
    if (this.state.isSignedIn === null) {
      return null;
    }
    if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui button red google">
          <i className="icon google" />
          Sign Out
        </button>
      );
    }
    return (
      <button onClick={this.onSignIn} className="ui button red google">
        <i className="icon google" /> Sign In
      </button>
    );
  };

  render() {
    return <div>{this.renderAuth()}</div>;
  }
}

export default AuthComponent;
