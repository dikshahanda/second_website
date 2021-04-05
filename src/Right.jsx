import React from 'react';
import Heading from './Heading';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Box from './Box';
import Timeline from './Timeline';
// import Slider from './Slider'
import GetAppIcon from '@material-ui/icons/GetApp';

const Right =() =>{
    return (
        <>
        <div className="rightcont "  >
        <div className="bannerimg" >
           <div className="banner-cont">
           <h1>I love  building
THINGS !!</h1>
<button className="btn"><a href="https://www.linkedin.com/" target="_blank">View CV</a><GetAppIcon /></button>
           </div>
        </div>
        <div className="colorlib-narrow-content animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
        <Heading Textp ="ABOUT US" Texth1='WHO AM I?' />
        <p className="">I am a computer grad student from DAIICT-Gandhinagar with ICT as my major.I love exploring new technologies and often amazed by 
            the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!)</p>
        <p>I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistaks 
            are very often.You can write me back if you spot any and don't want to live anymore :P</p>
            <Heading Textp ="WHAT I DO?" Texth1='HERE ARE SOME OF MY EXPERTISE' />
            <Box /> 
        </div>
        <div className="colorlib-narrow-content ">
        <Heading Textp ="HIGHLIGHTS" Texth1='TIMELINE?' />
        <Timeline />
        </div>
        </div>
        </>
    )
}




export default Right;