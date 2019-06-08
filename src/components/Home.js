import React from 'react';
import Contact from './Contact';
import About from './About';

class Home extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Contact />
      </div>
    );
  }
}

export default Home;
