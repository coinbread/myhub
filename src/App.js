// import { render } from "@testing-library/react";
import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from './Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            searchField: ''
        }
        // console.log('1');
    }
    componentDidMount() {
        // console.log('2');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => { return response.json(); })
        .then(users => { this.setState({ friends: users}); });

        // this.setState( {friends: friends});
    }
    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({searchField:  event.target.value});
        
        // console.log(filteredFriends);
    }

    render() {
        console.log('this.state.friends', this.state.friends);
        const filteredFriends = this.state.friends.filter(
            users => {
                return users.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            }
        )
        // console.log('3');
        if ( this.state.friends.length === 0 ) {
            return <h1> Loading </h1>
        } else {
            return (
                <div className='tc'>
                    <h1> MyHub Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList friends={filteredFriends}/>
                    </Scroll>
                </div>
            )
        }
        
    }
}

export default App;