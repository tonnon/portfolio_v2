import React from 'react';
import cvpdf from '../../assets/cv-tonon.pdf';
import './navbar.sass';

const user = 'tonnon';
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
    return (
        <nav className="toggleWrapper" id="navbar">
            <section id="userTab" className="toggleSwitch">
                <div className="wrapper logo">
                    <div className="icon icon10 logo">
                        <div className="orbit orbit1 logo"></div>
                        <div className="orbit orbit2 logo"></div>
                        <div className="planet logo"></div>
                    </div>
                </div>
                <span>{user}</span>   
            </section> 
            <ul id="globalNav">
                {items.map((item, index) => (
                    <li key={index}><a href={item.href} target={item.blank}>{item.link}</a></li>
                ))}    
            </ul>
        </nav>
    );
}

export default Navbar;