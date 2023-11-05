import React from "react";
const TravelPost = (
    {
        dateRange, fromLocation, toLocation, price, postedBy, vehicle, numberOfPeople, imageUrl
    }
) => {
    return(
    <div className="post">
      <img src={imageUrl} style={{width:300, height:200}} />
      <div className="post-details">
      <div className="fw-bolder">{`${fromLocation}`}</div>
      <div className="fw-bolder">{`${toLocation}`}</div>
        <p>{dateRange} <br/> 
        <i class="bi bi-cash-coin"></i> ${price} <br/> 
        <i class="bi bi-person"></i> {postedBy} <br/> 
        <i class="bi bi-car-front"></i> {vehicle} <br/> 
        <i class="bi bi-people"></i> {numberOfPeople} <br/> 
        </p>
      </div>
    </div>
    );
};
export default TravelPost;