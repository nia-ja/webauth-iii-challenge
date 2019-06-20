import React from 'react';

function User(props) {
    return (
      <div className="user-wrapper">
        <h4>Username: {props.user.username}</h4>
        <p>Department: {props.user.department}</p>
      </div>
    );
}
  
export default User;