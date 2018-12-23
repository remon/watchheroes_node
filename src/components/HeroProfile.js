import React from "react";
import HeroBox from "../components/HeroBox";
import HeroDetails from "../components/HeroDetails";

const HeroProfile = props => {
  const hero = props.hero,
    details = hero.details,
    story = details.story;
  console.log(details);
  return (
    <div className="container">
      <div className="row hero-main">
        <div className="col-md-6">
          <img src={hero.image} alt={hero.name} />
        </div>
        <div className="col-md-6 hero_box_container">
          <HeroBox body={hero.name} title="name" />
          <HeroBox body={hero.role} title="role" />
          <HeroBox body={details.difficulty} title="difficulty" />
          <HeroBox body={story.catchPhrase} title="catch Phrase" />
        </div>
      </div>

      <HeroDetails details={details} />
    </div>
  );
};

export default HeroProfile;
