import React from "react";
import "./Intro.scss";
import Covid from "../images/Covid.png"
import Reactsvg from "../images/react.svg"
import Javascript from "../images/js.svg"
import Styling from "../images/css.svg"
import Node from "../images/nodejs.svg"
import MongoDB from "../images/mongodb.svg"
import Express from "../images/express.svg"
import RecipeBox from "../images/receipebox.png"
import Spotify from "../images/Spotify.png"
import Climapp from "../images/climapp.png"
import Schmedium from "../images/Schmedium.png"
import Github from '../images/github.svg'
import View from '../images/view.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




export default function Intro() {

  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline();


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
    <ellipse className="circle" id="Ellipse_1" data-name="Ellipse 1" cx="12.5" cy="13.5" rx="12.5" ry="13.5" transform="translate(257 725)" fill="#fff"/>
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

        <img class="right featured-img transition2" src={Covid} alt="Covid-19 Project"/>
        
      </section>


      {/* Below is where I will list my technical skills */}

      <section className="skills">
        
          <span>My Skills</span>
            

        <div className="skills-container">
          <ul>
            <li className="transition2">
              <div className="icon-container one">
                <img src={Reactsvg} alt="react svg" />
              </div>
               
            </li>

            <li className="transition2">
              <div className="icon-container two">
                <img src={Javascript} alt="javascript svg" />
              </div>
               
            </li>

            <li className="transition2">
              <div className="icon-container three">
                <img src={Styling} alt="css svg" />
              </div>
               
            </li>

            <li className="transition2">
              <div className="icon-container four">
                <img src={Node} alt="node svg" />
              </div>
               
            </li>

            <li className="transition2">
              <div className="icon-container five">
                <img src={MongoDB} alt="MongoDB svg" />
                <p>&</p>
                <img src={Express} alt="express svg" />
              </div>
            </li>
          </ul>
          </div>
      </section>

      <section className="portfolio" id="mywork">

        <div className="portfolio-container transition3">
          <div className="portfolio-left">
            <div className="inner">
              <p className="subtitle">Recipe App</p>
              <a  href="https://github.com/malcolmc10/P3-recipebox/blob/dev/p3-worksheet.md" target="_blank"><p className="featured-title">RecipeBox</p></a>
              <p className="featured-desc">Using full CRUD, the application allows the user to select dishes based on a filtering system that includes toggles and a search bar. Built with the MERN stack and Tailwind CSS.</p>
            </div>

          </div>
          <a class="right" href="http://foodiesandgoodiesrecipebox.surge.sh/" target="_blank"><img src={RecipeBox } alt=""/></a>

        </div>
        

        <div className="portfolio-container transition3">
          <div className="portfolio-left">
            <div className="inner">
              <p className="subtitle">UX/UI Clone</p>
              <a  href="https://github.com/malcolmc10/SpotifyMe" target="_blank"><p className="featured-title">Spotify UI Clone</p></a>
              <p className="featured-desc">Using React, React Router, Javascript, and Sass I recreated the Sportfiy UI including playlist page, listed playlists, CSS effects, Objects, and API calls. </p>
            </div>

          </div>
          <a class="right" href="http://spotifyme.surge.sh/" target="_blank"><img src={Spotify } alt=""/></a>

        </div>
        

        <div className="portfolio-container transition3">
          <div className="portfolio-left">
            <div className="inner">
              <p className="subtitle">Weather App</p>
              <a  href="https://github.com/malcolmc10/ClimApp" target="_blank"><p className="featured-title">ClimApp</p></a>
              <p className="featured-desc">Using OpenWeatherMap API, React, Bootstrap, and JavaScript I created a weather app that shows the weather conditions in over 200,000 cities across the world. </p>
            </div>

          </div>
          <a class="right" href="http://climappweather.surge.sh/" target="_blank"><img src={Climapp } alt=""/></a>

        </div>
        

        <div className="portfolio-container transition3">
          <div className="portfolio-left">
            <div className="inner">
              <p className="subtitle">Review App</p>
              <a  href="https://github.com/malcolmc10/Schmedium" target="_blank"><p className="featured-title">Schmedium</p></a>
              <p className="featured-desc">Using full CRUD, Rest API and authentication, the user can leave a quick review on their favorite Harry Potter film. Built wit MERN stack and Tailwind CSS.</p>
              
            </div>

          </div>
          <a class="right" href="http://schmediumpotter.surge.sh/" target="_blank"><img src={Schmedium} alt=""/></a>

            </div>

      </section>


    </div>
  );
}
