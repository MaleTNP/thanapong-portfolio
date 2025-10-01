import Hero from '../../components/Hero.jsx';
import AboutMe from '../../components/AboutMe.jsx';
import Journey from '../../components/Journey.jsx';
import TechStacks from '../../components/TechStacks.jsx';
import Blog from '../../components/Blog.jsx';
import Projects from '../../components/Projects.jsx';

function HomePage() {
  return (
    <>
      <main>
        {/* <div className="fixed right-0 h-full w-1 bg-lime-300 z-1000"></div> */}
        <Hero />
        <AboutMe />
        <Journey />
        <TechStacks />
        <Blog />
        <Projects />
        <div>Get in touch</div>
      </main>
    </>
  )
}

export default HomePage;