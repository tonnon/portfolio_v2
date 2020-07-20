import React, { useState, useEffect } from 'react';
import './portfolio.sass';
import ModalVideo from 'react-modal-video'

import { FaGamepad } from 'react-icons/fa'; 
import { MdSelectAll, MdWebAsset } from 'react-icons/md'; 

import looperman from '../../assets/bgcards/looperman.gif';
import disguised from '../../assets/bgcards/disguised.gif';
import spacerocker from '../../assets/bgcards/spacerocker.gif';
import fcknpidgey from '../../assets/bgcards/fcknpidgey.gif'; 
import alongnight from '../../assets/bgcards/alongnight.gif';
import haterspace from '../../assets/bgcards/haterspace.gif';
import orbital from '../../assets/bgcards/orbital.gif';
import cybertetromino from '../../assets/bgcards/cybertetromino.gif';

function Portfolio() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
      }, []);

      useEffect(() => {
        setProjects([]);
    
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
      }, [filter]);

    let portfolio = [
        {
            class: 'container game',
            title: 'The Amazing Looperman',
            img: looperman,
            video: 'https://youtu.be/lXqBIRL2va0',
            category: ['all', 'game'],
        },
        {
            class: 'container game',
            title: 'Disguised',
            img: disguised,
            video: 'https://youtu.be/HnpBGTijVUU',
            category: ['all', 'game'],
        },
        {
            class: 'container game',
            title: 'Space Rocker',
            img: spacerocker,
            video: 'https://youtu.be/TFeitCgsxiw',
            category: ['all', 'game'],
        },
        {
            class: 'container game',
            title: 'F*CKING PIDGEY!',
            img: fcknpidgey,
            video: 'https://youtu.be/x3My31HWnNI',
            category: ['all', 'game'],
        },
        {
            class: 'container game',
            title: 'A Long Night',
            img: alongnight,
            url: 'https://scratch.mit.edu/projects/239451175',
            category: ['all', 'game', 'website'],
        },
        {
            class: 'container game',
            title: 'Hater Space',
            img: haterspace,
            video: 'https://youtu.be/vAtk6DyodvI',
            category: ['all', 'game'],
        },
        {
            class: 'container game',
            title: 'Orbital',
            img: orbital,
            video: 'https://youtu.be/FnW-31K6hAE',
            category: ['all', 'game'],
        },
        {
            class: 'container game',
            title: 'Cyber Tetromino',
            img: cybertetromino,
            url: 'https://cyber-tetromino.herokuapp.com/',
            category: ['all', 'game', 'website'],
        },
    ];

    return (
        <div>
            <div id="buttons">
                <div className="wrapper">
                    <div className="w4-container">
                        <div className="content">
                            <div className="navigation-bar">
                                <div className="wrapper-fluid-fex">
                                    <div className="w4-container-laptop">
                                        <button  title="Todos" className="button" active={filter === 'all'} onClick={() => setFilter('all')}>
                                            <MdSelectAll/>
                                        </button>
                                    </div>
                                    <div className="w4-container-laptop">
                                        <button  title="Websites" className="button" active={filter === 'website'} onClick={() => setFilter('website')}>
                                            <MdWebAsset/>
                                        </button>
                                    </div>
                                    <div className="w4-container-laptop">
                                        <button  title="Jogos" className="button" active={filter === 'game'} onClick={() => setFilter('game')}>
                                            <FaGamepad/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="portfolio">
                {projects.map(project => project.filtered === true ? (
                <div key={project.title} className="wrap wrap--1">
                    <a className={project.class} target="_blank" href={project.video || project.url} style={{ backgroundImage:'url(' + `${project.img}` + ')'}}>
                        <p>{project.title}</p>
                    </a> 
                    </div>                
                ) : '' )}
                {projects.map((project, index) => (
                    <div key={index}>
                        <ModalVideo channel='youtube' isOpen={project.state} videoId={project.video} onClose={() => this.setState({isOpen: false})} />
                    </div>
                ))} 
            </div>
        </div>
    );
}

export default Portfolio;