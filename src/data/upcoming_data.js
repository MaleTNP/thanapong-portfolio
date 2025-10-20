import RenderIcon from '../assets/icons/Render.svg';
import PostgreSQLIcon from '../assets/icons/PostgreSQL.svg';
import DockerIcon from '../assets/icons/Docker.svg';
import SpringBootIcon from '../assets/icons/SpringBoot.svg';
import JavaIcon from '../assets/icons/Java.svg';

export const UPCOMINGDATA = [
  {
    title: 'REST CRUD APIs - Live Demo',
    description: 
      'This is the REST CRUD APIs project which I want to make it to live demo, \
      need to deployed on Render. \
      Tasks include switching the database connection to PostgreSQL and \
      configuring the Spring Boot application to run using the Docker engine.',
    tech : [
      { icon: RenderIcon, name: 'Render'},
      { icon: PostgreSQLIcon, name: 'PostgreSQL'},
      { icon: DockerIcon, name: 'Docker'},
      { icon: SpringBootIcon, name: 'Spring Boot'},
      { icon: JavaIcon, name: 'Java'},
    ],
  },
]