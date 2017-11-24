import React, { Component } from 'react';


class Card extends Component
{
  
  render()
  {
        const option = this.props.option;
        var email;
        var image;
        var footer;
        var styles;
        var card_size;
        if(option === 0)
        {
            email = <div><span>Email:  </span><a> maxchakhmatov@gmail.com</a></div>;
            image = <img src={ this.props.profile } alt={ this.props.title }/>;
            footer = <footer className="card-footer"><a href="https://www.linkedin.com/in/max-chakhmatov/" className="card-footer-item">LinkedIn</a><a href="https://stackoverflow.com/users/5487345/auriga" className="card-footer-item">Stackoverflow</a><a href="https://github.com/AG-Systems" className="card-footer-item">Github</a></footer>;
        }
        else
        {
           styles={ textAlign: "center" };
           card_size = {maxWidth: "none"};
        }
          return (
            <div className="card about-card" style={ card_size }>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={ this.props.bg } alt={ this.props.title } />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                    { image }
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{ this.props.title }</p>
                    <p className="subtitle is-6"></p>
                  </div>
                </div>
            
                <div className="content" style={ styles }>
                  <p>{ this.props.bio1 }</p>
  
                  <p>{ this.props.bio2 }</p>
                  
                   { email }
                  {/* <a href="#">#css</a> <a href="#">#responsive</a> */}
                  <br/>
                </div>
              </div>
              { footer }
            </div> 
          );
  }
}
export default class About extends Component {
  
  render() {
    return (
      <div className='About render'>
      <title>About </title>
        <br/>
          <Card title={"Max Chakhmatov"} bg={"https://i.imgur.com/nCsTexv.jpg"} profile={"https://maxcdn.icons8.com/Share/icon/color/Gaming//pikachu_pokemon1600.png"}   
          bio1={"Aspiring software engineer who loves to learning and programming"}
          bio2={"Non CS hobbies: Auto, Bowling, Gym, and Video editing"}
          option={0}
          
          />
          
          <br/>
          <h1 style={{ textAlign: "center", fontSize: "35px" }}> Hobbies </h1>
          <hr/>
          {/*  ===================================== */}
          <div style={{ maxWidth : "90%", margin: "0 auto" }}>
            <div className="columns">
                <div className="column">
                  <Card title={"Stock Market"} bg={"https://secureservercdn.net/da8.4a7.godaddywp.com/wp-content/uploads/2016/02/stock-market.jpg"} profile={""}   
                  bio1={"Investing is fun. Enough said"}
                  bio2={""}
                  option={1}
                  />      
                </div>
                <div className="column">
                  <Card title={"Poker"} bg={"https://fthmb.tqn.com/n1-BMHu8JF-qjwvKIhfiVonZbDk=/2116x1417/filters:fill(auto,1)/GettyImages-532125561-598929ef9abed5001081c3dd.jpg"} profile={""}   
                  bio1={"Fun game that involves risk, skill, luck, and math"}
                  bio2={""}
                  option={1}
                  />      
                </div>
                
                <div className="column">
                  <Card title={"Bowling"} bg={"http://laurellanesbowling.com/wp-content/uploads/2016/10/header-1-slider.jpg"} profile={""}   
                  bio1={"Who knew throwing heavy balls at pins can be so fun"}
                  bio2={""}
                  option={1}
                  />      
                </div>
            </div>
            <div className="columns">
                <div className="column">
                  <Card title={"Video editing"} bg={"https://assets.rocketstock.com/uploads/2016/09/Editing-Announcements-Feature-1000x576.jpg"} profile={""}   
                  bio1={"Video editing was going to be originally my career until I founded programming"}
                  bio2={""}
                  option={1}
                  />      
                </div>
                
                <div className="column">
                  <Card title={"Gym"} bg={"http://wallsdesk.com/wp-content/uploads/2016/10/Gym-Wallpaper-.jpg"} profile={""}   
                  bio1={"Lifting is a great way to feel good and be healthier"}
                  bio2={""}
                  option={1}
                  />      
                </div>
            </div>
          </div>
      </div>
    );
  }
}
