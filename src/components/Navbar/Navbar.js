import React from 'react';
import cvpdf from '../../assets/cv-tonon.pdf';
import './navbar.sass';

let items = [
    {
        link: 'Portfólio',
        href: '#portfolio'
    },
    {
        link: 'CV',
        href: `${cvpdf}`,
        blank: '_blank'
    },
    {
        link: 'Contato',
        href: "#contact",
    }
];



function Navbar() {
    
window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").classList.add('fixed');
        document.getElementById("nav").classList.remove('navigation');
      } else {
        document.getElementById("nav").classList.remove('fixed');
        document.getElementById("nav").classList.add('navigation');
      }
}
    return (
        <div class="navigation" id="nav">
            <nav>
                <ul id="globalNav">
                {items.map((item, index) => (
                    <li key={index}><a href={item.href} target={item.blank}>{item.link}</a></li>
                ))}    
            </ul>
            </nav>
        </div>
    );
}

export default Navbar;