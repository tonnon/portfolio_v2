import React from 'react';
import cvpdf from '../../assets/cv-tonon.pdf';
import { Link, animateScroll as scroll } from "react-scroll";
import './navbar.sass';

let items = [
    {
        link: 'Portfólio',
        href: 'portfolio'
    },
    {
        link: 'CV',
        href: `${cvpdf}`,
        blank: '_blank'
    },
    {
        link: 'Contato',
        href: "div-contact-form",
    }
];

function Navbar() {
    return (
        <div className="fixed" id="nav">
            <nav>
                <ul id="globalNav">
                {items.map((item, index) => (
                    <li key={index}>
                        <Link     
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to={item.href} target={item.blank}>{item.link}
                        </Link>
                    </li>
                ))}    
            </ul>
            </nav>
        </div>
    );
}

export default Navbar;