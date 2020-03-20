import React from "react";
import loginImg from "../../login.svg";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     
      <div className="base-container" ref={this.props.containerRef}>

        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
