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
                    <p>I am currently a computer science grad student at the University of Idaho in Coeur d'Alene. I recieved my bachelor's degree from U of I in December 2019.  I love being able to explore new tech and see what I am able to make! </p>
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
                    <p>Roboics was my first love in the computer science progam at my school. I helped program a three hundered pound robot to make coffee! In our program we use ROS to control the robots. I was the recipient of a scholarship to attend the ROS developers conference ROSCon in Macau.   </p>
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