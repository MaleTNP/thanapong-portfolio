import JourneyCard from './JourneyCard';
import { JOURNEY } from '../data/journey_data.js';

export default function Journey() {
  return <>
    {/* Journey Global Container */}
    <div className="relative py-10 px-6 bg-black text-white">

      {/* Journey Line */}
      <div className="absolute hidden md:block">Line</div>

      <div className="text-3xl font-bold text-center text-light-cyan">My Journey</div>

      <div className="flex flex-col space-y-8 my-6">
        {JOURNEY.map( (journeyItem) => (
          <JourneyCard key={journeyItem.position} {...journeyItem}/>
        ))}
      </div>

    </div>
  </>
}