import React from "react"
import Filter from "./Filter"
import Showcase from "./Showcase"

function Projects() {
  return (
    <div className="projects section-padding">
      <h3 className="section-heading">Projects</h3>
      <div className="container">
        <Filter />
        <Showcase />
      </div>
    </div>
  )
}

export default Projects
