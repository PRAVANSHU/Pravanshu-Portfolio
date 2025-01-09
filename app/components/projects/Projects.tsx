import React from 'react'
import SectionContainer from '../section/sectioncontainer'
import SectionHeader from '../section/sectionheader';
import projects from "./projects.json"
import Project from "./Project"


const Projects = () => {
  return (
    <SectionContainer id="projects">
        <div className="section-contents mx-6 md:mx-[64px] font-serif">
            <SectionHeader plainText="Some of my" highlightText="Projects" />
            <div className="lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    projects.map((project,id) =>
                    (
                    <Project key={id} thumbnail={project.thumbnail} 
                        title={project.title} link={project.link} description={project.description} />
                    )
                )     
                }
            </div>
        </div>
    </SectionContainer>
  );
};

export default Projects