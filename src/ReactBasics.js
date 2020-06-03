import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = ()=> <h1>Home</h1>
const About = ()=> <h1>About</h1>

class App extends Component{
  render(){
  return (
      <Router>
        <h1>Header</h1>
        <div>
          {/*We don't use the "a" tags, that's so 2014*/}
          <Link to="/">Home</Link>
          <Link to="/about"></Link>
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <h1>Footer</h1>
      </Router>
    );
  }
}

export default App;
