import regi from './Register.module.css'
import { useContext } from "react";


import { useForm } from "../hooks/useForm"
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        pswRepeat: '',
    }, onRegisterSubmit);

    return(

<section className={regi.body} >
<form method='post' onSubmit={onSubmit}>
  <div className={regi.container}>
    <h1>Register</h1>
   
    <hr />
    <label htmlFor="email">
      <b>Email</b>
    </label>
    <input
    className={regi}
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
      onChange={changeHandler}
    />
    <hr />
    <p>
    
      <a href="#">Terms &amp; Privacy</a>.
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
)
}