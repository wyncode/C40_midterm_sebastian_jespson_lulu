import React from 'react';
import './Team.css';
// import Jespson from '../../Resources/Jespson.jpg';
// import lulu from '../../Resources/lulu.jpg';
// import Sebastian from '../../Resources/Sebastian.jpg';

export default function Team() {
  return (
    <div className="team">
      <h1>Meet The Team</h1>
      {/* <img src={Jespson} alt='Jespson'></img> */}
      <p>
        Jespson Saint-Pierre: Is an advanced IT and coding Full Stack student at
        Wyncode Academy. He earned an Inbound Marketing Certification from
        Hubspot, a certificate in Market Research and Consumer Behavior from IE
        Business School, and participated in the University of Michigan’s Python
        for Data Science and AI program. Jespson is a cybersecurity and AI
        enthusiast, he is earning an associate in Computer Networking from
        Miami-Dade College.
      </p>
      {/* <img src={lulu} alt="Lulu"></img> */}
      <p>
        Lulu Mayorga: Founder and CVO for Estrategy.tech, recipient of the
        Knight Foundation Women in Tech Scholarship Award, former Technology
        Systems advisor for the U.S. Department of State, and an MTV Networks
        Alumna. Lulu is a pediatric first responder and founder of an
        environmental and education non-profit, IslandCorps.org serving K-12
        children affected by the Hurricane and earthquake in Puerto Rico. Lulu
        has a BA in Diplomacy and Global Communications Tech from Georgetown
        University. She is a Full-Stack web development student at Wyncode
        Academy.
      </p>
      {/* <img src={Sebastian} alt="Sebastian"></img> */}
      <p>
        Sebastian Arnavat: Front-End Web Developer with a Certificate in Full
        Stack Web Development from the University of Miami and additional
        Certificates in HTML 5 and CSS Fundamentals. Sebastian has a BA in
        Business from Florida International University. He is a Full Stack web
        development student at Wyncode Academy.
      </p>
    </div>
  );
}
