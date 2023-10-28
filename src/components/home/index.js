import React from 'react';
import Searchbar from '../search/searchbar';
import Banner from '../banner/index';
import SignedInHomePage from './signed-in';
import GuestHomePage from './guest';
const HomePage = () => {
  const isSignedIn = false;
  return (
    <div>
      {isSignedIn ? <SignedInHomePage/> : <GuestHomePage/> }
    </div>
  );
}

export default HomePage;