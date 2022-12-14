// import { render } from "@testing-library/react";
import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "../containers/App.css";
import Scroll from '../components/Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => { return response.json(); })
        .then(users => { this.setState({ friends: users}); });
    }
    onSearchChange = (event) => {
        this.setState({searchField:  event.target.value});
    }

    render() {
        const { friends, searchField } = this.state;
        const filteredFriends = friends.filter(
            users => {
                return users.name.toLowerCase().includes(searchField.toLowerCase());
            }
        )
        if ( !friends.length ) {
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