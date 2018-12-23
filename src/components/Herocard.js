import React from "react";
import { Link } from "react-router-dom";
const Herocard = props => {
  const Hero = props.hero;

  const heroLink = "/" + Hero.id;
  return (
    <div className="hero-card-item col-md-3 col-sm-4 col-xs-6">
      <Link to={`${heroLink}`}>
        <div className="hero-inner">
          <img src={Hero.image} className="hero-pt" alt={Hero.name} />

          <div className="hero-name"> {Hero.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default Herocard;
