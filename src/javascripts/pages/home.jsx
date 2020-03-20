import React from 'react';
import { connect } from 'react-redux';
import Hero from 'javascripts/components/hero';
import PortifolioHome from 'javascripts/components/portifolioHome';
import About from 'javascripts/components/about';
import Comments from 'javascripts/components/comments';

function Home(props) {
  return (
    <div className="page">
      <Hero />
      <PortifolioHome />
      <About />
      <Comments />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);