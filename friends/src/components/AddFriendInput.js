import React from 'react';
import styled from 'styled-components';


const AddFriendInput = (props) => {
    return (
        <form onSubmit={this.handlePost}>
          <label autosize= "false">
            Name:
            <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value={this.state.friend.name} 
            onChange={this.handleChange} 
            />
          </label>
          <label autosize= "false">
            Name:
            <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value={this.state.friend.name} 
            onChange={this.handleChange} 
            />
          </label>          
          <button type="submit">Add</button>
        </form>
        )
}

export default AddFriendInput;