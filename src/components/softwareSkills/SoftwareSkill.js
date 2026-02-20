import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

/* Static imports */
import matlab from "../../assets/images/skills/Matlab_Logo.png";
import openfoam from "../../assets/images/skills/OpenFOAM_logo.png";
import paraview from "../../assets/images/skills/paraview_log.png";
import ansys from "../../assets/images/skills/ansys.png";
import comsol from "../../assets/images/skills/comsol.png";
import dassault from "../../assets/images/skills/dassaultsystemes.png";
import siemens from "../../assets/images/skills/siemens.png";

const imageMap = {
  "Matlab_Logo.png": matlab,
  "OpenFOAM_logo.png": openfoam,
  "paraview_log.png": paraview,
  "ansys.png": ansys,
  "comsol.png": comsol,
  "dassaultsystemes.png": dassault,
  "siemens.png": siemens
};

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, i) => {
          return (
            <li key={i} className="software-skill-inline">
              {skill.icon ? (
                <img
                  src={imageMap[skill.icon]}
                  alt={skill.skillName}
                  className="skill-icon-image"
                />
              ) : (
                <i className={skill.fontAwesomeClassname}></i>
              )}
              <p>{skill.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}