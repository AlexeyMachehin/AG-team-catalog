import { createPath, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/hooks/reduxHooks';
import { selectorIsLogged } from '@/store/selectors/usersSelectors';

export default function AuthGuard() {
  const isLogged = useAppSelector(selectorIsLogged);
  const location = useLocation();

  if (isLogged) {
    return <Outlet />;
  }

  const path = createPath({
    pathname: 'signup',
    search: new URLSearchParams({ from: location.pathname }).toString(),
  });

  return <Navigate to={path} />;
}
