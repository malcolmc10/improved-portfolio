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
    <div>


<div className="app">
  
        
        
        
        
        
        
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
















