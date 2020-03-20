import React, { Component } from 'react';

// svg
import arrowRight from '../../images/arrow-right.svg';
import logo from '../../images/logo.png';

// helpers
import Parallax from 'javascripts/helpers/parallax';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {

    };
  }

  render() {

    return (
      <Parallax>
        <footer id="footer" className={'footer'}>
          <div className="footer__center">
            <div className="footer__center-block limit-grid">
              <div className="footer__center-block--text">
                <h3 className="component--title parallax-item">Algum projeto <br /> em mente?</h3>
                <p className="component--text parallax-item">Uma marca, um aplicativo, um site? Se é digital <br /> nós podemos ajudar :)</p>
                <div className="footer-button parallax-item">
                  <a className="component--button" href="/contato">fale conosco
                <img
                      className="button-next-image"
                      src={arrowRight}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="footer__center-block-info">
                <ul className="footer__center-block-info-items">
                  <li className="footer__center-block-info-items-item">
                    <ul className="footer__center-block-info-items-item-content">
                      <span className="footer-info--title">LOREM IPSUM</span>
                      <a className="footer-info--text" href="/sobre">Sobre</a>
                      <a className="footer-info--text" href="/portifolio">Portifolio</a>
                      <a className="footer-info--text" href="/contato">Contato</a>
                      <a className="footer-info--text" href="/experiencias">Experiencias</a>
                    </ul>
                  </li>
                  <li className="footer__center-block-info-items-item">
                    <ul className="footer__center-block-info-items-item-content">
                      <span className="footer-info--title">STALKEIE</span>
                      <a className="footer-info--text" href="/dribble">Dribble</a>
                      <a className="footer-info--text" href="/instagram">Instagram</a>
                      <a className="footer-info--text" href="/twitter">Twitter</a>
                    </ul>
                  </li>
                  <li className="footer__center-block-info-items-item">
                    <ul className="footer__center-block-info-items-item-content">
                      <span className="footer-info--title">NAVEGUE AQUI</span>
                      <a className="footer-info--text" href="/sobre">Sobre</a>
                      <a className="footer-info--text" href="/portifolio">Portifolio</a>
                      <a className="footer-info--text" href="/contato">Contato</a>
                      <a className="footer-info--text" href="/experiencias">Experiencias</a>
                    </ul>
                  </li>
                  <li className="footer__center-block-info-items-item">
                    <ul className="footer__center-block-info-items-item-content">
                      <span className="footer-info--title">APENAS TESTE</span>
                      <a className="footer-info--text" href="/dribble">Dribble</a>
                      <a className="footer-info--text" href="/instagram">Instagram</a>
                      <a className="footer-info--text" href="/twitter">Twitter</a>
                    </ul>
                  </li>
                </ul>
                <div className="footer__center-block-info-copyright">
                  <div className="footer__center-block-info-copyright-image">
                    <img
                      className="footer__center-block-info-copyright-image-logo"
                      src={logo}
                      alt=""
                    />
                  </div>
                  <div className="footer__center-block-info-copyright--text">
                    <span className="footer-copyright--text">TwoGether 2020 - Todos os direitos reservados.</span>
                    <span className="footer-copyright--text">www.twogether..com.br</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Parallax>
    );
  }
}

export default Footer;