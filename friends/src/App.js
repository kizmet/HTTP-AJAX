import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import FriendList from './components/FriendList';
import AddFriendSection from './components/AddFriendSection';

import './App.css';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    friends:[],
          postSuccessMessage: '',
      postError: '',
      putSuccessMessage: '',
    name: '',
    email: '',
    age: ''
  } 

  }
  componentDidMount () {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        const friends = res.data;
        this.setState({friends})
      }
        )
  }


  handlePost = event => {
    event.preventDefault();

    const friend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
    };

    axios.post(`http://localhost:5000/friends`, { friend })
      .then(res => {
        console.log(res);
        console.log(res.data);
        const friends = res.data;
        this.setState({friends})        
      })
      //       .then(res => {
      //   const friends = res.data;
      //   this.setState({friends})
      // })
  }     

  render () {
    return (
      <div>
      <ul>
        <FriendList 
        friends={this.state.friends}
        />
      </ul>
      <AddFriendSection
        postFriend={this.postFriend}
        postSuccessMessage={this.state.postSuccessMessage}
        postError={this.state.postError}

       />
      </div>
      )
  }

}

export default App;
//{this.state.friends.map(friend => <li>{friend.name}</li>)}