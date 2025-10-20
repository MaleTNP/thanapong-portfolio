import UpcomingCard from "./UpcomingCard";
import { UPCOMINGDATA } from "../data/upcoming_data";

export default function Upcoming() {
  return <>
    {/* Upcoming Global Container */}
    <div className="py-20 px-6 bg-black">

      {/* Upcoming Container */}
      <div className="flex flex-col justify-center items-center gap-6">

        <h2 className="text-3xl font-bold text-white">Upcoming Projects</h2>
        <p className="text-xl text-gray-300">A few exciting projects I'm currently working on</p>

        {/* Upcomming Card Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {UPCOMINGDATA.map( (UpcomingItem) => (
            <UpcomingCard key={UpcomingItem.title} {...UpcomingItem}/>
          ))}
        </div>

      </div>

    </div>
  </>
}
