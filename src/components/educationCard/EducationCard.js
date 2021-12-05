import React, { createRef, useContext } from "react";
import { Fade } from "react-reveal";
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => <li className="subTitle">{item}</li>)
      : null;
  };
  const { isDark } = useContext(StyleContext);
  return (
    <div>
      <div className={isDark ? "dark-mode main" : "main"} id="skills">
        <div className="skills-main-div">
          <Fade left duration={1000}>
            <div className="education-card">
              <div className="education-card-left">
                <img alt="school"
                  crossOrigin={"anonymous"}
                  ref={imgRef}
                  className="education-roundedimg"
                  src={school.logo}
                  alt={school.schoolName}
                />
              </div>
              <div className="education-card-right">
                <h5 className="education-text-school">{school.schoolName}</h5>
                <div className="education-text-details">
                  <h5
                    className={
                      isDark
                        ? "dark-mode education-text-subHeader"
                        : "education-text-subHeader"
                    }
                  >
                    {school.subHeader}
                  </h5>
                  <p
                    className={`${isDark ? "dark-mode" : ""
                      } education-text-duration`}
                  >
                    {school.duration}
                  </p>
                  <p className="education-text-desc">{school.desc}</p>
                  <div className="education-text-bullets">
                    <ul>
                      <GetDescBullets descBullets={school.descBullets} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </Fade>
          <Fade right duration={1000}>
            <div className="education-text-div">
              <div className="education-image-div">
                <img alt="careys"
                  src={require("../../assets/images/careys.jpg")}
                ></img>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
