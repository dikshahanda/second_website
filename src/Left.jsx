import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
// import {Nav,NavLink,NavMenu} from './react-router-dom';
import './index.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Firstclick = () =>{
     return (
         <>
           <PerfectScrollbar>
           {/* <div className="sidebar"> */}
           <div className="vertical-nav " id="sidebar">
  <div className="py-4 px-3 mb-4 ">      
    <div className="media-body">
      <h4 className="font-weight-white text-muted mb-0"><img src="https://qph.fs.quoracdn.net/main-qimg-55cf6b18c78fd462ad9d24ca75349cc8.webp " alt="notfound" />
</h4>
    </div>      
  </div>
  <div className="page-content " id="content">

{/* <!-- Toggle button --> */}
<button id="sidebarCollapse" type="button" className="btn btn-dark bg-dark rounded-pill shadow-sm ">
  <small className="text-uppercase font-weight-bold">Toggle</small>
</button>

{/* <!-- Page content --> */}

</div>
  <h1 className="headnm font-weight-bold text-uppercase px-3 small  mb-3">Diksha Handa</h1>
               <a href="mailto:dikshahanda2345@gmail.com" className="cola ">📧dikshahanda2345@gmail.com </a>
  <ul className="nav flex-column  mb-0">
  <li className="nav-item">
      <a href="#" className="nav-link  ">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link  ">
        About
      </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link  ">
        Services
      </a>
    </li>
    <li className="nav-item">
      <a href="https://www.facebook.com/" target
      ="_blank" className="nav-link ">
      <FacebookIcon />
      </a>
    </li>
    <li className="nav-item">
      <a href="https://www.linkedin.com/" target
      ="_blank" className="nav-link ">
      <LinkedInIcon />
      </a>
    </li><li className="nav-item">
    <a href="https://www.instagram.com/" target
      ="_blank" className="nav-link ">
      <InstagramIcon />
      </a>
    </li><li className="nav-item">
      <a href="#" className="nav-link ">
      <LinkedInIcon />
      </a>
    </li><li className="nav-item">
      <a href="#" className="nav-link ">
      <TwitterIcon />
      </a>
    </li><li className="nav-item">
      <a href="#" className="nav-link ">
      <InstagramIcon />
      </a>
    </li>
    
  </ul>
  <p className="pt-3">Made with ❤️ and 😄</p>
                <p>Thanks Colorlib for inspiration</p>
                <p className="smcom">Something coming soon !!</p>
</div>
           {/* </div> */}
           </PerfectScrollbar>
         </>
     )
}

export default Firstclick;
