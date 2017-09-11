import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        
        <nav className='nav'>
            <div className='container'>
              <div className='nav-left'>
                <a className='nav-item'>
                  Theory and Practice
                </a>
              </div>
          
              <label htmlFor='menu-toggle' className='nav-toggle'>
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type='checkbox' id='menu-toggle' className='is-hidden'/>
          
              <div className='nav-right nav-menu'>
                <Link to='/' className='nav-item'>Home</Link> 
                <Link to='/projects' className='nav-item' >Projects</Link>
                <Link to='/about' className='nav-item' >About</Link>
              </div>
            </div>
          </nav>
        <hr />
      </div>
    );
  }
}
