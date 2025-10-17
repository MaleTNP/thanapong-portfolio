
export default function ProjectCard({ image, title, description, tech, liveDemoIsActive, liveDemoLink, gitHubIsActive, gitHubLink }) {
  return <>
    {/* Project Card */}
    <div className="bg-white rounded-2xl overflow-hidden">

      {/* Project Image */}
      <div>
        <img 
          className="w-full object-cover"
          src={image} alt="" 
        />
      </div>

      {/* Project Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>

        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-3 my-4">
          {tech.map( (techItem) => (
            <TechStackList key={techItem.name} {...techItem}/>
          ))}
        </div>

        {/* Project Link */}
        <div className="space-x-2 mt-4">
          <a 
            href={liveDemoLink}
            className={`px-4 py-1 bg-aqua hover:bg-aqua-dark text-white rounded-lg
            ${liveDemoIsActive ? null : 'hidden'}`}
          >
            Live Demo
          </a>
          <a 
            href={gitHubLink}
            className={`px-4 py-1 bg-black hover:bg-gray-700 text-white rounded-lg
            ${gitHubIsActive ? null : 'hidden'}`}
          >
            GitHub
          </a>
        </div>

      </div>

    </div>
  </>
}

function TechStackList({ icon, name }) {
  return <>
    <div className="p-1.5 flex bg-gray-100 rounded-lg space-x-2">
      <img className="w-5 h-5" src={icon}/>
      <label className="text-sm">{name}</label>
    </div>
  </>
}
