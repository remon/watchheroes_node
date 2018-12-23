import React from "react";

const HeroProfile = props => {
  const hero = props.hero;

  return (
    <div className="hero-main container">
      <img src={hero.image} />

      <div>
        <h2>{hero.name}</h2>
      </div>
    </div>
  );
};

export default HeroProfile;
