import { useEffect, useState } from 'react';
import { IFormValue, useSignupFormik } from './hooks/useSignupFormik';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '@/consts/routes';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { signup } from '@/store/thunk/usersThunk';
import { selectorIsLogged } from '@/store/selectors/usersSelectors';
import { setIsLogged } from '@/store/slices/usersSlice';
import { ISignupRequestDto } from '@/types/ISignupRequestDto';
import classes from './signUp.module.css';

export function SignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(selectorIsLogged);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = async (values: ISignupRequestDto) => {
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

  const setInputClass = (value: keyof IFormValue): string => {
    return `${classes.generalInput} ${
      formik.touched[value] && formik.errors[value]
        ? classes.generalInputError
        : ''
    }`;
  };

  const error = (value: keyof IFormValue): JSX.Element | null => {
    return Boolean(formik.touched[value]) && Boolean(formik.errors[value]) ? (
      <div className={classes.inputErrorText}>{formik.errors[value]}</div>
    ) : null;
  };

  return (
    <div className={classes.signUpWrapper}>
      <form className={classes.signUpForm} onSubmit={formik.handleSubmit}>
        <h3>Регистрация</h3>

        <div>
          <div className={classes.generalInputName}>Имя</div>

          <input
            className={setInputClass('firstName')}
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {error('firstName')}
        </div>

        <div>
          <div className={classes.generalInputName}>Электронная почта</div>

          <input
            className={setInputClass('email')}
            type="email"
            name="email"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {error('email')}
        </div>

        <div>
          <div className={classes.generalInputName}>Пароль</div>

          <input
            className={setInputClass('password')}
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <span
            className={classes.iconButton}
            role="button"
            tabIndex={0}
            onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img className="icon" alt="eyeOpened" src="/eyeOpened.png" />
            ) : (
              <img className="icon" alt="eyeClosed" src="/eyeClosed.svg" />
            )}
          </span>

          {error('password')}
        </div>

        <div>
          <div className={classes.generalInputName}>Подтвердите пароль</div>

          <input
            className={setInputClass('passwordAgain')}
            type={showPassword ? 'text' : 'password'}
            name="passwordAgain"
            required
            value={formik.values.passwordAgain}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <span
            className={classes.iconButton}
            role="button"
            tabIndex={0}
            onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img className="icon" alt="eyeOpened" src="/eyeOpened.png" />
            ) : (
              <img className="icon" alt="eyeClosed" src="/eyeClosed.svg" />
            )}
          </span>

          {error('passwordAgain')}
        </div>

        <button className="loginButton" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
