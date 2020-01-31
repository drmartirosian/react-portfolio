import React, { Component } from 'react';
import userService from '../../utils/userService';

class AboutPage extends Component {
    constructor() {
        super();
        this.state = { user: userService.getUser() };
    }


    render() {
        return (
        <div>
            <h1>ABOUT</h1>
        </div>
        );
    }
}

export default AboutPage;