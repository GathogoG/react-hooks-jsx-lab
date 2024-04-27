import React from 'react';

const Home = ({ name, city }) => {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>your {name} is a Web Developer from your{city}</h1>
    </div>
    
  );
};

export default Home;