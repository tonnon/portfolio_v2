import React from 'react';
import './buttons.sass';

/* let items = [
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
 */

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

    return (
        <div id="buttons">
          <div className="wrapper">
            <div className="w4-container">
              <div className="content">
                <div className="navigation-bar">
                  <div className="wrapper-fluid-fex">
                    <div className="w4-container-laptop">
                      <a href="https://youtube.com/" target="_blank" title="Youtube.com">
                        <i className="button fa fa-phone" id="fa-laptop"></i>
                      </a>
                    </div>
                    <div className="w4-container-laptop">
                      <a href="https://youtube.com/" target="_blank" title="Youtube.com">
                        <i className="button fa fa-laptop" id="fa-laptop"></i>
                      </a>
                    </div>
                    <div className="w4-container-laptop">
                      <a href="https://youtube.com/" target="_blank" title="Youtube.com">
                        <i className="button fa fa-laptop" id="fa-laptop"></i>
                      </a>
                    </div>
                    <div className="w4-container-laptop">
                      <a href="https://youtube.com/" target="_blank" title="Youtube.com">
                        <i className="button fa fa-laptop" id="fa-laptop"></i>
                      </a>
                    </div>
                    <div className="w4-container-laptop">
                      <a href="https://youtube.com/" target="_blank" title="Youtube.com">
                        <i className="button fa fa-laptop" id="fa-laptop"></i>
                      </a>
                    </div>
                    <div className="w4-container-laptop">
                      <a href="https://youtube.com/" target="_blank" title="Youtube.com">
                        <i className="button fa fa-laptop" id="fa-laptop"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
    
}

export default Buttons;