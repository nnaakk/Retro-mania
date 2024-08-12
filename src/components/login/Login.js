import logi from './Login.module.css'
import { useContext } from "react";


import { useForm } from "../../hooks/useForm"
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
       
    }, onLoginSubmit);

    return(

<section className={logi.body} >
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
      onChange={changeHandler}
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
      onChange={changeHandler}
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
)
}