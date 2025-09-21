import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home/Home.jsx';
// import SpringBootHome from './pages/springboot/SpringBootHome.jsx';
// import Sec03 from './pages/springboot/pages/Sec03.jsx';

const router = createBrowserRouter([
  { path: '/thanapong-portfolio', element: <HomePage />,},
  // { path: '/thanapong-portfolio/springboot', element: <SpringBootHome />},
  // { path: '/thanapong-portfolio/springboot/Sec03', element: <Sec03 />},
]);

export default function App() {
  return <RouterProvider router={router}/>
}
