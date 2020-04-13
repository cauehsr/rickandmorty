import React, { Component } from 'react';

import CharactersItems from './charactersItems';
import Loading from './loading';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      loading: true
    };
  }

  componentDidMount() {
    this.charactersApi();

    setTimeout(() => {
      this.setState({ loading: false })

    }, 2000);
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
    const { characters, loading } = this.state;

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
        <Loading result={require('../lottie/loading.json')} activeStart={loading} />
      </section>

    );
  }
}

export default Hero;
