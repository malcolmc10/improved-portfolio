import React from "react";
import Covid from "../images/Covid.png"
import Reactsvg from "../images/react.svg"

export default function Intro() {
  return (
    <div>
      <div className="hero">
        <div className="content">
          <h1>Hi! I'm Colin Malcolm a Software Engineer</h1>

          <div className="meet">
          <span>👇</span>
          <p>Learn more below</p>
          </div>

{/* scroll animation below */}
          <svg class="scroll" width="43" height="73" viewBox="0 0 43 73">
  <g id="Toggle-1" transform="translate(-248 -716)">
    <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(248 716)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="6">
      <rect width="43" height="73" rx="21.5" stroke="none"/>
      <rect x="3" y="3" width="37" height="67" rx="18.5" fill="none"/>
    </g>
    <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="12.5" cy="13.5" rx="12.5" ry="13.5" transform="translate(257 725)" fill="#fff"/>
  </g>
</svg>
        </div>

        
        {/* big animation below */}

      <svg  class="hero-design" width="600" height="600" viewBox="0 0 600 600">
  <g id="hero-image" transform="translate(-856 -240)">
    <rect class="square-anim" id="Rectangle_4" data-name="Rectangle 4" width="150" height="150" rx="11" transform="translate(1156 240)" fill="#6e00ff"/>
    <rect class="square-anim" id="Rectangle_5" data-name="Rectangle 5" width="150" height="150" rx="11" transform="translate(1306 390)" fill="#6e00ff" opacity="0.426"/>
    <rect class="square-anim" id="Rectangle_6" data-name="Rectangle 6" width="150" height="150" rx="11" transform="translate(1006 390)" fill="#fff"/>
    <rect class="square-anim" id="Rectangle_7" data-name="Rectangle 7" width="150" height="150" rx="11" transform="translate(1156 540)" fill="#6e00ff"/>
    <rect class="square-anim" id="Rectangle_8" data-name="Rectangle 8" width="150" height="150" rx="11" transform="translate(856 540)" fill="#fff" opacity="0.213"/>
    <rect class="square-anim" id="Rectangle_9" data-name="Rectangle 9" width="150" height="150" rx="11" transform="translate(1006 690)" fill="#fff"/>
    <circle class="square-anim" id="Ellipse_2" data-name="Ellipse 2" cx="75.5" cy="75.5" r="75.5" transform="translate(1155 390)" fill="#ff64cb"/>
    <circle class="square-anim" id="Ellipse_3" data-name="Ellipse 3" cx="75.5" cy="75.5" r="75.5" transform="translate(1006 539)" fill="#00f7ff"/>
  </g>
</svg>
        

      </div>

      {/* Featured Project Below */}

      <section class="featured">
        <div className="left">
          <div className="inner transition2">
            <p class="subtitle">Featured Project</p>
            <a href="https://covid-country-e9bff.web.app/" class="featured-title" target="_blank">International COVID-19 Tracker</a>
            <p className="featured-desc">Using the disease.sh API, Leaflet, and Material UI I created an interactive tool that tracks the number of cases, recoveries, and deaths by COVID-19 internationally.</p>
          </div>
        </div>

        <img class="right transition2" src={Covid} alt="Covid-19 Project"/>
        
      </section>


      {/* Below is where I will list my technical skills */}

      <section className="skills">
        <div className="skills-container">
          <ul>
            <li className="transition2">
              <div className="icon-container one">
                <img src={Reactsvg} alt="react svg" />
              </div>
               
            </li>


          </ul>

          </div>



      </section>


    </div>
  );
}
