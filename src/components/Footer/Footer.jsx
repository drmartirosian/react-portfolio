import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="card card-body text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="https://github.com/drmartirosian?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/drmartirosian/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://codepen.io/drmartirosian/pens/popular" target="_blank" rel="noopener noreferrer">CodePen</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://codesandbox.io/u/drmartirosian/sandboxes" target="_blank" rel="noopener noreferrer">CodeSandbox</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Contact</h5>
        <p className="card-text">Contact me @:</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
      </div>
    </div>
  );
};

export default Footer;