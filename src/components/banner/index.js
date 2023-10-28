import React from "react";
import Searchbar from "../search/searchbar";

const Banner = () => {
  const isLoggedin = true;
  const inboxCount = 9;
  return (
    <>
      <div className="row align-items-center"
      style={{width: "100%"}}>
        <h1 className="col-2">Travel__</h1>
        {/* <input className="col form-control rounded-pill border border-dark ms-1 me-4 ps-5"
               placeholder="Where do you want to explore next?"
        /> */}
        <div className="col"><Searchbar/></div>
        {/* <i class="bi bi-search position-absolute"
          style={{left: "16%"}}></i> */}
        {isLoggedin ?
          <div className="col-1">
            <div className="row">
              <div className="col-6">
                {inboxCount > 0 ? <i className={"bi bi-" + inboxCount + "-circle-fill position-absolute"} style={{ color: "orange", top:"7px", left: "93.15%" }}></i> : <></>}
                <i className="bi bi-envelope-fill" style={{fontSize: 40, color: "lightgray"}}></i>
              </div>
              <i className="col-6 bi bi-person-circle" style={{fontSize: 40, color: "lightgray"}}></i>
              </div>
            </div>
          : <button className="col-1 btn btn-outline-secondary rounded-pill">Sign in</button>}
      </div>
    </>
  )
}

export default Banner;