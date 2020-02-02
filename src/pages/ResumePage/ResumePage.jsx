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
            <a href="https://docs.google.com/document/d/1F1marCRFsup2EU_Wz96aagykpXIXkox8NvWNTqJfIcc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <img src="https://i.imgur.com/QB0ruWm.png" alt="Resume"></img>
            </a>
        </div>
        );
    }
}

export default ResumePage;