import portfolioWebsiteImg from '../assets/others/Portfolio_website.png';

import ReactIcon from '../assets/icons/React.svg';
import TailwindCSSIcon from '../assets/icons/TailwindCSS.svg';
import JavaScriptIcon from '../assets/icons/JavaScript.svg';
import HTML5Icon from '../assets/icons/HTML5.svg';
import CSS3Icon from '../assets/icons/CSS3.svg';
import JavaIcon from '../assets/icons/Java.svg';
import SpringBootIcon from '../assets/icons/SpringBoot.svg';
import HibernateIcon from '../assets/icons/Hibernate.svg';

export const PROJECTDATA = [
  {
    image: portfolioWebsiteImg,
    title: 'Portfolio Website',
    description: 
      'Built with React, Tailwind, and JavaScript, this portfolio website \
      demonstrates my skills through projects, blog posts, and journey\
      ',
    tech : [
      { icon: ReactIcon, name: 'React' },
      { icon: TailwindCSSIcon, name: 'TailwindCSS' },
      { icon: JavaScriptIcon, name: 'JavaScript' },
      { icon: HTML5Icon, name: 'HTML' },
      { icon: CSS3Icon, name: 'CSS' },
    ],
    liveDemoIsActive: true,
    gitHubIsActive: false,
  },
  {
    image: '',
    title: 'Spring Boot',
    description: 
      'Built with React, Tailwind, and JavaScript, this portfolio website \
      demonstrates my skills through projects, blog posts, and journey\
      ',
    tech: [
      { icon: JavaIcon, name: 'Java' },
      { icon: SpringBootIcon, name: 'SpringBoot' },
      { icon: HibernateIcon, name: 'Hibernate' },
    ], 
    liveDemoActive: true,
    gitHubActive: false,
  },
]