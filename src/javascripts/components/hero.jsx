import React, { Component } from 'react';

// helpers
import ScrollTo from 'javascripts/helpers/scrollto';

// svg
import arrow from '../../images/arrow.svg';
import arrowRight from '../../images/arrow-right.svg';

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  goTo = event => {
    event.preventDefault();
    const hash = event.currentTarget.getAttribute('href');
    const target = document.querySelector(hash);

    if (target) {
      ScrollTo(target, 70);
    }
  };

  render() {

    return (
      <section id="hero" className={'hero'} ref="hero">
        <div className="hero-block">
          <div className="hero-limit limit-grid">
            <h2 className="component--title">Somos uma
              agência <br /> digital
              <span className="component--italic"> moldável ao <br /> seu
              negócio</span>
            </h2>
            <p className="component--text">
              Somos uma agência digital pronta para <br />
              encontrar soluções de design para <br />
              produtos digitais e marcas
            </p>
          </div>

          <div className="hero-content">
            <div className="hero-arrow limit-grid">
              <a href="#portifolioHome" className="hero-arrow-button" onClick={this.goTo}>
                <img
                  src={arrow}
                  alt=""
                />
                <h3 className="hero-arrow__title">scroll down</h3>
              </a>
            </div>


            <div className="portifolio-contact hide-mobile">
              <div className="portifolio-contact-block">
                <div className="portifolio-contact-block--text">
                  <span className="portifolio-contact-title">Qual a sua ideia?</span>
                  <span className="portifolio-contact-text">Uma marca, um aplicativo, um site?</span>
                  <span className="portifolio-contact-text">Se é digital nós podemos ajudar :)</span>
                </div>
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

          </div>
        </div>
      </section>

    );
  }
}

export default Hero;
