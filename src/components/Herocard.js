import React from "react";
import { Link } from "react-router-dom";
const Herocard = ({ hero }) => {
  const heroLink = "/" + hero.id;
  return (
    <div className="hero-card-item col-md-3 col-sm-4 col-xs-6">
      <Link to={`${heroLink}`}>
        <div className="hero-inner">
          <img src={hero.image} className="hero-pt" alt={hero.name} />

          <div className="hero-name"> {hero.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default Herocard;
