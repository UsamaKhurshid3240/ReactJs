import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";


import withSplashScreen from './components/withSplashScreen';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      isLogginActive: true
    };
  
   
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
    

  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  
  render() {
   
    
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
    
	<div className="App">
  <div className="imageDiv image1"></div>
  <div className="imageDiv image2 fadeInClass"></div>
  <div className="imageDiv image3 "></div>
  <div className="imageDiv image4 fadeInClass"></div>

        <div className="login  ">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div> 
      
    );



  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        
        <div className="text"><h3>{props.current}</h3></div>
      </div>
    </div>
  );
};

export default withSplashScreen(App);
