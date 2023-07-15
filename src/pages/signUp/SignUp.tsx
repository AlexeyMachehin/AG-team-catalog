import { useState } from 'react';
import classes from './signUp.module.css';
import { NavLink } from 'react-router-dom';
import { RoutePaths } from '@/consts/routes';

export function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Добавьте здесь код для обработки отправки формы
    console.log(formData);
  };

  return (
    <div className="signUpWrapper">
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h3>Регистрация</h3>

        <div>
          <div className="generalInputName">Имя</div>

          <input
            className="generalInput"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <div className="inputErrorText">Ошибка</div>
        </div>

        <div>
          <div className="generalInputName">Электронная почта</div>

          <input
            className="generalInput"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="inputErrorText">Ошибка</div>
        </div>

        <div>
          <div className="generalInputName">Пароль</div>

          <input
            className="generalInput"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <span
            className="iconButton"
            role="button"
            tabIndex={0}
            onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img
                className="icon"
                alt="eyeOpened"
                src="/eyeOpened.png"
              />
            ) : (
              <img
                className="icon"
                alt="eyeClosed"
                src="/eyeClosed.svg"
              />
            )}
          </span>

          <div className="inputErrorText">Ошибка</div>
        </div>

        <div>
          <div className="generalInputName">Подтвердите пароль</div>

          <input
            className="generalInput"
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <span
            className="iconButton"
            role="button"
            tabIndex={0}
            onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img
                className="icon"
                alt="eyeOpened"
                src="/eyeOpened.png"
              />
            ) : (
              <img
                className="icon"
                alt="eyeClosed"
                src="/eyeClosed.svg"
              />
            )}
          </span>

          <div className="inputErrorText">Ошибка</div>
        </div>

        <button className="loginButton" type="submit">
          Зарегистрироваться
        </button>

        <NavLink className="loginLink" to={RoutePaths.SIGNIN}>
          Вход
        </NavLink>
      </form>
    </div>
  );
}
