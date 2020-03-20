import React, { Component } from 'react';
import Slider from 'react-slick';

// svg
import arrowRight from '../../images/arrow-right.svg';

// helpers
import Parallax from 'javascripts/helpers/parallax';

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <Parallax>
        <section id="comments" className="comments limit-grid">
          <div className="comments__center">
            <ul className="comments__center-items">
              <Slider {...settings}>
                <li className="comments__center-items-item">
                  <div className="comments__center-items-item-block">
                    <p className="comments__center-items-item-block--text">Trabalhar em conjunto
                      com a TwoGether foi
                      uma experiência incrível,
                      a comunicação deles
                      com nossa equipe é algo
                      sensacional que não
                      deixa nada a desejar.
                  </p>
                    <h3 className="comments__center-items-item-block--name">Roberto Neves Fonsceca</h3>
                    <h4 className="comments__center-items-item-block--profs">Co-Founder Nestlé</h4>
                    <div className="comments__center-items-item-block-button">
                      <a className="component--button" href="/projeto">veja o projeto
                      <img
                          src={arrowRight}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="comments__center-items-item">
                  <div className="comments__center-items-item-block">
                    <p className="comments__center-items-item-block--text">Trabalhar em conjunto
                      com a TwoGether foi
                      uma experiência incrível,
                      a comunicação deles
                      com nossa equipe é algo
                      sensacional que não
                      deixa nada a desejar.
                  </p>
                    <h3 className="comments__center-items-item-block--name">Roberto Neves Fonsceca</h3>
                    <h4 className="comments__center-items-item-block--profs">Co-Founder Nestlé</h4>
                    <div className="comments__center-items-item-block-button">
                      <a className="component--button" href="/projeto">veja o projeto
                      <img
                          src={arrowRight}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </li>
              </Slider>
            </ul>
          </div>
        </section>
      </Parallax>
    );
  }
}

export default Comments;
