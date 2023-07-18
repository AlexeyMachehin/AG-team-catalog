import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import UnAuthGuard from '../unAuthGuard/UnAuthGuard';
import AuthGuard from '../authGuard/AuthGuard';
import { ScrollToTop } from '../scrollToTop/ScrollToTop';
import { RoutePaths } from '@/consts/routes';
import { SignUp } from '@/pages/signUp/SignUp';
import { Loader } from '../loader/Loader';

const UserCards = lazy(() => import('@/pages/userCards/UserCards'));
const UserInfo = lazy(() => import('@/pages/userInfo/UserInfo'));

export function TeamCatalog() {
  return (
    <ScrollToTop>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </ScrollToTop>
  );
}
