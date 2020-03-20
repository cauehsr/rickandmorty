import React from 'react';
import { connect } from 'react-redux';

function Contact(props) {
  return (
    <section id="contact" className="contact limit-grid">
      <div className="contact__center">
        <div className="contact__center-text">
          <div className="contact__center-text--info">
            <h2 className="component--title">Olá, <span className="component--italic"> vamos conversar?</span></h2>
            <p className="component--text hide-mobile">
              Preencha o formulário abaixo ou, se preferir, <br />
              nossos dados para contato estão logo ao lado.
            </p>
            <p className="component--text show-mobile">
              Preencha o formulário ou, se preferir, nossos <br />
              dados para contato estão logo abaixo.
            </p>
          </div>
          <div className="contact__center-text--mail">
            <ul className="contact__center-text--mail-items">
              <li className="contact__center-text--mail-items-item">
                <span className="contact--title">Email</span>
                <a className="contact--link" href="mailto:someone@example.com" target="_top"> contato@twogether.com</a>
              </li>
              <li className="contact__center-text--mail-items-item">
                <span className="contact--title">Telefone</span>
                <a className="contact--link" href="https://api.whatsapp.com/send?phone=5511987919911" target="_blank"> ( 11 ) 98791 - 9911</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <form id="form" className="contact__center-form">
        <div className="contact-display">

          <label className="contact-group">
            <input type="text" placeholder="Seu nome" className="contact-control" id="name" required />
          </label>

          <label className="contact-group">
            <input
              type="email"
              placeholder="Seu E-mail"
              className="contact-control"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </label>

          <label className="contact-group">
            <input type="text" placeholder="Seu telefone" className="contact-control" id="telephone" />
          </label>

          <label className="contact-group">
            <input type="text" placeholder="Escreva aqui sua mensagem" className="contact-control" id="message" />
          </label>

        </div>
        <button type="submit" className="btn btn-submit">
          enviar
        </button>
      </form>

    </section>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Contact);
