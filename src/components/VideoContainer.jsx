import React from "react";
import "../css/Videocontainer.css";

function VideoContainer() {
  return (
    <div className="row videosection">
      <div className="col-md-12 col-sm-12 mx-auto">
        <h2>How does online fitness coaching work ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>
      </div>
      <div className="col-md-10 col-sm-4 mx-auto  text-center my-5 py-3 video_container">
        <iframe
          
          src="https://www.youtube.com/embed/tmg6d3T_T6Q"
          
        ></iframe>
      </div>
    </div>
  );
}

export default VideoContainer;
