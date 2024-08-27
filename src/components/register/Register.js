import regi from './Register.module.css';
import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    pswRepeat: '',
  }, onRegisterSubmit);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    changeHandler(e);
    setIsEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    changeHandler(e);
    setIsPasswordValid(validatePassword(e.target.value));
    setIsPasswordMatch(e.target.value === values.pswRepeat);
  };

  const handlePswRepeatChange = (e) => {
    changeHandler(e);
    setIsPasswordMatch(e.target.value === values.password);
  };

  return (
    <section className={regi.body}>
      <form method='post' onSubmit={onSubmit}>
        <div className={regi.container}>
          <h1>Register</h1>
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
            className={isEmailValid ? regi.valid : regi.invalid}
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
            className={isPasswordValid ? regi.valid : regi.invalid}
          />
          <label htmlFor="pswRepeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="pswRepeat"
            id="pswRepeat"
            required=""
            value={values.pswRepeat}
            onChange={handlePswRepeatChange}
            className={isPasswordMatch ? regi.valid : regi.invalid}
          />
          <hr />
          <p>
            By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.
          </p>
          <button type="submit" className={regi.registerbtn}>
            Register
          </button>
        </div>
        <div className={regi.signin}>
          <p>
            Already have an account? <a href="/Login">Sign in</a>.
          </p>
        </div>
      </form>
    </section>
  );
};
