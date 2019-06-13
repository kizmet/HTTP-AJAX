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


  postFriend = friend => {
    axios
      .post(`http://localhost:5000/friends`, { 
        name: friend.name,
        age: friend.age,
        email: friend.email
         })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          friends: res.data,
          postError: '',
          postSuccessMessage: res.statusText + res.config.data
        })        
      })
       .catch(err => {
       console.log(err);
       this.setState({
       postSuccessMessage: '',
       postError: 'to err is human'
      });
    });
 
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