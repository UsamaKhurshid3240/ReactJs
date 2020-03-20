import React from "react";
import loginImg from "../../login.svg";
import test from '../../test';
export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {black: true,
      value:1
  };

    //this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event) {
  //   this.setState({black: !this.state.black});
  //   this.state.value=2;
  //   this.setState({value: !this.state.value});
  //   event.preventDefault();
  // }
  render() {
//     let red, blue;
//     if(this.state.value==1){
//     red =this.state.black ? "blackButton" : "whiteButton";
//     }
//     else{
//     blue =this.state.black ? "blackButton" : "whiteButton";
//     }
    return (
    
      <div className="base-container" ref={this.props.containerRef}>



{/* // <div className={red}>
// 1

// </div>
// <div className={blue}>
// 2
// </div>
// <button className="b" onClick={this.handleChange} ></button> */}

        <div className="header"><h1>Login</h1></div>
        <div className="content">
          <div className="soc">
            
            
        <div className="fb"><button className="fb-btn"> <i className=" fa fa-facebook  fb-icn"></i></button></div>
        <div className="ggl"><button className="ggl-btn"> <i className=" fa fa-google ggl-icn"></i></button></div>
        <div className="lnk"><button className="lnk-btn"> <i className=" fa fa-linkedin lnk-icn"></i></button></div>
       
          </div>
          <div className="form">
            <div className="form-group">
 
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
