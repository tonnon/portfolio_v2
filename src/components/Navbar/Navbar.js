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
    return (
        <div className="fixed" id="nav">
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