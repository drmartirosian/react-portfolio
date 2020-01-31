import React, { Component } from 'react';
import userService from '../../utils/userService';

class ProjectsPage extends Component {
    constructor() {
        super();
        this.state = { user: userService.getUser() };
    }


    render() {
        return (
        <div>
            <h1>PROJECTS</h1>
        </div>
        );
    }
}

export default ProjectsPage;