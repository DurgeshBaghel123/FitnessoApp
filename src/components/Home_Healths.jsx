import React from "react";
import "../css/Home_healths.css";
import Button from "../components/Button";
import Hero_card from "./Hero_card";
import data from "./Hero_card_data";

function Home_Healths() {
  return (
    <>
      <div className="row home_health">
        <div className="col-md-8 text-center mx-auto">
          <h1>The journey to a healthier body starts right now</h1>
          <Button data="Online coaching!" />
        </div>
      </div>
      <div className="row card_section">
        <Hero_card data={data}/>
      </div>
    </>
  );
}

export default Home_Healths;
