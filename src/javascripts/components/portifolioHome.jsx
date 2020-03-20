import React, { Component } from 'react';

// svg
import arrowRight from '../../images/arrow-right.svg';
import banner from '../../images/banner.svg';

// helpers
import Parallax from 'javascripts/helpers/parallax';

class PortifolioHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Parallax>
        <section id="portifolioHome">
          <div className="portifolio-contact show-mobile limit-grid">
            <div className="portifolio-contact-block">
              <span className="portifolio-contact-title">Qual a sua ideia?</span>
              <span className="portifolio-contact-text">Uma marca, um aplicativo, um site?</span>
              <span className="portifolio-contact-text">Se é digital nós podemos ajudar :)</span>
              <div className="portifolio-contact-button">
                <a className="component--button" href="/contato">contate-nos
                <img
                    src={arrowRight}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="portifolio-projects limit-grid">
            <div className="portifolio-projects--text parallax-item">
              <h2 className="component--title">Nossos <span className="component--italic">projetos</span></h2>
            </div>
            <div className="portifolio-projects-banners">
              <ul className="portifolio-projects-banners-items">
                <li className="portifolio-projects-banners-items-item parallax-item">
                  <img
                    src={banner}
                    alt=""
                  />
                </li>
                <li className="portifolio-projects-banners-items-item parallax-item portifolio-projects-banners-items-item-top">
                  <img
                    src={banner}
                    alt=""
                  />
                </li>
                <li className="portifolio-projects-banners-items-item parallax-item">
                  <img
                    src={banner}
                    alt=""
                  />
                </li>
                <li className="portifolio-projects-banners-items-item parallax-item portifolio-projects-banners-items-item-top">
                  <img
                    src={banner}
                    alt=""
                  />
                </li>
                <li className="portifolio-projects-banners-items-item parallax-item hide-mobile">
                  <img
                    src={banner}
                    alt=""
                  />
                </li>
                <li className="portifolio-projects-banners-items-item parallax-item portifolio-projects-banners-items-item-top hide-mobile">
                  <img
                    src={banner}
                    alt=""
                  />
                </li>

              </ul>
              <div className="portifolio-projects-button">
                <a className="component--button" href="/contato">veja todos os clientes
                <img
                    src={arrowRight}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    );
  }
}

export default PortifolioHome;