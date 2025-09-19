import JourneyCard from './JourneyCard';
import { JOURNEY } from '../data/journey_data.js';

export default function Journey() {
  return <>
    <div>
      {JOURNEY.map( (journeyItem) => (
        <JourneyCard key={journeyItem.position} {...journeyItem}/>
      ))}
    </div>
  </>
}