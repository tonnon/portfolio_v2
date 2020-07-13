import React from 'react';
import './card.sass';
import ModalVideo from 'react-modal-video'

import looperman from '../../assets/bgcards/looperman.gif';
import disguised from '../../assets/bgcards/disguised.gif';
import spacerocker from '../../assets/bgcards/spacerocker.gif';
import fcknpidgey from '../../assets/bgcards/fcknpidgey.gif'; 
import alongnight from '../../assets/bgcards/alongnight.gif';
import haterspace from '../../assets/bgcards/haterspace.gif';
import orbital from '../../assets/bgcards/orbital.gif';
import cybertetromino from '../../assets/bgcards/cybertetromino.gif';

function Card() {

    let projects = [
        {
            class: 'container container--1 all game',
            title: 'The Amazing Looperman',
            img: looperman,
            video: 'https://youtu.be/lXqBIRL2va0',
        },
        {
            class: 'container container--1 all game',
            title: 'Disguised',
            img: disguised,
            video: 'https://youtu.be/HnpBGTijVUU',
        },
        {
            class: 'container container--1 all game',
            title: 'Space Rocker',
            img: spacerocker,
            video: 'https://youtu.be/TFeitCgsxiw',
        },
        {
            class: 'container container--1 all game',
            title: 'F*CKING PIDGEY!',
            img: fcknpidgey,
            video: 'https://youtu.be/x3My31HWnNI',
        },
        {
            class: 'container container--1 all game',
            title: 'A Long Night',
            img: alongnight,
            video: 'https://youtu.be/Svv_S9ObfNM',
        },
        {
            class: 'container container--1 all game',
            title: 'Hater Space',
            img: haterspace,
            video: 'https://youtu.be/vAtk6DyodvI',
        },
        {
            class: 'container container--1 all game',
            title: 'Orbital',
            img: orbital,
            video: 'https://youtu.be/FnW-31K6hAE',
        },
        {
            class: 'container container--1 all game website',
            title: 'Cyber Tetromino',
            img: cybertetromino,
            url: 'https://cyber-tetromino.herokuapp.com/',
        },
    ];

    return (
        <div id="portfolio">
            {projects.map((project, index) => (
            <div key={index} className="wrap wrap--1">
                <a className={project.class} target="_blank" href={project.video || project.url} style={{ backgroundImage:'url(' + `${project.img}` + ')'}}>
                    <p>{project.title}</p>
                </a> 
                </div>                
            ))}
            {projects.map((project, index) => (
                <div key={index}>
                    <ModalVideo channel='youtube' isOpen={project.state} videoId={project.video} onClose={() => this.setState({isOpen: false})} />
                </div>
            ))} 
        </div>
    );
}

export default Card;