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
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Tech</th>
                        <th scope="col">Status</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-info">
                        <th scope="row">BLANK</th>
                        <td>BLANK</td>
                        <td>BLANKs</td>
                        <td><a href="" target="_blank">BLANK</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default ProjectsPage;