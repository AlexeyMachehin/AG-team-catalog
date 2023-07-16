import { RoutePaths } from '@/consts/routes';
import { SignUp } from '@/pages/signUp/SignUp';
import { UserCards } from '@/pages/userCards/UserCards';
import { UserInfo } from '@/pages/userInfo/UserInfo';
import { Navigate, Route, Routes } from 'react-router-dom';
import UnAuthGuard from '../unAuthGuard/UnAuthGuard';
import AuthGuard from '../authGuard/AuthGuard';
import { useEffect } from 'react';
import { authTokenUtils } from '@/utils/authTokenUtils';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setIsLogged } from '@/store/slices/usersSlice';

export function TeamCatalog() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = authTokenUtils.isAuthenticated();

    if (token) {
      dispatch(setIsLogged(true));
    }
  }, []);

  return (
    <Routes>
      <Route path="*" element={<Navigate to={RoutePaths.INDEX} />} />

      <Route element={<UnAuthGuard />}>
        <Route path={RoutePaths.SIGNUP} element={<SignUp />} />
      </Route>

      <Route element={<AuthGuard />}>
        <Route path={RoutePaths.INDEX} element={<UserCards />} />
        <Route
          path={RoutePaths.USER_INFO + '/:idParam'}
          element={<UserInfo />}
        />
      </Route>
    </Routes>
  );
}
