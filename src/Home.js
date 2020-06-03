import React, {Component} from 'react';

// const Home = ()=><h1>Home</h1>

class Home extends Component {
    render(){
        return(
            <h1>{this.props.title}</h1>
        )
    }
}

export default Home;

