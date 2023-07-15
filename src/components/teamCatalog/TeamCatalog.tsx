import { RoutePaths } from '@/consts/routes';
import { SignIn } from '@/pages/signIn/SignIn';
import { SignUp } from '@/pages/signUp/SignUp';
import { UserCards } from '@/pages/userCards/UserCards';
import { UserInfo } from '@/pages/userInfo/UserInfo';
import { Navigate, Route, Routes } from 'react-router-dom';

export function TeamCatalog() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={RoutePaths.INDEX} />} />
      <Route path={RoutePaths.INDEX} element={<UserCards />} />
      <Route path={RoutePaths.SIGNIN} element={<SignIn />} />
      <Route path={RoutePaths.SIGNUP} element={<SignUp />} />
      <Route path={RoutePaths.USER_INFO + '/:idParam'} element={<UserInfo />} />
    </Routes>
  );
}
