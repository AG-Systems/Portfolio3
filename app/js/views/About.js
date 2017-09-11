import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='About render'>
          <div className="card about-card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="http://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
          
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
              </div>
            </div>
            <footer className="card-footer">
              <a href="" className="card-footer-item">Save</a>
              <a href="" className="card-footer-item">Edit</a>
              <a href="" className="card-footer-item">Delete</a>
            </footer>
          </div>
      </div>
    );
  }
}
