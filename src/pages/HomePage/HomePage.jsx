import React, { Component } from 'react';
import userService from '../../utils/userService';

class HomePage extends Component {
    constructor() {
        super();
        this.state = { user: userService.getUser() };
    }

    render() {
    let wlcMsg = this.state.user ? <h3>Welcome back, {this.state.user.name}!</h3> : <h3>Welcome!</h3>
        return (
        <div>
            <h1>HOME</h1>
            {wlcMsg}
        </div>
        );
    }
}

export default HomePage;