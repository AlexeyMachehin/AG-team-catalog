import { RoutePaths } from '@/consts/routes';
import { SignUp } from '@/pages/signUp/SignUp';
import { UserCards } from '@/pages/userCards/UserCards';
import { UserInfo } from '@/pages/userInfo/UserInfo';
import { Navigate, Route, Routes } from 'react-router-dom';
import UnAuthGuard from '../unAuthGuard/UnAuthGuard';
import AuthGuard from '../authGuard/AuthGuard';

export function TeamCatalog() {
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
