import { useAuth } from '@/hooks/useAuth';
import { redirectByRole } from '@/utils/guards';
import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

type GuestOnlyRouteProps = PropsWithChildren & {};

export default function GuestOnlyRoute({ children }: GuestOnlyRouteProps) {
  const { isLoggedIn, currentUser } = useAuth();

  return isLoggedIn && currentUser ? <Navigate to={redirectByRole(currentUser)} /> : children;
}
