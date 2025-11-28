import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

function Home() {
  return (
    <div>
      <Hero />
      <h2>Our Services</h2>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;