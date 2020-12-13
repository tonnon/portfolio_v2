import React, { useState, useEffect } from 'react';
import './portfolio.sass';
import FadeIn from 'react-fade-in';

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
import bethehero from '../../assets/bgcards/bethehero.png';
import helptoner from '../../assets/bgcards/helptoner.gif';

function Portfolio() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    function shuffle(arra1) {
        var ctr = arra1.length,
          temp,
          index;
        while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
        }
        return arra1;
      }
      
      useEffect(() => {
        setProjects(shuffle(portfolio));
        setLoading(false);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
      }, [filter], [loading]);

    let portfolio = [
        {
            title: 'The Amazing Looperman',
            img: looperman,
            video: 'https://youtu.be/lXqBIRL2va0',
            category: ['all', 'game']
        },
        {
            title: 'Disguised',
            img: disguised,
            video: 'https://youtu.be/HnpBGTijVUU',
            category: ['all', 'game']
        },
        {
            title: 'Space Rocker',
            img: spacerocker,
            video: 'https://youtu.be/TFeitCgsxiw',
            category: ['all', 'game']
        },
        {
            title: 'F*CKING PIDGEY!',
            img: fcknpidgey,
            video: 'https://youtu.be/x3My31HWnNI',
            category: ['all', 'game']
        },
        {
            title: 'A Long Night',
            img: alongnight,
            url: 'https://scratch.mit.edu/projects/239451175',
            category: ['all', 'game', 'website']
        },
        {
            title: 'Hater Space',
            img: haterspace,
            video: 'https://youtu.be/vAtk6DyodvI',
            category: ['all', 'game']
        },
        {
            title: 'Orbital',
            img: orbital,
            video: 'https://youtu.be/FnW-31K6hAE',
            category: ['all', 'game']
        },
        {
            title: 'Cyber Tetromino',
            img: cybertetromino,
            url: 'https://cyber-tetromino.herokuapp.com/',
            category: ['all', 'game', 'website']
        },
        {
            title: 'Be The Hero',
            img: bethehero,
            url: 'https://bahero.herokuapp.com/',
            category: ['all', 'website']
        },
        {
            title: 'Helptoner',
            img: helptoner,
            url: 'https://helptoner.herokuapp.com/',
            category: ['all', 'website']
        },
    ];

    let randomProjects = portfolio[Math.floor(Math.random() * portfolio.length)];
    console.log(randomProjects);
    

    return (
        <div>
            <div id="buttons">
                <div>
                    <div className="w4-container">
                        <div className="content">
                            <div className="navigation-bar">
                                <div className="wrapper-fluid-fex">
                                    <div className="w4-container-laptop">
                                        <button  title="Todos" className="button"  onClick={() => setFilter('all')}>
                                            <MdSelectAll/>
                                        </button>
                                    </div>
                                    <div className="w4-container-laptop">
                                        <button  title="Websites" className="button"  onClick={() => setFilter('website')}>
                                            <MdWebAsset/>
                                        </button>
                                    </div>
                                    <div className="w4-container-laptop">
                                        <button  title="Jogos" className="button" onClick={() => setFilter('game')}>
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
            {
                            loading && 
                                <div className="card-wrap">
                                    <div className="card">
                                        <div className="card-bg"/>
                                            <div class="home">
                                                <div id='container'>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                    <div class='dot'></div>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                        }
                {projects.map(project => project.filtered === true ? (
                    <FadeIn key={project.title}>
                        <a target="_blank" href={project.video || project.url}>
                            <div  className="card-wrap">
                                <div className="card">
                                    <div className="card-bg" style={{ backgroundImage:'url(' + `${project.img}` + ')'}}/>
                                    <div className="card-info">
                                        <h1>{project.title}</h1>
                                    </div>
                                </div> 
                            </div> 
                        </a>  
                    </FadeIn>            
                ) : '' )}
            </div>
        </div>
    );
}

export default Portfolio;