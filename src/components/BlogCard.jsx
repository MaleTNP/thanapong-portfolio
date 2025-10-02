import rightArrowIcon from '../assets/icons/right-arrow-light-cyan.svg'; 
import calendarIcon from '../assets/icons/calendar-gray.svg';
import clockIcon from '../assets/icons/clock-gray.svg';

export default function BlogCard({ image, date, time, title, description, link}) {
  return <>
    {/* Blog Card */}
    <div className="bg-gray-900 rounded-2xl overflow-hidden">

      {/* Blog Image */}
      <div>
        <img src={image} alt={title}
          className="w-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="space-y-4 m-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <img 
              className="w-4 h-4" 
              src={clockIcon} alt="" />
            <p className="text-sm text-gray-400">{date}</p>
          </div>
          <div className="flex items-center space-x-2">
            <img 
              className="w-4 h-4 stroke-gray-400" 
              src={calendarIcon}
            />
            <p className="text-sm text-gray-400">{time}</p>
          </div>
        </div>
        <p className="text-gray-300">{description}</p>
        <a className="text-light-cyan" href={link}>Read More
          <img className="inline w-8 h-8" src={rightArrowIcon} alt="" />
        </a>
      </div>
    </div>
  </>
}
