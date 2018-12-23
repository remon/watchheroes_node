import React from "react";

const HeroDetails = ({ details }) => {
  const bio = details.story.biography;
  return (
    <div className="hero_details row">
      <div className="col-md-6">
        <div className="hero_desc">
          <p className="hero_desc_p">{details.description}</p>
        </div>
      </div>
      <div className="col-md-6 hero_bio">
        <h2>Biography</h2>

        <ul>
          <li> Real Name : {bio.realName}</li>
          <li> Affiliation : {bio.affiliation}</li>
          <li> Age : {bio.age} Years old. </li>
          <li> Occupation : {bio.occupation} </li>
        </ul>
      </div>
    </div>
  );
};
export default HeroDetails;
