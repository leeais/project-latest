import useAuthStore from '@/store/auth.store';

export const useAuth = () => {
  const { user: currentUser, isAuthenticated: isLoggedIn, login, logout } = useAuthStore();
  return { currentUser, isLoggedIn, login, logout };
};
