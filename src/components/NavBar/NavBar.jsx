import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/' className='NavBar-link' >Home</Link>
      <Link to='/about' className='NavBar-link' >About</Link>
      <Link to='/resume' className='NavBar-link' >Resume</Link>
      <Link to='/projects' className='NavBar-link' >Projects</Link>
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >Logout</Link>
    </div>
    :
    <div>
      <Link to='/' className='NavBar-link' >Home</Link>
      <Link to='/about' className='NavBar-link' >About</Link>
      <Link to='/resume' className='NavBar-link' >Resume</Link>
      <Link to='/projects' className='NavBar-link' >Projects</Link>
      <Link to='/login' className='NavBar-link'>Login</Link>
      {/* <Link to='/signup' className='NavBar-link'>Signup</Link> */}
    </div>;

  return (
    <nav className="NavBar">
      {nav}
    </nav>
  );
};

export default NavBar;