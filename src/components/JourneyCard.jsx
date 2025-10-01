export default function JourneyCard({ position, company, date, location, description }) {
  return <>
    <div className="p-6 border rounded-xl space-y-2">
      <h3 className="text-xl text-light-cyan font-bold">
        {position} @{company}
      </h3>
      <div className="flex justify-between text-sm text-gray-300">
        <span className>{date}</span>
        <span>{location}</span>
      </div>
      <p className="text-gray-100">{description}</p>
    </div>
  </>
}