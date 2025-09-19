import { FRONTEND } from "../data/techStack_data.js";
import { BACKEND } from "../data/techStack_data.js";
import { DATABASE } from "../data/techStack_data.js";
import { TOOLS } from "../data/techStack_data.js";

import TechGroup from './TechGroup.jsx';

export default function TechStacks() {
  return <>
    <section id="tech-stack" className="bg-black py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20 text-white">
        <TechGroup techName="FRONTEND" techArray={FRONTEND}/>
        <TechGroup techName="BACKEND" techArray={BACKEND} />
        <TechGroup techName="DATABASE" techArray={DATABASE} />
        <TechGroup techName="TOOLS" techArray={TOOLS} />
      </div>
    </section>
  </>
}