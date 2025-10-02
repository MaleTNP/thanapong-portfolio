import LocationIcon from '../assets/icons/location.svg';
import CalendarIcon from '../assets/icons/calendar.svg';

export default function JourneyCard({ position, company, date, location, description }) {
  return <>
    <div className="p-6 border rounded-xl space-y-2">
      <h3 className="text-xl text-light-cyan font-bold">
        {position} @{company}
      </h3>
      <div className="flex justify-between text-sm text-gray-300">
        <span className="flex items-center gap-2">
          <img className="w-4 h-4" src={CalendarIcon} />{date}
        </span>
        <span className="flex items-center gap-1">
          <img className="w-4 h-4" src={LocationIcon} />{location}
        </span>
      </div>
      <p className="text-gray-100">{description}</p>
    </div>
  </>
}