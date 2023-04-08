import React, { Component } from "react";
import { GiBlackBook } from "react-icons/gi";

import "./splash-screen.css";
// icons https://react-icons.github.io/react-icons/
function LoadingMessage() {
  return (
    <div className="splash-screen">
      <div classname="splash-icon-group">
        <div className="splash-icon">
          <GiBlackBook />
        </div>
        <span className="splash-icon-label">r</span>
      </div>
      <div className="brand-name">recipi</div>
      <div className="loading-dot">.</div>
    </div>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 10000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;