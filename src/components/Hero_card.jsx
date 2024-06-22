import React from "react";
import "../css/Hero_card.css";

function Hero_card({ data }) {
  console.log(data);
  return data.map((ele, ind) => {
    return (
      <div className="col-md-6 hero_card mx-auto mb-5 pb-5">
        <div className="feature-grained"></div>
        <div className="image  text-center py-3">
        
          <img
            src={ele.image}
            className="w-75 shadow"
          />
          
        </div>
        <h4 className="text-center pt-3 mx-auto">
          {ele.heading}
        </h4>
        <p className="text-center">
          Changing your lifestyle with a fast paced life may seem hard or
          impossible, but with small steps each week you can achieve your dream
          physique and live a healthier.
        </p>
      </div>
    );
  });
}

export default Hero_card;
