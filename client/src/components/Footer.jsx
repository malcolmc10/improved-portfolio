import React from 'react'
import Linkedin from '../images/linkedin.svg'
import Medium from '../images/medium.svg'
import Github from '../images/github.svg'
import "./Footer.scss";

export default function Footer() {
  return (
    <div>


      <div className="social-footer">
        
        
          <ul>
            <li><a href="https://www.linkedin.com/in/colinpmalcolm/" target="_blank"><img src={Linkedin} alt="linkedin" /></a></li>
            <li><a href="https://medium.com/@colinmalcolm" target="_blank"><img src={Medium} alt="Medium" /></a></li>
            <li><a href="https://github.com/malcolmc10" target="_blank"><img src={Github} alt="github" /></a></li>
          </ul>

        </div>
      
    </div>
  )
}
