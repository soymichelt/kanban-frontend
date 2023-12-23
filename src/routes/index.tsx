import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './../pages/home';
import { Signin } from './../pages/signin';
import { Signup } from './../pages/signup';
import { Profile } from '../pages/profile';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

export const RouterComponent = () => {
  return (
    <RouterProvider router={router} />
  );
};
