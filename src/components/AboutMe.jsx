import Male from '../assets/profiles/Male.jpg';

export default function AboutMe() {
  return <>
    <div className="flex">
      <div>
        <img className="w-80 rounded-lg" src={Male}/>
      </div>
      <div>
        <h2>I'm Thanapong Yooyen, a programmer who loves bringing ideas 
          to life with code.</h2>
        <p>Following a three-year career in the automotive industry, 
          I made a decisive move to pursue my passion for technology. 
          I am a self-learner who has acquired the foundational knowledge of 
          both Full-Stack Development and Java Programming.
        </p>
        <p>
          My current focus areas are Java, Spring Boot, JavaScript, and React. 
          I enjoy to solving complex algorithms and build responsive UIs.
        </p>
      </div>
    </div>
  </>
}