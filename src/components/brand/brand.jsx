import React from 'react';
import './brand.css';
import { BiPaperPlane } from "react-icons/bi";
const Brand = () => {
  return (
    <div className='app__brand section__padding' id='brand'>
      <div>
        <h1>Read More </h1>
      </div>
      <div>

        <a href="https://portswigger.net/daily-swig/osint-what-is-open-source-intelligence-and-how-is-it-used"> <p>OSiNT<BiPaperPlane /></p> </a>
      </div>
      <div>
      <a href="https://www.cloudflare.com/learning/security/glossary/what-is-penetration-testing"> <p>Pentesting<BiPaperPlane /></p> </a>
      </div>
      <div>
      <a href="https://owasp.org/www-community/Improper_Error_Handling"> <p>Error-Findings<BiPaperPlane /></p> </a>
      </div>
      <div>
      <a href="https://owasp.org/www-pdf-archive/Ralph_Durkee_Pen_Test_v24L_handout.pdf"> <p>Ethical Hacking<BiPaperPlane /></p> </a>
      </div>
      
    </div>
  )
}

export default Brand;