import React from 'react';
import './footer.sass';

import { FaLinkedin, FaGithubSquare, FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

function Footer() {
    return (
        <div id="div-footer">
            <div className="hello">
                <div className="footer">
                    <a href="https://www.linkedin.com/in/lucas-tonon-2802b9146/"> 
                        <FaLinkedin/>  
                    </a>
                    <a href="https://github.com/tonnon"> 
                        <FaGithubSquare/>
                    </a>
                    <div className="icon-container">
                        <MdEmail/>
                        <p>lucastonnon@gmail.com</p>
                    </div>
                    <div className="icon-container">
                        <FaMobileAlt/>
                        <p>(13) 98192-4572</p>
                    </div>
                </div>
                <p className="copyright">Copyright © 2020</p>
            </div>
        </div>
    );
}

export default Footer;