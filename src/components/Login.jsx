import styles from './Login.module.css'
import { useState } from 'react';

function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function login(){
    if(password.length < 8){
      alert('Enter atleast 8 character long  password')
    }else if(email.length === 0 && password.length === 0){
      alert('Enter email and password then try again')
    }else {
      alert('you are sucessfully login')
    }
  }
    return  <div className={styles.container}>
              <img src='/logo.png' className={styles.logo}/>
              <h3 className={styles.brandName}>DashBoard Ui Kit</h3>
              <h2 className={styles.title}>Log In to Dashboard Kit</h2>
              <div>
                <h3 className={styles.userGuide}>Enter your email and password below</h3>
                
                <label className={styles.label} onChange={(e) => setEmail(e.target.value)} value={email} >
                  Email
                </label>
                
                <input type="text" className={styles.inputEmail} placeholder='Enter Your Email'/>
              </div>
              <div>
                
              <label className={styles.label}>
                  Password
                </label>
                
                <input type="password" className={styles.inputPassword } onChange={(e) => setPassword(e.target.value)} value={password} placeholder={'Enter your password'}/>
              </div>
              <p className={styles.forget}>forgot Password!</p>
              <div className={styles.loginBtn} onClick={login}>Login</div>

              <p className={styles.createAccount}><span>don't have an account? </span><span className={styles.signup}>Sign up now</span></p>
            </div>
}

export default Login;