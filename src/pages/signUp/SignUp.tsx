import { useEffect, useState } from 'react';
import { useSignupFormik } from './hooks/useSignupFormik';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '@/consts/routes';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { signup } from '@/store/thunk/usersThunk';
import { selectorIsLogged } from '@/store/selectors/usersSelectors';
import { setIsLogged } from '@/store/slices/usersSlice';

export function SignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(selectorIsLogged);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = async (values: any) => {
    dispatch(
      signup({
        email: values.email,
        password: values.password,
      }),
    );
  };

  useEffect(() => {
    if (isLogged) {
      navigate(RoutePaths.INDEX);
      dispatch(setIsLogged(false));
    }
  }, [isLogged]);

  const formik = useSignupFormik({ onSubmit: handleSubmit });

  return (
    <div className="signUpWrapper">
      <form className="signUpForm" onSubmit={formik.handleSubmit}>
        <h3>Регистрация</h3>

        <div>
          <div className="generalInputName">Имя</div>

          <input
            className="generalInput"
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && Boolean(formik.errors.firstName) ? (
            <div className="inputErrorText">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div>
          <div className="generalInputName">Электронная почта</div>

          <input
            className="generalInput"
            type="email"
            name="email"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className="inputErrorText">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <div className="generalInputName">Пароль</div>

          <input
            className="generalInput"
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <span
            className="iconButton"
            role="button"
            tabIndex={0}
            onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img className="icon" alt="eyeOpened" src="/eyeOpened.png" />
            ) : (
              <img className="icon" alt="eyeClosed" src="/eyeClosed.svg" />
            )}
          </span>

          {formik.touched.password && Boolean(formik.errors.password) ? (
            <div className="inputErrorText">{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <div className="generalInputName">Подтвердите пароль</div>

          <input
            className="generalInput"
            type={showPassword ? 'text' : 'password'}
            name="passwordAgain"
            required
            value={formik.values.passwordAgain}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <span
            className="iconButton"
            role="button"
            tabIndex={0}
            onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img className="icon" alt="eyeOpened" src="/eyeOpened.png" />
            ) : (
              <img className="icon" alt="eyeClosed" src="/eyeClosed.svg" />
            )}
          </span>

          {formik.touched.passwordAgain &&
          Boolean(formik.errors.passwordAgain) ? (
            <div className="inputErrorText">{formik.errors.passwordAgain}</div>
          ) : null}
        </div>

        <button className="loginButton" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
