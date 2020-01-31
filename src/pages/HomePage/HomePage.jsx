import React, { Component } from 'react';
import userService from '../../utils/userService';

class HomePage extends Component {
    constructor() {
        super();
        this.state = { user: userService.getUser() };
    }


    render() {
        return (
        <div>
            <h1>HOME</h1>
            <h3 >Welcome back, {this.state.user.name}!</h3>
        </div>
        );
    }
}

export default HomePage;