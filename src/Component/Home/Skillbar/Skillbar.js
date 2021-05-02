import React from "react";
import SkillBar from "react-skillbars";

const Skillbar = () => {
  const skills = [
    { type: "HTML", level: 95 },
    { type: "CSS", level: 90 },
    { type: "Javascript", level: 80 },
    { type: "React", level: 75 },
    { type: "NodeJs", level: 75 },
    { type: "MongoDB", level: 70 },
  ];
  return (
    <div>
      <SkillBar skills={skills} />
    </div>
  );
};

export default Skillbar;
