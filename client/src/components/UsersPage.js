import React from 'react';
import api from '../helpers/api';
import withAuth from '../helpers/withAuth';

import UsersList from './UsersList.js';

class UsersPage extends React.Component {
    state = {
        users: [],
    }
    async componentDidMount() {
        try {
            const result = await api.get('./users');
            this.setState({
                users: result.data,
            })
        } catch (err) {
            console.log(err);
        }

    }
    render() {
        return (
            <>
                <h3>Users</h3>
                <UsersList users={this.state.users} />
            </>
        )
    }
}

export default withAuth(UsersPage);