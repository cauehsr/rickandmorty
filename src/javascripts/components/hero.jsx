import React, { Component } from 'react';

import CharactersItems from './charactersItems';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    this.charactersApi();
  }

  charactersApi = () => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(res => {
        this.setState({
          characters: res.results
        });
      });
  };

  render() {
    const { characters } = this.state;

    return (
      <section id="hero" className={'hero'} ref="hero">
        <div className="hero-block">
          <ul className="characters">
            {characters.map(item => (
              <CharactersItems
                id={item.id}
                name={item.name}
                image={item.image}
                species={item.species}
                status={item.status}
                gender={item.gender}
              />
            ))}
          </ul>
        </div>
      </section>

    );
  }
}

export default Hero;
