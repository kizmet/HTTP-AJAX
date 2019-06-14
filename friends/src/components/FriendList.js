import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Friend from './Friend'
const FriendUl = styled.ul`  
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    margin: 0 auto;  
    padding:0;
    max-width:800px;
    width:100%;
    list-style: none;
`;
const FriendLi = styled.li`
    display:flex;
    flex-direction:column;
    margin:4px;
    border:1px solid black;
    width:390px;
`;


function FriendList(props) {
    function routeToFriend(ev,friend) {
        ev.preventDefault();
        props.history.push(`/friend-list/${friend.id}`)
    }

        return (
            <FriendUl>
            {props.friends.map(friend => 
                <FriendLi key={friend.id} onClick={ev => routeToFriend(ev, friend)}>
                    <div>{friend.name}</div>
                    <div>{friend.email}</div>
                    <div>Age:{friend.age}</div>
                </FriendLi>)}
            </FriendUl>
            )
}
export default FriendList;



// function ItemsList(props) {
//   function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }
//   return (
//     <div className="items-list-wrapper">
//       {props.items.map(item => (
//         <div
//           onClick={ev => routeToItem(ev, item)}
//           className="item-card"
//           key={item.id}
//         >
//           <img
//             className="item-list-image"
//             src={item.imageUrl}
//             alt={item.name}
//           />
//           <p>{item.name}</p>
//           <p>${item.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ItemsList;