import React from 'react';
import Searchbar from '../search/searchbar';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1 style={{textAlign: "center"}}>Travel__</h1><Searchbar/>
      </header>
      {/* <main>
        <p style={{textAlign: "center"}}>Book your next adventure now!</p>
      </main> */}
    </div>
  );
}

export default HomePage;