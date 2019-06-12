import React from 'react';


class FriendList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            {this.props.friends.map(friend => <li key={friend.id}>{friend.name}</li>)}
            </div>
            )
    }
}
export default FriendList;