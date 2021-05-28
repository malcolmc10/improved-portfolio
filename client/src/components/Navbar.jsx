import React from 'react'
import Linkedin from '../images/linkedin.svg'
import Medium from '../images/medium.svg'
import Github from '../images/github.svg'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div>
      <div className="nav-container">

        <header>
          <a href="#" className="logo">Colin Malcolm</a>

          <nav>
            <ul>
              <li><a href="#">My Work</a></li>
              <li><a href="https://pdfhost.io/v/g086dRiMN_Colin_Malcolm_Engineering_Resume_Google_Docspdf.pdf" target="_blank">Resume</a></li>
              <li><a href="#">Contact Me</a></li>
            </ul>
          </nav>
        </header>
         
        <div className="social-header">
          <ul>
            <li><a href="https://www.linkedin.com/in/colinpmalcolm/" target="_blank"><img src={Linkedin} alt="linkedin" /></a></li>
            <li><a href="https://medium.com/@colinmalcolm" target="_blank"><img src={Medium} alt="Medium" /></a></li>
            <li><a href="https://github.com/malcolmc10" target="_blank"><img src={Github} alt="github" /></a></li>
          </ul>

        </div>


      </div>
    </div>
  )
}

