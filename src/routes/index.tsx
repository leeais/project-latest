import { createBrowserRouter, RouterProvider } from 'react-router';
import { ROUTES } from '@/routes/utils';
import { ROLES } from '@/config/roles';
import { lazy, Suspense } from 'react';

// layouts
const DashboardLayout = lazy(() => import('@/components/_layout/DashboardLayout'));
const StudentLayout = lazy(() => import('@/components/_layout/StudentLayout'));

// pages
const Test = lazy(() => import('@/pages/Test'));
const ScreenLoader = lazy(() => import('@/pages/ScreenLoader'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const Login = lazy(() => import('@/pages/_auth/Login'));

const AdminDashboard = lazy(() => import('@/pages/_admin/AdminDashboard'));
const Categories = lazy(() => import('@/pages/_admin/Categories'));
const CategoriesProcedures = lazy(() => import('@/pages/_admin/CategoriesProcedures'));

const StaffDashboard = lazy(() => import('@/pages/_staffs/StaffDashboard'));

const Home = lazy(() => import('@/pages/_students/Home'));

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
        path: ROUTES.ADMIN_CATEGORIES,
        element: <Categories />,
      },
      {
        path: ROUTES.ADMIN_CATEGORIES_PROCEDURES,
        element: <CategoriesProcedures />,
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
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<ScreenLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
