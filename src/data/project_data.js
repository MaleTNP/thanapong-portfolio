import portfolioWebsiteImg from '../assets/others/Portfolio_website.png';
import RESTCRUDAPIsImg from '../assets/others/REST-CRUD-APIs.png';

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
    liveDemoLink: '#',
    gitHubIsActive: false,
    gitHubLink: null, 
  },
  {
    image: RESTCRUDAPIsImg,
    title: 'REST CRUD APIs',
    description: 
      'Built REST controller to perform CRUD operations, connecting Java \
      objects with a MySQL database using the Spring Boot framework. Utilized \
      Springdoc to document API endpoints and provide an interactive web UI \
      ',
    tech: [
      { icon: JavaIcon, name: 'Java' },
      { icon: SpringBootIcon, name: 'SpringBoot' },
      { icon: HibernateIcon, name: 'Hibernate' },
    ], 
    liveDemoIsActive: false,
    liveDemoLink: null,
    gitHubIsActive: true,
    gitHubLink: 'https://github.com/MaleTNP/spring-boot-rest-crud-api',
  },
]