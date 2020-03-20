import React, { Component } from 'react';

// svg
import palet from '../../images/palet.svg';
import arrowRight from '../../images/arrow-right.svg';

// helpers
import Parallax from 'javascripts/helpers/parallax';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Parallax>
        <section id="about" className="about">
          <div className="about__center">
            <div className="about__center-block">
              <div className="about__center-block--text">
                <h2 className="about__center-block--title parallax-item">Somos parte da sua equipe</h2>
                <p className="about__center-block--text parallax-item">Nos unimos a você para garantir a melhor <br />
                  experiencia do seu consumidor com sua <br />
                  marca, produto e serviço digital.</p>
                <div className="about__center-block-image-button parallax-item hide-mobile">
                  <a className="component--button" href="/sobre">saiba mais sobre nós
                <img
                      src={arrowRight}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="about__center-block-image parallax-item">
                <img
                  src={palet}
                  alt=""
                />
              </div>
              <div className="about__center-block-image-button parallax-item show-mobile">
                <a className="component--button" href="/sobre">saiba mais sobre nós
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

export default About;
