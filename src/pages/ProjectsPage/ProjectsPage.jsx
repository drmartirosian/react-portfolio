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
                    {/* <tr className="table-info">
                        <th scope="row">BLANK</th>
                        <td>BLANK</td>
                        <td>BLANKs</td>
                        <td><a href="" target="_blank">BLANK</a></td>
                    </tr> */}
                    <tr className="table-info">
                        <th scope="row">Tres-Commas</th>
                        <td>MERN-stack, JS</td>
                        <td>IN-PROGRESS</td>
                        <td><a href="https://github.com/drmartirosian/Tres-Commas-1.5" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>
                    <tr className="table-info">
                        <th scope="row">Django-Todo</th>
                        <td>Djsngo, Python</td>
                        <td>COMPLETE</td>
                        <td><a href="https://github.com/drmartirosian/Django-Todo" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>
                    <tr className="table-info">
                        <th scope="row">Mastermind</th>
                        <td>MERN-stack, JS</td>
                        <td>COMPLETE</td>
                        <td><a href="https://github.com/drmartirosian/React-Masterminds-Game" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>
                    <tr className="table-info">
                        <th scope="row">Circles</th>
                        <td>MERN-stack, Socket.io, JS</td>
                        <td>COMPLETE</td>
                        <td><a href="https://github.com/drmartirosian/Circle-Game" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>
                    <tr className="table-info">
                        <th scope="row">Battery REACTor</th>
                        <td>React, JS</td>
                        <td>COMPLETE</td>
                        <td><a href="https://github.com/drmartirosian/React-Battery-Hooks" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>
                    <tr className="table-info">
                        <th scope="row">React Weather API</th>
                        <td>React, JS, openweathermap.org</td>
                        <td>COMPLETE</td>
                        <td><a href="https://github.com/drmartirosian/React-Weather-App-Ajax" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>
                    <tr className="table-info">
                        <th scope="row">Home-Sweet-Home</th>
                        <td>Django, Python, PostgreSQL, Materialize</td>
                        <td>COMPLETE</td>
                        <td><a href="https://github.com/drmartirosian/home_sweet_home" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>
                    <tr className="table-info">
                        <th scope="row">Flight Ticket Simulator</th>
                        <td>JS, Express, MongoDB</td>
                        <td>IN-PROGRESS</td>
                        <td><a href="https://github.com/drmartirosian/mongoose-flights" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>
                    <tr className="table-info">
                        <th scope="row">TIC-TAC-TOE</th>
                        <td>HTML, CSS, JS</td>
                        <td>COMPLETE</td>
                        <td><a href="https://github.com/drmartirosian/TIC-TAC-TOE" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>
                    <tr className="table-info">
                        <th scope="row">Guessing Game</th>
                        <td>JavaScript</td>
                        <td>COMPLETE</td>
                        <td><a href="https://github.com/drmartirosian/Guessing-Game" target="_blank" rel="noopener noreferrer">GITHUB</a></td>
                    </tr>




                </tbody>
            </table>
        </div>
        );
    }
}

export default ProjectsPage;