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
        <div className={'header-wrapper'}>
          <h1 className="header-logo">
            <a href="/" className="header-logo__btn"
              style={{
                position: 'relative',
                textIndent: '-999em',
                overflow: 'hidden',
                width: '170px',
                height: '53px',
                left: '-11px',
                display: 'flex',
                transition: 'inherit'
              }}>
              Two Gether
            </a>
          </h1>

        </div>
      </header>
    );
  }
}

export default Header;