import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {

    };
  }

  render() {

    return (
      <header className={'header'}>
        <div className={'header-wrapper limit-grid'}>
          <h1 className="header-logo">
            <a href="/" className="header-logo__btn"
              style={{
                position: "relative",
                textIndent: "-999em",
                overflow: "hidden",
                width: "170px",
                height: "53px",
                left: "-11px",
                display: "flex",
                transition: "inherit"
              }}>
              Two Gether
            </a>
          </h1>

          <div className="header-menu limit-grid">
            <div className="header-menu-block">
              <div className="header-menu-block__container">
                <div className="header-menu-block__container--button">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>
    );
  }
}

export default Header;