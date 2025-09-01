import { type RoleEnum } from '@/config/roles';
import { useAuth } from '@/hooks/useAuth';
import NotFound from '@/pages/NotFound';
import { ROUTES } from '@/routes/utils';
import { redirectByRole } from '@/utils/guards';
import { type PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

type RolesGuardProps = PropsWithChildren & {
  hasRoles: RoleEnum[];
  showNotFoundPage?: boolean;
  redirectTo?: keyof typeof ROUTES;
};

export default function RolesGuard({
  children,
  hasRoles,
  showNotFoundPage = true,
  redirectTo,
}: RolesGuardProps) {
  const { currentUser } = useAuth();

  if (!currentUser || !currentUser.roles) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  const userRoles = currentUser?.roles;

  if (!hasRoles.some((role) => userRoles?.includes(role))) {
    if (redirectTo) return <Navigate to={redirectTo} />;
    if (showNotFoundPage) return <NotFound />;
    return <Navigate to={redirectByRole(currentUser)} />;
  }

  return children;
}
