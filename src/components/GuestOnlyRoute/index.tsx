import { useAuth } from '@/features/auth';
import { ROUTES } from '@/routes/utils';
import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

type GuestOnlyRouteProps = PropsWithChildren & {};

export default function GuestOnlyRoute({ children }: GuestOnlyRouteProps) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={ROUTES.HOME} /> : children;
}
