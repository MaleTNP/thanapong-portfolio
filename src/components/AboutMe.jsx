import Male from '../assets/profiles/Male.jpg';
import arrowDown from '../assets/icons/arrow-down.svg';
import SocialIcon from './SocialIcon.jsx';
import { SOCIALICON } from '../data/social_data.js';

export default function AboutMe() {
  return <>
    {/* AboutMe Global Container */}
    <div className="py-20 px-6 bg-black text-white">

      {/* AboutMe Inner Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center
      justify-center text-center md:text-left gap-10 px-4">

        {/* Profile Image */}
        <div className="flex-shrink-0 h-64 w-48 overflow-hidden rounded-lg">
          <img className="w-full h-full object-cover" src={Male}/>
        </div>

        {/* Text Content */}
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            I'm <span className="text-light-cyan">Thanapong Yooyen</span>, a programmer who loves bringing ideas 
            to life with code.
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Following a three-year career in the automotive industry, 
            I made a decisive move to pursue my passion for technology. 
            I am a self-learner who has acquired the foundational knowledge of 
            both Full-Stack Development and Java Programming.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            My current focus areas are {' '}
            <span className="text-light-cyan">Spring Boot</span>,{' '} 
            <span className="text-light-cyan">Java</span>,{' '}
            <span className="text-light-cyan">React</span>, and{' '} 
            <span className="text-light-cyan">JavaScript</span>{' '}
            I enjoy to solving complex algorithms and build responsive UIs.
          </p>

          {/* Social Icon */}
          <div className="flex flex-row justify-center space-x-8">
            { SOCIALICON.map( (socialItem) => (
              <SocialIcon key={socialItem.name} {...socialItem}/>
            ))}
          </div>

          {/* Donwload Resume Button */}
          <div class="inline-block mt-8 p-2 border-2 border-light-cyan rounded-full">
            <a className="flex items-center space-x-4" href="">
              <div>
                <img className="w-8 h-8 bg-light-cyan rounded-full" src={arrowDown} alt=""/>
              </div>
              <label className="text-light-cyan pr-2">Resume</label>
            </a>
          </div>
        </div>
      
      </div>
    </div>
  </>
}