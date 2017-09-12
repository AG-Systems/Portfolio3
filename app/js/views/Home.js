import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    var middle = {textAlign: "center"}
    return (
      <div className='Home'>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Welcome to my site
              </h1>
              <h2 className="subtitle">
                Built with React.js
              </h2>
            </div>
          </div>
        </section>
        
        <div>
        <div className="content content-home">
        <br/>
          <div className="content-text">
            <h1>Making Pixelml</h1>
            <p><b>How I got the idea: </b>When I was trying to find an idea that is worth pursing to, my idea of validation was using a dummy site and use facebook ads to see how many people click on the ad. When I realized
            there is no good way of knowing how good your ad is (the photo that the user sees), I decided to focus on that.
            </p>
            <h5 style={middle}><b>Here are some of the biggest problems and outcomes I have faced </b>(In order)</h5>
            <h2>0) Choosing the tech stack</h2>
            <p>
                This is the first big issue I came across to. If you ask anybody, I was always a Ruby on Rails type of guy.  
                When I found out that most machine learning libraries out there are python exclusive, I not happy with the idea of using django or flask to make this site. 
                I decided instead to combine to 2 languages. First solution was every time a user went on the site, a script would run checking the db for any recent new uploads and performing the calculations there. 
                Huge security risk and I was very limited of just using sqlite3 database. It also made the site super slow to use. 
                I scrapped the entire thing until I found out how to run the script from the controller and insert the results into the post data instead. 
                It fixed the security issue, performance issue and now I can just use any database I want and the controller can handle the rest. I was happy.
            </p>
            <h5> First version: </h5>
            <figure>
              <img src="https://puu.sh/v4ki2/2e10b41c48.jpg"/>
              <figcaption>
                
              </figcaption>
            </figure>
            <h5> What I learned: </h5>
            <ul>
              <li>How to combine other technologies togeather in a better way</li>
            </ul>
            <h2>1) Hosting the images on Amazon S3 </h2>
            <p>
                After making the basic mockup, I wanted to host it just to see how it would work on production. Ran into issues pretty quick. 
                After a few minutes of uploading a photo, images would disappear. Simple fix was to use amazon s3. Never used amazon s3 before so it took some time to get used to it all.  
                That was really not the problem i faced however. THe biggest problem I faced was, on accident I exposed my amazon keys to my public repo and a bot took them and made a bunch of bitcoin mining servers. 
                Had to do a bunch of work and call support to deal and fix with the issue. Made that repo private and learned how to use git ignore + environment variables that day.  
                One expensive error. Luckly I got all of my money back ❤ Amazon support             
            </p>
            <img src="https://puu.sh/vJDZt/143f303e9c.png"/>
            <h5> What I learned: </h5>
            <ul>
              <li>Amazon api keys are extremely valuable</li>
              <li>Amazon support is amazing </li>
              <li>How to use git ignore better and environment variables </li>
            </ul>
            <h2>2) Basic version of algorithm</h2>
            <p>
                Figuring out how to make the algorithm was a interesting process. I started off with a script that does image recognition. 
                Then I started off doing text ocr off a image. It was wonky but it was better than nothing. 
                Next I did a bunch of minor things, like pull brightness and contrast from the ad. 
                The last and hardest step was making a neural network which I found a tutorial online and modified the code to make it work with mine.             
            </p>
            <h5> What I learned: </h5>
            <ul>
              <li>How to use tesseract ocr with an python wrapper</li>
              <li>How to get infomation of an image using cv2, PIL, and Color thief</li>
              <li>How to implient an conventional neural network</li>
            </ul>
            
            <h2>3) All connecting it together</h2>
            <p>
              This was a ongoing process. 
              The issue with rails is doing the it does a lot of magic behind. 
              The library I was using to handle the amazon s3, it would directly upload to Amazon S3. 
              I needed the image locally to perform my scripts so what I ended up doing is making it upload to s3, and then downloading it, run the scripts, and just delete the images once done. 
              I know its bad design but this is a start.           
            </p>
            <blockquote>
                If you are not embarrassed by the first version of your product, you’ve launched too late.
                </blockquote>
            <h5> What I learned: </h5>
            <ul>
              <li>How to pull images from Amazon S3 and use extrenal Ruby libraries</li>
              <li>How to keep going </li>
            </ul>
            
            <h2>4) Design</h2>
            <p>
              Design was a big one. I never really focused on design before so this was a tough one. I got a bunch of people to be honest and I saw their reactions and how they navigated and used the site. 
              Made a bunch of changes to the design. 
              As you can see in the screenshots, I made a lot of progress the way         
            </p>
            <figure>
              <img src="https://puu.sh/vCo6q/0608208025.png"/>
              <img src="https://puu.sh/vDvKK/f913e20b88.png" />
              <img src="https://puu.sh/vDAj6/06f8a7012c.png"/>
              <img src="https://puu.sh/vFAwu/e28a6faf5c.png" />
              <img src="https://puu.sh/vKo27/0ce09382de.png"/>
              <img src="https://puu.sh/vMvII/8d973517d3.png" />
              <img src="https://puu.sh/vQYsW/02326dc145.png"/>
              <img src="https://puu.sh/vQZCL/db4b1105aa.png" />
              <img src="https://puu.sh/vQZEN/1e462b3933.png"/>
              <img src="https://puu.sh/vTbTB/fcaabd241f.gif" />
              <figcaption>
                
              </figcaption>
            </figure>
            <h5> What I learned: </h5>
            <ul>
              <li>User experience is the number one thing to focus on</li>
              <li>How well something works, and how something looks like are 2 very important things </li>
            </ul>            
            
            <h2>5) PIVOT </h2>
            <p>
              My original business model was, users get unlimited free uploads for the image recognition and a basic rating. They can pay if they want anything else however. 
              It was simplified to free users get 5 uploads per month and paying users get unlimited. 
              Also I hide a lot of the stuff and showed only the rating and the results. 
              No more image recognition (it's hidden away from the user so it's still there)      
            </p>
            <h5> What I learned: </h5>
            <ul>
              <li>How simple business models are far superior</li>
              <li>Keep it simple and stupid </li>
            </ul>
            
            <h2>6) Neural network improvements </h2>
            <p>
              I noticed the neural network was very inconsistent so I had to find more data. 
              Finding the data is and will be one of the hardest challenges right now. 
              After pulling data all day, I managed to improve on it and make it semi workable. 
              It's better than nothing.  
            </p>
            <h5> What I learned: </h5>
            <ul>
              <li>Nerual networks LOVE data</li>
              <li>Machine learning is not just building the algorithm. Its cleaning the data as well.</li>
            </ul>            
            

            <h2>7) Hosting with google cloud </h2>
            <p>
                Hosting on heroku was starting to become a pain. Since my application had a bunch of libraries and a bunch of external linux software it needed to use (buildpacks filled up space limit quickly) I had to find a different hosting. 
                Also the value I got for $50 per month, was pretty poor so I decided I needed something better. 
                I moved over to google cloud compute engine and there struggled for a while figuring out how to do hosting. 
                I never did hosting before but I finally managed to get it working with apache2, passenger and a few other things. 
                I had to make some security fixes as well too.
            </p>
            <h5> What I learned: </h5>
            <ul>
              <li>How to host my own app instead of just pushing to heroku</li>
              <li>The basics of securing your application </li>
            </ul>   
            


            <h2>8) Design again </h2>
            <p>
              Design is very important as I found out. Google made their search engine really clean compared to other search engines such as yahoo and that helped a lot to becoming to where they are today. 
              I got a lot of feedback from people and users on reddit to improve the design of the site.  
              I made the site make look more and more of a admin panel
            </p>
            <figure>
              <img src="https://puu.sh/w1yRL/ceab4005b9.png"/>
              <img src="https://puu.sh/w1yCQ/a637f9a4c8.gif" />
              <img src="https://puu.sh/wbWrA/43812b88d6.png"/>
              <img src="https://puu.sh/waiup/695a2d81f3.png" />
              <img src="https://puu.sh/wee3p/e5121438ac.png"/>
              <figcaption>
                
              </figcaption>
            </figure>
            <h5> What I learned: </h5>
            <ul>
              <li>Design can really make or break a site</li>
              <li>Design is something that always gets improved and is never finished</li>
            </ul> 
             
            <h2>9) Algorithm pivot </h2>
            <p>
              I’m always working on the algorithm. That is the meat and bones of the project. 
              At first, it was a bunch of if statements to provide feedback (make this change to the ad etc), to loading bars. 
              If the photo was easily recognisable by the computer, the bar would be filled 100% and vice versa. 
              I realized computers are really good things that are data, and number like and less on the emotional human counterpoint (duhh). 
              Not many people however liked it. 
            </p>
            <figure>
              <img src="https://puu.sh/weExM/4de2d12541.png"/>
              <img src="https://puu.sh/wedIj/b18da1265d.png" />
              <figcaption>
                
              </figcaption>
            </figure>
            <h5> What I learned: </h5>
            <ul>
              <li>Sometimes the solution can be right in front of your eyes</li>
            </ul>            
            
            <h2>10) Design again</h2>
            <p>
              This design change was my most favorite one yet. 
              I basically took my favorite shade of green and redid all of the colours of the website to green and dark grey. 
              This is when I heard great things about the design of the site by my friends and myself included. 
              Still not perfect but a lot of progress. 
              It's crazy how much colours can make or break a site. 
            </p>
            <figure>
              <img src="https://puu.sh/wiE3p/c56a680fba.png"/>
              <img src="https://puu.sh/wiFCp/7bbe21edb3.png" />
              <img src="https://puu.sh/wiGA6/6d1fd7f357.png"/>
              <img src="https://puu.sh/wiHs6/fda51f570a.png" />
              <img src="https://puu.sh/wiHtw/43da58b406.png"/>
              <img src="https://puu.sh/wk0Zh/0183863488.png" />
              <img src="https://puu.sh/wk35h/ae22722402.png"/>
              <img src="https://puu.sh/wrvmt/51e8a533e4.png" />
              <img src="https://puu.sh/wiIFC/d7a38e952c.gif"/>
              <img src="https://puu.sh/wTiwg/4861c62d7f.png" />
              <figcaption>
                
              </figcaption>
            </figure>
            <h5> What I learned: </h5>
            <ul>
              <li>Colour also plays a huge part in design</li>
            </ul>              
            
             <h2>11) Algorithm pivot </h2>
            <p>
            I found out the bar results are not perfect and only one for one attribute. 
            I redid to make more english based and make it more easier to understand. 
            I also added another neural network to capture the edge cases of the main one fails. 
            Both neural networks need a lot of work end of the day but it was a temporary valid solution. 
            </p>
            <figure>
              <img src="https://puu.sh/xyaJe/8d32378f26.png"/>
              <figcaption>
                
              </figcaption>
            </figure>
            <h5> What I learned: </h5>
            <ul>
              <li>Algorithms take a lot of work</li>
            </ul>            
            
              <h2>12) SITE KEEPS CRASHING! </h2>
            <p>
              I noticed if 2 users upload a photo same time, the site would crash and break. The funniest thing is I forgot to check the machine learning modle when a user is uploading a photo.
              So what ended up happening, is every time a user uploads a photo, the model would retrain it self and take up a bunch of cpu power. Easy fix.
            </p>
            <h5> What I learned: </h5>
            <ul>
              <li>Look at your code lol</li>
            </ul>               
            
            <h2>13) Users </h2>
            <p>
              I had to get more than just my friends, family and some local engineers feedback to get it. 
              I kept posting my site on reddit and trying to get it out there. 
              As we speak, I have 13 users and some of them offered very in depth feedback which was crazy. 
              Listened to them and made my changes to the site
            </p>
            <h5> What I learned: </h5>
            <ul>
              <li>Get early feedback and make changes as soon as possible!</li>
            </ul>                
            
            <h2>14) Future of the site and personal thoughts  </h2>
            <p>
              At the moment as we speak, I have not worked on the site for a month now. The biggest issue I face is just the main neural network. 
              The rating and feedback system needs a lot of work.  
              For now, it's going to be on a hold as I want to focus more on school and I need to fix a lot of personal issues I have been facing past few months. 
              If I can get the neural networks working properly, I will be a lot more motivated to work on it but as we speak, it's been difficult to get into it. 
            </p>
            <h5> What I learned: </h5>
            <ul>
              <li>Solving problems are hard</li>
            </ul>   
            <br/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
