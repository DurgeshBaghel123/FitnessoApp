import React from "react";
import "../css/Card.scss";

function Card({data}) {
  console.log(data)
  return (
    <div className="col-md-4 cardbox" id={data.id}>
      <div className="card shadow bg-light">
        <div className="card-image ">
          <img src={data.img} className="card-img-top " alt="..." />
        </div>
        <div className="card-body bg-light">
          <div className="card-top bg-light">
            <span className="first bg-light">{data.time}</span>
            <span className="second bg-light text-success">{data.price}</span>
          </div>
          <div className="card-middle bg-light">
            <h3 className="bg-light"><a className="bg-light">{data.title}</a></h3>
          </div>
          <div className="card-bottom bg-light">
            <small><i className="fa-solid fa-chevron-right pe-2"></i>Train now</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
