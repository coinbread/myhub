// import { render } from "@testing-library/react";
import React, { Component } from "react";
import CardList from "./CardList";
import { friends } from "./friends";
import SearchBox from "./SearchBox";
import "./App.css";


class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: friends,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({searchField:  event.target.value});
        
        // console.log(filteredFriends);
    }

    render() {
        const filteredFriends = this.state.friends.filter(
            users => {
                return users.fullname.toLowerCase().includes(this.state.searchField.toLowerCase());
            }
        )
        return (
            <div className='tc'>
                <h1> MyHub Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList friends={filteredFriends}/>
            </div>
        )
    }
}

export default App;