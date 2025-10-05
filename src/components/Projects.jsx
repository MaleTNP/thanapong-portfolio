import ProjectCard from './ProjectCard.jsx';
import { PROJECTDATA } from '../data/project_data.js';

export default function Projects() {
  return <>
    {/* Projects Global Container */}
    <div className="py-20 px-6 bg-black">

      {/* Projects Container */}
      <div className="flex flex-col jusitify-center items-center space-y-6">

        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <p className="text-xl text-gray-300">This is something I've built</p>

        {/* Project Cards Container */}
        <div className="grid md:grid-cols-2 gap-3">
          {PROJECTDATA.map( (projectItem) => (
            <ProjectCard key={projectItem.title} {...projectItem}/>
          ))}
        </div>

      </div>

    </div>
  </>
}