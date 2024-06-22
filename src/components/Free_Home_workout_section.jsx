import React from "react";
import "../css/Free_Home_workout_section.css";
import Button from "./Button";
//import Card from "./Card";
import Card from "./Card";
import data from "./CardData";

function Free_Home_workout_section() {
  return (
    <>
      <div className="row  my-5 px-5 workout ">
        <div className="col-md-12 freehome_workout">
          <h2>Free home workouts and fitness plans</h2>
          <p>
            I’ve created these premium fitness classes for everyone starting
            from beginner to advanced level with an in depth FAQ.
          </p>
          <Button data="view all" />
        </div>
        <div className="row pt-5 p-0">
          {data.map((ele, ind) => {
            return <Card data={ele} id={ind} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Free_Home_workout_section;
