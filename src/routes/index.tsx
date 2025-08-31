import { createBrowserRouter, RouterProvider } from 'react-router';
import { ROUTES } from './utils';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <div>Home Page</div>,
  },
  // Authentication routes
  {
    path: ROUTES.LOGIN,
    element: <div>Login Page</div>,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
