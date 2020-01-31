import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ResumePage from '../ResumePage/ResumePage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {

    return (
      <div>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>


          <Route exact path='/' render={() => <HomePage /> }/>
          <Route exact path='/about' render={() => <AboutPage /> }/>
          <Route exact path='/projects' render={() => <ProjectsPage /> }/>
          <Route exact path='/resume' render={() => <ResumePage /> }/>


          <Route exact path='/signup' render={({ history }) => <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} /> }/>
          <Route exact path='/login' render={({ history }) => <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} /> }/>



        </Switch>
      </div>
    );
  }
}

export default App;