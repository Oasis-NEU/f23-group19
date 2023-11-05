import React from 'react';
import Searchbar from '../search/searchbar';
import Banner from '../banner/index';
import SignedInHomePage from './signed-in';
import GuestHomePage from './guest';
import TravelPost from '../../posts/post-item';
import travelData from '../../posts/post-examples';
const HomePage = () => {
  const isSignedIn = false;
  return (
    <div>
      {isSignedIn ? <SignedInHomePage/> : <GuestHomePage/> } 
      <br/>
      {travelData.map((post, index) => (
        <TravelPost key={index} {...post} />
      ))}
    </div>
  );
}

export default HomePage;