import { useAppSelector } from '@/hooks/reduxHooks';
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { RoutePaths } from '@/consts/routes';
import { selectorIsLogged } from '@/store/selectors/usersSelectors';

export default function UnAuthGuard() {
  const isLogged = useAppSelector(selectorIsLogged);
  const [searchParams] = useSearchParams();

  if (!isLogged) {
    return <Outlet />;
  }

  return <Navigate to={searchParams.get('from') ?? RoutePaths.INDEX} />;
}
