import React from 'react';

function User(props) {
    return (
      <div className="user-wrapper">
        <p>Username: {props.user.username}</p>
        <p>Department: {props.user.department}</p>
      </div>
    );
}
  
export default User;