import React from 'react';
import User from './User.js';

function UsersList(props) {
    return (
      <div className="users-wrapper">
        {props.users.map(user => {
            return <User key={user.id} user={user} />
        })}
      </div>
    );
}
  
export default UsersList;