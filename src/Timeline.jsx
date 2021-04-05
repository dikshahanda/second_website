import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
const Timeline =()=> {
    return (
      <>
      <div className="timlelime1">
        <div className="timeline2">
        </div>
        <div className="timelinebox1">
          <div className="timelineicon1">
            <div className='timelineiconn1'>
            <EmojiObjectsOutlinedIcon className="emicon"/>
            </div>
          </div>
          <span className="tmspan"></span>
            <h2>Internship at Juniper <span>2019-present</span></h2>
            <p>
            I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. 
            My major part of the work has been into the field of creating sustainable and flexible CI/CD 
            (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper
             to do rapid development. I am also exploring the role of container technology like Docker and
             container-orchrastation technologies like K8s, Swarm to create industry standard production environments.
            </p>
          </div>
          <div className="timelinebox1">
          <div className="timelineicon1">
            <div className='timelineiconn2'>
            <EmojiObjectsOutlinedIcon  className="emicon"/>
            </div>
          </div>
          <span className="tmspan"></span>
            <h2>Internship at Juniper <span>2019-present</span></h2>
            <p>
            I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. 
            My major part of the work has been into the field of creating sustainable and flexible CI/CD 
            (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper
             to do rapid development. I am also exploring the role of container technology like Docker and
             container-orchrastation technologies like K8s, Swarm to create industry standard production environments.
            </p>
          </div>
          <div className="timelinebox1">
          <div className="timelineicon1">
            <div className='timelineiconn3'>
            <EmojiObjectsOutlinedIcon className="emicon"/>
            </div>
          </div>
          <span className="tmspan"></span>
            <h2>Internship at Juniper <span>2019-present</span></h2>
            <p>
            I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. 
            My major part of the work has been into the field of creating sustainable and flexible CI/CD 
            (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper
             to do rapid development. I am also exploring the role of container technology like Docker and
             container-orchrastation technologies like K8s, Swarm to create industry standard production environments.
            </p>
          </div>
          
      </div>
      </>
    );
}

export default Timeline;