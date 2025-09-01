import { createBrowserRouter, RouterProvider } from 'react-router';
import { ROUTES } from '@/routes/utils';
import DashboardLayout from '@/components/_layout/DashboardLayout';
import StudentLayout from '@/components/_layout/StudentLayout';
import Test from '@/pages/Test';
import Login from '@/pages/_auth/Login';
import AdminDashboard from '@/pages/_admin/AdminDashboard';
import { ROLES } from '@/config/roles';
import StaffDashboard from '@/pages/_staffs/StaffDashboard';
import Home from '@/pages/_students/Home';

const router = createBrowserRouter([
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
  // Admin routes
  {
    path: ROUTES.ADMIN,
    element: <DashboardLayout role={ROLES.ADMIN} />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: '1',
        element: <div>Admin 1</div>,
      },
      {
        path: '2',
        element: <div>Admin 2</div>,
      },
    ],
  },
  {
    path: ROUTES.STAFF,
    element: <DashboardLayout role={ROLES.STAFF} />,
    children: [
      {
        index: true,
        element: <StaffDashboard />,
      },
      {
        path: '1',
        element: <div>Staff 1</div>,
      },
      {
        path: '2',
        element: <div>Staff 2</div>,
      },
    ],
  },
  {
    path: ROUTES.HOME,
    element: <StudentLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
