import React from 'react';
import AddFriendInput from './AddFriendInput'
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import axios from 'axios'
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction:column;
  width: 350px;
`;
class AddFriendSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //friend: {
                  name:'',
                  email: '',
                  age: ''
              //    }
        };
    }

  handleChange = event => {
    this.setState({ 
      //friend: {
        ...this.state,
        [event.target.name]: event.target.value
          //}


        });
  };

  postFriend = friend => {
    friend.preventDefault();
    //const friend = {name: this.state.name, email: this.state.email, age: this.state.age}
    this.props.postFriend({name: this.state.name, email: this.state.email, age: this.state.age});
  }    


    render() {
        return (
      <div>
        <Form onSubmit={this.postFriend}>
          <label autosize= "false">
            Add a New Friend:
            </label>      
            <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value={this.state.name} 
            onChange={this.handleChange} 
            />
            <input 
            type="text" 
            name="email" 
            placeholder="Email"
            value={this.state.email} 
            onChange={this.handleChange} 
            />
            <input 
            type="text" 
            name="age" 
            placeholder="Age"
            value={this.state.age} 
            onChange={this.handleChange} 
            />  
          {
            this.props.postError ? 
            (<ErrorMessage message={this.props.postError} />)
            : 
            null
          }
          {
            this.props.postSuccessMessage ? 
            (<SuccessMessage message={this.props.postSuccessMessage} />) 
            : 
            null
          }  
          <button type="submit">Add</button>
        </Form>
      </div>
            )
    }
}

export default AddFriendSection;