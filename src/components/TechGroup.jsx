import '../styles.css';
import TechGrid from './TechGrid.jsx';

export default function TechGroup({ techName, techArray}) {
  return <>
    <div className="flex md:flex-row flex-col gap-8 items-start">
      <div 
        className="w-full md:w-1/5 text-gray-400 font-bold text-lg duration-200 hover:text-white"
      >
        {techName}
      </div>
      <div 
        className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
        gap-6 animation-fade-in"
      >
        {techArray.map( (techItem) => (
          <TechGrid key={techItem.title} {...techItem}/>
        ))}
      </div>
    </div>
  </>
}