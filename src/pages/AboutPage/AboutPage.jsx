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
            <h3>Welcome!</h3>
            <p>
                Family from Armenia, born in Germany, raised in America, educated worldwide, I can see the world from many perspectives. This carried with me as I initially embarked on the path of medical school, and, after much consideration, chose instead the fronteir of software coding. While unique fields unto themselves, medicine and coding had one comment interest for me: taking smaller structures and building them into larger/complex systems. From functions to classes, front-end to back-end, JavaScript to Python, software engineering is where it's at.
            </p>
        </div>
        );
    }
}

export default AboutPage;