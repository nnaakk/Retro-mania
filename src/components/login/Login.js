import logi from './Login.module.css'
import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
  }, onLoginSubmit);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Примерна логика за валидиране на паролата: минимум 6 символа
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    changeHandler(e);
    setIsEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    changeHandler(e);
    setIsPasswordValid(validatePassword(e.target.value));
  };

  return (
    <section className={logi.body}>
      <form method='post' onSubmit={onSubmit}>
        <div className={logi.container}>
          <h1>Login</h1>
          <p>Please fill in this form to enter in your account.</p>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required=""
            value={values.email}
            onChange={handleEmailChange}
            className={isEmailValid ? logi.valid : logi.invalid}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            required=""
            value={values.password}
            onChange={handlePasswordChange}
            className={isPasswordValid ? logi.valid : logi.invalid}
          />

          <hr />

          <button type="submit" className={logi.registerbtn}>
            Login
          </button>
        </div>
        <div className={logi.signin}>
          <p>
            You have not an account? <a href="/register">Sign in</a>.
          </p>
        </div>
      </form>
    </section>
  );
};
