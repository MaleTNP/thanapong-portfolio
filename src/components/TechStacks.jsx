import { FRONTEND } from "../data/techStack_data.js";
import { BACKEND } from "../data/techStack_data.js";
import { DATABASE } from "../data/techStack_data.js";
import { TOOLS } from "../data/techStack_data.js";

import TechGroup from './TechGroup.jsx';

export default function TechStacks() {
  return <>
    {/* TeckStack Global Container */}
    <div id="tech-stack" className="bg-black py-20 px-6">

      {/* TechStach Container */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="mb-10 text-3xl font-bold text-white">Tech Stack</h2>
        {/* <p className="">These are the programming languages, frameworks, databases, and tools I have experience working with.</p> */}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-20 text-white">
        <TechGroup techName="FRONTEND" techArray={FRONTEND}/>
        <TechGroup techName="BACKEND" techArray={BACKEND} />
        <TechGroup techName="DATABASE" techArray={DATABASE} />
        <TechGroup techName="TOOLS" techArray={TOOLS} />
      </div>


    </div>
  </>
}