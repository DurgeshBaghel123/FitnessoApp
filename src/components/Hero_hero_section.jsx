import React from "react";
import Button from "./Button";
import "../css/Hero_hero_section.css";

function Hero_hero_section() {
  return (
    <div className="row hero-hero-section bg-light px-5">
      <div className="col-md-6 home-image ">
        <img
          src="public\image\5e80a6e90c4ef4bcb4fd3071_Rectangle 439.png"
          className="w-100 "
        />
      </div>
      <div className="col-md-6 home-text ps-5 ">
        <span>HI I'M SANDRA LYONS</span>
        <h1>
        Your go to online fitness trainer and nutritionist.
        </h1>
        <p>
          Literally everyone. I’m currently helping people from 12 to 60+ years
          old. Everyone is getting an adjusted program and a meal plan.
        </p>

        <Button data="Book A CALL" />
      </div>
    </div>
  );
}

export default Hero_hero_section;
