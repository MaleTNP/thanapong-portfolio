import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Journey from './components/Journey.jsx';
import TechStacks from './components/TechStacks.jsx';
import Blog from './components/Blog.jsx';

export default function App() {
  return (
    <>
      <header></header>
      <main>
        <Home />
        <AboutMe />
        <Journey />
        <TechStacks />
        <Blog />
        <div>Get in touch</div>
      </main>
      <footer></footer>
    </>
  )
}
