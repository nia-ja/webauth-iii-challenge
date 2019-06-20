import React from 'react';
import api from '../helpers/api';

class SignupPage extends React.Component {
    state ={
        department: '',
        username: '',
        password: ''
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        try {
            const {department, username, password} = this.state;

            const result = await api.post('/auth/register', {
                department,
                username,
                password,
            })
            this.setState({
                department: '',
                username: '',
                password: ''
            })
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="department"
                        placeholder="Department"
                        onChange={this.handleChange}
                        value={this.state.department}
                    />
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <button type="submit">Sign up</button>

                </form>
            </>
        )
    }
}

export default SignupPage;