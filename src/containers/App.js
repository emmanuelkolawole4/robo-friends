import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import './App.css';
import Scroll from '../components/Scroll';

// we're creating a constant state for now and these are the things that our constant state needs for now. NOTE: to use state in REACT, we have to revert back to the way we created components normally and that's using class and not function anymore
// const state = {
//     robots: robots,
//     searchfield: ''
// }

// const App = () => {
//     return (
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots} />
//         </div>
//     );
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return <h1 className='tc'>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={ this.onSearchChange } />
                    <Scroll>
                        <CardList robots={ filteredRobots } />
                    </Scroll>
                </div>
            );
        }
    }
}


export default App;