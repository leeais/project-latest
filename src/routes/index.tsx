import { createBrowserRouter, RouterProvider } from 'react-router';
import { ROUTES } from '@/routes/utils';
import { Login } from '@/features/auth';
import Test from '@/pages/Test';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <div>Home Page</div>,
  },
  // Test routes
  {
    path: ROUTES.TEST,
    element: <Test />,
  },
  // Authentication routes
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
