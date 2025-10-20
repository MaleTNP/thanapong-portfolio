export default function UpcomingCard({ title, description, tech}) {
  return <>
    {/* Upcomming Card */}
    <div className="bg-white rounded-2xl p-4">

      {/* Content */}
      <div className="p-2 space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-3 my-4">
          {tech.map( (techItem) => (
            <TechStackList key={techItem.name} {...techItem}/>
          ))}
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