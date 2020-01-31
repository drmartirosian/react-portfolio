import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div class="card card-body text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="https://github.com/drmartirosian?tab=repositories" target="_blank">Github</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/in/drmartirosian/" target="_blank">LinkedIn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://codepen.io/drmartirosian/pens/popular" target="_blank">CodePen</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://codesandbox.io/u/drmartirosian/sandboxes" target="_blank">CodeSandbox</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Contact</h5>
        <p class="card-text">Contact me @:</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
    </div>
  );
};

export default Footer;