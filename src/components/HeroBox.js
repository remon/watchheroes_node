import React from "react";

const HeroBox = props => {
  return (
    <div className=" hero_box col-md-6 ">
      <div className="inside_hero_box">
        <div className="inside_hero_title">{props.title}</div>
        <div className="inside_hero_body">{props.body}</div>
      </div>
    </div>
  );
};
export default HeroBox;
