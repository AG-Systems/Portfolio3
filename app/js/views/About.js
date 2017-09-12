import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='About render'>
        <br/>
          <div className="card about-card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://i.imgur.com/nCsTexv.jpg" alt="Placeholder image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://maxcdn.icons8.com/Share/icon/color/Gaming//pikachu_pokemon1600.png" alt="Placeholder image"/>
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Max Chakhmatov</p>
                  <p className="subtitle is-6"></p>
                </div>
              </div>
          
              <div className="content">
                <p>Aspiring software engineer who loves to learning and programming
                </p>
                <p>Non CS hobbies:  Auto, Bowling, Gym, and Video editing</p>
                
                 <span>Email:  </span><a> maxchakhmatov@gmail.com</a>
                {/* <a href="#">#css</a> <a href="#">#responsive</a> */}
                <br/>
              </div>
            </div>
            <footer className="card-footer">
              <a href="https://www.linkedin.com/in/max-chakhmatov/" className="card-footer-item">LinkedIn</a>
              <a href="https://stackoverflow.com/users/5487345/auriga" className="card-footer-item">Stackoverflow</a>
              <a href="https://github.com/AG-Systems" className="card-footer-item">Github</a>
            </footer>
          </div>
      </div>
    );
  }
}
