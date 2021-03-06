import React from "react"
import check from "../../images/icons8-checkmark (1).svg"
import "./skills.css"
import { useEffect } from "react"

const Skills = () => {
  useEffect(() => {
    document.addEventListener("aos:in:card", ({ detail }) => {
      // detail is a target element
      setTimeout(() => detail.setAttribute("data-aos-delay", "0"), 350)
    })
  }, [])
  const data = [
    {
      "Front End": ["HTML, CSS, JS", "Bootstrap", "React, Redux", "NextJS"],
    },
    {
      "Back End": ["NodeJS", "ExpressJs", "MongoDB", "Basic Authentication"],
    },
    {
      Others: [
        "Git, AdobeXD",
        "Figma",
        "Hero Web Hosting",
        "Firebase",
        "Docker CI/CD",
      ],
    },
  ]

  return (
    <div className="skills section-padding section">
      <div className="container">
        <div className="section-heading color" data-aos="fade-up">
          <h3>Skills</h3>
          <p>Skills</p>
        </div>
        <div className="skills__content grid">
          {data.map((each, i) => (
            <div
              key={i}
              className="card"
              data-aos="fade-up"
              data-aos-delay={300 * i}
              data-aos-id="card"
            >
              <h3 className="card__heading">{Object.keys(each)}</h3>
              {each[Object.keys(each)].map(abc => (
                <div key={abc} className="card__row">
                  <span>
                    <img src={check} alt="check" />
                  </span>
                  <p>{abc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
