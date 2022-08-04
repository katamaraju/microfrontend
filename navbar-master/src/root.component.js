import { Link } from "@reach/router";
import React from "react";

export default class Root extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Error</div>;
    } else {
      return (
        <>
          <Link className="navbar-brand" to="/">
            <img
              src="https://single-spa.js.org/img/logo-white-bgblue.svg"
              className="d-inline-block align-top"
              height="30"
              width="30"
              alt=""
            />
            Web Trading Client
          </Link>
          <div class="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/webtc">
                  Horse Racing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/football">
                  Foot ball
                </Link>
              </li>
            </ul>
          </div>
          <em className="text-white">{this.props.name} using React</em>
        </>
      );
    }
  }
}
