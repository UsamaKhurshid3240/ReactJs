import React from "react";
import loginImg from "../../login.svg";

// reactstrap components
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";
export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    document.getElementById('df').innerHTML=this.state.value;
    event.preventDefault();
  }
 
  render(){
  const {value}=this.state;
    return (
 
    //   <form onSubmit={this.handleSubmit}>

    //   <label>
    //     Name:
    //     <input type="text" value={this.state.value} onChange={this.handleChange} />
    //   <p id-="df">{value}</p>
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
      
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
         <form onSubmit={this.log}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" id="d" />
            </div>
           
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
          </form>
          </div>
        
        <div className="footer">
          <button type="button" className="btn"  >
            Register
          </button>
          
        </div>
      </div>
      
    );
  }
}
