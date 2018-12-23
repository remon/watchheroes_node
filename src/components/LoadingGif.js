import React from "react";

const LoadingGif = props => {
  return (
    <div className="container  prog_container">
      <img src="/build/loading_ball.gif" alt="loading git" />
      <div>
        <h3>{props.text}</h3>
      </div>
    </div>
  );
};

export default LoadingGif;
