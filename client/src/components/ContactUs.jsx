import React, { useState } from "react";
import "./ContactUs.scss";
import { db } from "./firebase"
import Boxy from '../images/contact-image.svg';


const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)

    db.collection('contacts').add({
      name: name,
      email: email,
      message:message,
    })
      .then(() => {
        alert('I look forward to hearing from you 👍 ')
        setLoader(false);
      })
      .catch(error => {
        alert(error.message);
        setLoader(false);
      })
    
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="card-form">


<div className="app">
  
        
<svg xmlns="http://www.w3.org/2000/svg" className="contact-image" width="493" height="575" viewBox="0 0 493 575">
  <g id="contact-image" transform="translate(-11 -5723)">
    <g id="Rectangle_30" data-name="Rectangle 30" transform="translate(11 5723)" fill="#fff" stroke="#707070" stroke-width="1">
      <rect width="210" height="210" rx="37" stroke="none"/>
      <rect x="0.5" y="0.5" width="209" height="209" rx="36.5" fill="none"/>
    </g>
    <g id="Rectangle_31" data-name="Rectangle 31" transform="translate(127 5790)" stroke="#707070" stroke-width="1" opacity="0.283">
      <rect width="210" height="210" rx="37" stroke="none"/>
      <rect x="0.5" y="0.5" width="209" height="209" rx="36.5" fill="none"/>
    </g>
    <g id="Rectangle_32" data-name="Rectangle 32" transform="translate(84 5974)" fill="#45f8ff" stroke="#707070" stroke-width="1" opacity="0.827">
      <rect width="210" height="210" rx="37" stroke="none"/>
      <rect x="0.5" y="0.5" width="209" height="209" rx="36.5" fill="none"/>
    </g>
    <g id="Rectangle_33" data-name="Rectangle 33" transform="translate(294 6088)" fill="#f845ff" stroke="#707070" stroke-width="1" opacity="0.656">
      <rect width="210" height="210" rx="37" stroke="none"/>
      <rect x="0.5" y="0.5" width="209" height="209" rx="36.5" fill="none"/>
    </g>
    <g id="Rectangle_34" data-name="Rectangle 34" transform="translate(214 5941)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.594">
      <rect width="210" height="210" rx="37" stroke="none"/>
      <rect x="0.5" y="0.5" width="209" height="209" rx="36.5" fill="none"/>
    </g>
  </g>
</svg>
        
        
        
        
  <div className="screen  sushi ">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Me</h1>
            <ul>
              <li><span>Email:</span>colinmalcolm8@gmail.com</li>
              <li><span>Phone:</span>919-429-2216</li>
            </ul>
            
            {/* form stuff */}
            <label>Name</label>
            <input placeholder="Name" value={name}
              onChange={(e) => setName(e.target.value)}/>
            
            <label>Email</label>
            <input placeholder="Email" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            
            <label>Message</label>
            <textarea placeholder="Message" value={message}
              onChange={(e) => setMessage(e.target.value)}/>
            
            <button type="submit" style={{backgroud : loader ? "#ccc" : "#7314ff"}}>
              
              
              Submit</button>


    </form>     
</div>

  
  
  
  
  
  
  
  
  
  
  
</div>

      
    </div>
  )
}

export default ContactUs
















