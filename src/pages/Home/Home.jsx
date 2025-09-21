import Intro from '../../components/Intro.jsx';
import AboutMe from '../../components/AboutMe.jsx';
import Journey from '../../components/Journey.jsx';
import TechStacks from '../../components/TechStacks.jsx';
import Blog from '../../components/Blog.jsx';

function HomePage() {
  return (
    <>
      <main>
        <Intro />
        <AboutMe />
        <Journey />
        <TechStacks />
        <Blog />
        <div>Get in touch</div>
      </main>
    </>
  )
}

export default HomePage;