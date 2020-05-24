import React from "react";

function CardHome(props) {
  return (
    <div
      className=" col s12 m12 l12"
      style={{
        top: "100px",

        width: "100%",

        justifyContent: "center",
        alignItems: "center",
        padding: "90px",
        height: "100vh",
        opacity: "2",
      }}
    >
      <div class="card-small transparent container black-text">
        {props.children}

        <div class="card-content black darken-4 right"></div>
      </div>
    </div>
  );
}

export default CardHome;
