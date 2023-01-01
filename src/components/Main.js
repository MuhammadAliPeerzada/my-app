import React from "react";

function Home(props) {
  return (
    <>
      <div
        className="card my-5 mx-auto"
        style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Home;
