import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">About Me</h2>
                    <p>The fist thing you should know about me is that I love learning new things! I am currently working on earning my master's degree in Computer Science at the University of Idaho's Coeur d'Alene center. I also went to U of I for my undergrad in computer science, which I recieved in December of 2019. What I love most about the field is that there is always something new to learn and dive into. As tech continues to evolve and grow, I will have the opportunity to do so as well.  </p>
                    <p>I have hobbies outside of tech as well. I love spending time outdoors with my family. That is a cliche statement, but it's true! We live in a beautiful area and I like to take advantage of that. We do a lot of bike riding and hiking durring the summer time. A new hobby I tackled durring the pandemic is gardening. I have been having a fun learning the ins and outs of growing food.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Areas of interest</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>My formal education doesn't include web development, but it is something that I am actively learning outside of the classroom for pleasure. In fact, this webpage is my first website! How cool is that? I am excited to continue learning web development skills and putting work on display for all to see.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Microcontrollers and Embedded Systems</h3>
                    <p>Many of the projects that I have done for both work and school have involved tiny computers. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-heart" />
                </span>
                <div className="desc">
                    <h3>Robotics</h3>
                    <p>Roboics was my first love in the computer science progam at my school. My first robotics project was to work with a group to program a 300 lb to make coffee! In our program we use ROS to control the robots. I was the recipient of a scholarship to attend the ROS developers conference ROSCon in Macau.   </p>
                </div>
                </div>
            </div>
           
            </div>
        </div>
        </section>
      </div>
    )
  }
}