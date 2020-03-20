import React from 'react';
import { connect } from 'react-redux';

function About(props) {
  return (
    <section id="about" className="about limit-grid">
    </section>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(About);
