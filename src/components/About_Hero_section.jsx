import React from "react";
import Button from "./Button";
import "../css/About_hero_section.css";
import data from "./Heosection_Data";
import { Typewriter, Cursor } from "react-simple-typewriter";

function About_Hero_section() {
  // const {text} =Typewriter({
  //   words:["Durgesh","Parmod","Lokendra Kumar"],
  //   loop:{},
  // })

  return (
    <div className="row about-hero-section bg-light px-5">
      <div className="col-md-6 about-text ">
        <h6 className="auto-text">
          HI I'M {"  "}
          <span >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[" Durgesh Singh Baghel", " Lokendra Kumar", " Prahil Singh Baghel"]}
              loop={0}
              typeSpeed={100}
              deleteSpeed={100}
              
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </h6>
        <h1>
          Who can benefit from a fully custom online fitness plan & nutrition?
        </h1>
        <p>
          Literally everyone. I’m currently helping people from 12 to 60+ years
          old. Everyone is getting an adjusted program and a meal plan.
        </p>

        <Button data="Book A CALL" />
      </div>
      <div className="col-md-6 about-image ">
        <img
          src="public\image\5e832f3642594a78b769c981_logan-weaver-p3xsJQiu2YA-unsplash-p-800.jpeg"
          className="w-100 "
        />
      </div>
    </div>
  );
}

export default About_Hero_section;
