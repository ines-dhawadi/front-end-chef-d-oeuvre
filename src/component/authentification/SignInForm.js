import React,{useState} from 'react'
import axios from 'axios'
import { SignInA } from "../redux/action/actionUser";


function SignInForm(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    // axios.post('http://localhost:5000/idhcar/user/login',{email,password})
    //   .then((res) => {
    //     console.log(res);
    //     if (res.data.errors) {
    //       emailError.innerHTML = res.data.errors.email;
    //       passwordError.innerHTML = res.data.errors.password;
    //     } else {
    //       window.location = "/chat";
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

axios.defaults.withCredentials = true
    axios({
      method: "post",
      withCredentials: true,
      url: `${process.env.REACT_APP_API_URL}idhcar/user/login`,
     //mode: "no-cors",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/chat";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return(
    <div>
       <form action="" onSubmit={handleLogin} id="sign-up-form">
    <label htmlFor="email">Email</label>
    <br />
    <input
      type="text"
      name="email"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />
    <div className="email error"></div>
    <br />
    <label htmlFor="password">Mot de passe</label>
    <br />
    <input
      type="password"
      name="password"
      id="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    />
    <div className="password error">nnnnn</div>
    <br />
    <input type="submit" value="Se connecter" />
  </form></div>
   )

 }

export default SignInForm