// import React from "react";
import './About.css'

const About = () => {
  return (
    <div id='about'>
      <h1>About us</h1>
       <div id='div_wwa'>
       <div id='Who_We_Are'>
       
        <h2>Who We Are</h2>
          <p className='p1'>
            We are an Small Medium Enterprise (SME) consulting house and insights-led through strategic research.
            We follow a risk-based approach which is key as adequate management of risk enforces sustainability within SMEs.
             <br/>
             <br/>
            Our services:
            Design, facilitate and monitoring of SME business process and risk management development programs
            Strategic consulting and coaching
            SME training on key business concepts
            Digital marketing services and analytics through our supporting agency Thee Anchor

          </p>

          
       </div>

       <div id='Our_Vision'>
        <h2>Our Vision</h2>
        <p className='p1'>
        We aim to witness enduring businesses supported by efficient processes, innovative Information Technology solutions, and timeless brands.
        We motivate organisations to integrate strong processes, backed by resilient Information Technology solutions and infused with creativity to build brands that guarantee top-of-mind awareness


        </p>

       </div>
       
       <div id='Our_Team'>
        <h2>Our Team</h2>
          <div id='divSlide'>
               <div className="members">
                  <p className="pNames">Lesego Khoele (CIA),Mphil</p>
                  <p className="pRole">Md and Founder<br/> SMME Business Developer</p>
               </div>

               <div className="members">
                <p className="pNames">Karabo Kgomanyane</p>
                <p className="pRole">Data-Led Marketing Specialist <br/>Thee Anchor MD & Founder</p>
               </div>

               <div className="members">
                <p className="pNames">Mphoma Putsoane </p>
                <p className="pRole">Business Accounting<br/>Development Specialist</p>
               </div>

               <div className="members">
                <p className="pNames">Boipelo Maringa </p>
                <p className="pRole">Business and Personal <br/>Finance Specialist</p>
               </div>
          </div>
       </div>
     </div>
    </div>
  );
};

export default About;

