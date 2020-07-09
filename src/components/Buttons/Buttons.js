import React from 'react';
import { FaGamepad } from 'react-icons/fa'; 
import { MdSelectAll, MdWebAsset } from 'react-icons/md'; 
import './buttons.sass';



function Buttons() {

  function buttonHover(){
    let getButtons = () => document.querySelectorAll('.w4-container-laptop');
    getButtons().forEach(function (item){
      item.addEventListener('mouseover', () => {
        item.classList.add('margin')
      });
      item.addEventListener('mouseleave', () => {
        item.classList.remove('margin')
      });
    })
  }

  window.onload = () => {
    buttonHover();
  }

 let buttons = [
    {
        title: 'Todos',
        icon: <MdSelectAll/>
    },
    {
        title: 'Websites',
        icon: <MdWebAsset/>
    },
    {
        title: 'Jogos',
        icon: <FaGamepad/>
    }
];
 
    return (
        <div id="buttons">
          <div className="wrapper">
            <div className="w4-container">
              <div className="content">
                <div className="navigation-bar">
                  <div className="wrapper-fluid-fex">
                    {buttons.map((button, index) => (
                      <div key={index} className="w4-container-laptop">
                        <button  title={button.title} className="button">
                          {button.icon} 
                        </button>
                      </div>
                    ))}  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
    
}

export default Buttons;