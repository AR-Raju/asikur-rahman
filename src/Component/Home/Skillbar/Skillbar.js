import React from "react";
import SkillBar from "react-skillbars";
import { SkillBars } from "react-skills";

const Skillbar = () => {
  const skills = [
    { name: "HTML", level: 95, color: "#5bc0de" },
    { name: "CSS", level: 90, color: "#5bc0de" },
    { name: "Javascript", level: 80, color: "#5bc0de" },
    { name: "React", level: 75, color: "#5bc0de" },
    { name: "NodeJs", level: 75, color: "#5bc0de" },
    { name: "MongoDB", level: 70, color: "#5bc0de" },
  ];

  return (
    <div>
      <SkillBars skills={skills} />
      {/* <SkillBar
        skills={skills}
        colors={
          ({ bar: "blue" },
          {
            title: {
              text: "#abc123",
              background: "#fff",
            },
          })
        }
      /> */}
    </div>
  );
};

export default Skillbar;
