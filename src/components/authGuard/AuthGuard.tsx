import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { createPath, Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectorIsLogged } from '@/store/selectors/usersSelectors';
import { setIsLogged } from '@/store/slices/usersSlice';
import { authTokenUtils } from '@/utils/authTokenUtils';

export default function AuthGuard() {
  const isLogged = useAppSelector(selectorIsLogged);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const token = authTokenUtils.isAuthenticated();

  useEffect(() => {
    dispatch(setIsLogged(token));
  }, [isLogged]);

  if (isLogged && token) {
    return <Outlet />;
  }

  const path = createPath({
    pathname: 'signup',
    search: new URLSearchParams({ from: location.pathname }).toString(),
  });

  return <Navigate to={path} />;
}
