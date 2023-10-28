import React from 'react';
import Searchbar from '../search/searchbar';
import Banner from '../banner/index';
import { useNavigate } from "react-router-dom";
const GuestHomePage = () => {
  const navigate = useNavigate();
  const onLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="mt-3">
      <header>
        <h1 style={{ textAlign: "center" }}>Travel__</h1>
        <button onClick={onLoginClick} className="btn btn-outline-secondary rounded-pill position-absolute" style={{width: "120px", left:"80%", top:"3%"}}>Sign in</button>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10%"}}>
            <Searchbar />
        </div>
      </header>
      {/* <main>
        <p style={{textAlign: "center"}}>Book your next adventure now!</p>
      </main> */}
    </div>
  );
}

export default GuestHomePage;