import React from "react";
import Hero from './hero/hero'
import Skills from './skills/skills'
import Projects from "./projects/Projects";
import Certificates from "./certificate/certificates";
import Contact from "./contact"

const Sections =() => {
    return <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
    </main>
};

export default Sections;