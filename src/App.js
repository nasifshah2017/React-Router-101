import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';
import Help from './Help';

// Components

const Host = ()=><h1>Become a host</h1>
const Login = ()=><h1>Login</h1>
const Signup = ()=><h1>Sign up</h1>

class App extends Component{
  render(){
  return (
      <Router>
        {/*The slash(/) route will have the NavBar component rendered at every page*/}
        <Route path="/" component={NavBar}/>
        {/*Going to this Route, React renders this component on the page*/}
        <Route exact path="/" render={(props)=>{
          return <Home title="Hello" history={this.props.history} match={this.props.match}/>
        }}/>  
        <Route exact path="/host" component={Host}/>
        <Route path="/help" component={Help}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </Router>
    );
  }
}

export default App;
