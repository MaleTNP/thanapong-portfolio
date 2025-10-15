import JourneyCard from './JourneyCard';
import { JOURNEY } from '../data/journey_data.js';

export default function Journey() {
  return <>
    {/* Journey Global Container */}
    <div className="py-10 px-6 bg-black text-white">

      <div className="mb-10 text-3xl font-bold text-center text-light-cyan">My Journey</div>
      
      <div className="relative">
        {/* Journey Line */}
        <div 
          className="absolute left-1/2 hidden md:block bg-light-cyan w-1 h-full 
          rounded-full"
        ></div>

        {JOURNEY.map( (journeyItem, index) => (
          <JourneyCard key={journeyItem.position} index={index} {...journeyItem}/>
        ))}

      </div>


    </div>
  </>
}

      // <div className="flex flex-col space-y-8 my-6"></div>