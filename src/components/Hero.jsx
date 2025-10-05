import bgParticle from '../assets/others/Paticle.mp4';

export default function Hero() {
  return <>
    <div>
      {/* Hero Container */}
      <div className="relative flex justify-center items-center">
        
        {/* Background  */}
        <video className="h-screen w-screen object-cover -z-10" loop autoPlay muted>
          <source src={bgParticle} type="video/mp4"/>
        </video>

        {/* Content */}
        <div className="absolute flex flex-col items-center space-y-4 text-2xl text-white">
          <h1 className="text-4xl">Good day! I'm</h1>
          <button className="text-6xl">THANAPONG</button>
          <p className="text-center text-gray-300 px-8">a developer with a keen interest in Web and Backend development</p>
          <a src="#" className="px-4 bg-blue-400 rounded-lg">VIEW PROJECT</a>
        </div>

      </div>
    </div>
  </>
}