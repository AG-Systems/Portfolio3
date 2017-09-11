import React, { Component } from 'react';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {img: [0,0,0,0,0,0,0,0]};

  }
  stack(el)
  {
      var element = document.getElementById(el);
      if (document.getElementById(el).style.display === 'block') { 
          element.style.display = ('none');
      } else {
          element.style.display = ('block');
      }
  }
  render() {
          const Data = [
            {
                name: 'Pixelml',
                text: 'Pixelml is a site built to handle ',
                images: ["https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"],
                site: "https://pixelml.com/",
                stack: ["http://i.imgur.com/QyMnYqB.png", 
                    "https://seeklogo.com/images/S/stripe-logo-0D5E7459A5-seeklogo.com.png", 
                    "http://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
                    "https://avatars1.githubusercontent.com/u/13629408?v=4&s=400",
                    "https://www.barracuda.com/assets/img/sections/programs/google_cloud/gcp_logo.png",
                    "https://lh3.googleusercontent.com/hIViPosdbSGUpLmPnP2WqL9EmvoVOXW7dy6nztmY5NZ9_u5lumMz4sQjjsBZ2QxjyZZCIPgucD2rhdL5uR7K0vLi09CEJYY=s688",
                    "http://scikit-learn.org/stable/_images/scikit-learn-logo-notext.png"
                ],
                info: false,
                github: ""
            },
        
            {
                name: 'Confident mindset',
                text: 'something@gmail.com',
                images: ["https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"],
                site: "http://www.confidentmindset.com/",
                stack: ["http://i.imgur.com/QyMnYqB.png", 
                        "https://seeklogo.com/images/S/stripe-logo-0D5E7459A5-seeklogo.com.png", 
                        "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
                        "https://a.slack-edge.com/bfaba/img/api/hosting_heroku.png"
                
                ],
                info: true,
                github: "https://github.com/AG-Systems/confidentmindset.git"
            }
        ]
    var style = {display: "none"}
    return (
      <div className='Project columns'>
                    {
                        Data.map( (element, index) => {
                        let show_source = element.info
                        let source = null;
                            if(!show_source)
                            {
                                source = "Source hidden";
                            }
                            else
                            {
                                source = "View source code";
                            }
                            return (
                                    <div className='column' key = { index }>
                                          <div className="card project-card">
                                          <div className="card-image">
                                            <figure className="image is-4by3">
                                              <img src={ element.images[0] } alt="Placeholder image"/>
                                            </figure>
                                          </div>
                                          <div className="card-content">
                                            <div className="content project-title">
                                             <h1> { element.name }</h1>
                                             
                                            </div>                                            
                                            
                                            <div className="content">
                                              <p>{ element.text }</p>
                                              <div style={style} id={index}>
                                                  <h3 className="project-title">Tech stack: </h3>
                                                  <ul className="stack-grid">
                                                    {element.stack.map(function(name, index){
                                                            return <img key={ index } src={name} height="100" width="100" />;
                                                    })}
                                                   
                                                  </ul>
                                              </div>
                                              <div className="content-btn">
                                                    <a className="button is-primary">Read more</a>
                                               </div>
                                              {/* <br/> */}
                                            </div>
                                          </div>
                                          <footer className="card-footer">
                                            <a href={element.github} className="card-footer-item">{source}</a>
                                            <a href={element.site} className="card-footer-item">View site</a>
                                            <a className="card-footer-item" onClick={() => this.stack(index)} >View tech stack</a>
                                          </footer>
                                        </div>
                                      </div>
                            )
                        })
                    }
                    
      </div>
    );
  }
}