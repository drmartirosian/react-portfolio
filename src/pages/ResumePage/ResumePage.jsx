import React, { Component } from 'react';
import userService from '../../utils/userService';

class ResumePage extends Component {
    constructor() {
        super();
        this.state = { user: userService.getUser() };
    }


    render() {
        return (
        <div>
            <h1>RESUME</h1>
        </div>
        );
    }
}

export default ResumePage;