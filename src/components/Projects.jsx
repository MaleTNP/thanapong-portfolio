import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return <>
    {/* Projects Global Container */}
    <div className="py-20 px-6 bg-black">

      <h2 className="text-center">Projects</h2>
      <p className="text-center">This is something I've built</p>

      {/* Projects Container */}
      <div className="grid md:grid-cols-2 gap-3">
        <ProjectCard />
      </div>

    </div>
  </>
}