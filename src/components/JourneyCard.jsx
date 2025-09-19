export default function JourneyCard({ position, company, date, location, description }) {
  return <>
    <div className="p-8">
      <h3>{position} @{company}</h3>
      <div>
        <span>{date}</span>
        <span>{location}</span>
      </div>
      <p>{description}</p>
    </div>
  </>
}