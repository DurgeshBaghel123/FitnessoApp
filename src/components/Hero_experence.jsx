import React, { useEffect, useState } from "react";
import "../css/Hero_experence.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Hero_experence() {
  const [counteron, setcounteron] = useState(false);

  return (
    <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
      <div className="row hero_experence bg-light  text-center ">
        <div className="col-md-4 mx-auto ">
          
            {counteron && <CountUp start={1} end={400} duration={3} delay={0} />} <span>+</span>
          
          <p>HAPPY CLIENTS</p>
        </div>
        <div className="col-md-4 mx-auto">
           {counteron && <CountUp start={10} end={200} duration={3} delay={0} />} <span>P</span>
          <p>OF EXPERIENCE</p>
        </div>
        <div className="col-md-4 mx-auto">
          {counteron && <CountUp start={100} end={800} duration={3} delay={0} />} <span>K</span>
          <p>FOLLOW ME</p>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Hero_experence;
