import React from 'react';
import './footer.sass';

import { FaLinkedin, FaGithubSquare, FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

function Footer() {
    return (
        <div id="div-footer">

<div class="hello">
        <div class="footer">
            <a href="https://www.linkedin.com/in/lucas-tonon-2802b9146/"> 
                <FaLinkedin/>  
            </a>
            <a href="https://github.com/tonnon"> 
                <FaGithubSquare/>
            </a>
            <div class="icon-container">
                <MdEmail/>
                <p>lucastonnon@gmail.com</p>
            </div>
            <div class="icon-container">
                <FaMobileAlt/>
                <p>(13) 98192-4572</p>
            </div>
        </div>
        <p class="copyright">Copyright © 2020</p>
	</div>
        </div>
    );
}

export default Footer;