import ReactImg from '../assets/others/Spring-Boot-Male.png'

export default function ProjectCard() {
  return <>
    {/* Project Card */}
    <div className="bg-white rounded-2xl overflow-hidden">

      {/* Project Image */}
      <div>
        <img 
          className="w-full object-cover"
          src={ReactImg} alt="" 
        />
      </div>

      {/* Project Content */}
      <div>
        <h3>Portfolio Website</h3>
        <p>
          My portfolio website showcases my journey, skills, blog posts, and projects. 
          It was built using a core technology stack of React, Tailwind CSS, and 
          JavaScript, providing me with real, hands-on development experience
        </p>

        {/* Tech Stack List */}
        <div>
          <div></div>
        </div>

        {/* Project Link */}
        <div>
          <button className="bg-amber-500">Live Demo</button>
          <button className="bg-amber-400">GitHub</button>
        </div>

      </div>

    </div>
  </>
}