import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './../pages/home';
import { Signin } from './../pages/signin';
import { Signup } from './../pages/signup';
import { Header } from '../shared/components/header';


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
]);

export const RouterComponent = () => {
  return (
    <>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
};
