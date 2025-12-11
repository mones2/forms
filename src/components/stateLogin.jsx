import { useState } from "react";
import Input from "./inpust.jsx";
import { isEmail,isNotEmpty, hasMinLength, isEqualsToOtherValue } from "../util/validation.js";
export default function Login() {
  const [entereValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  
  const [didEdit,setDidEdit] = useState({
    email:false,
    password:false
  });
  const emailIsInvalid = didEdit.email && !entereValues.email.includes('@') 
  const passwrodIsInvalid = didEdit.password && !entereValues.password.trim . length < 6 ; 
  function handleSubmit(event) {
    event.preventDefault();
    console.log( entereValues);
  }

  function handleInputBlur(identifier){
    setDidEdit((prevState) =>({
      ...prevState,
      [identifier]: true
    }));
    
  }


  function handleInputChange(identifier, event)
  {
    setEnteredValues(prevalues => ({
      ...prevalues,
      [identifier]: event.target.value
    }));
    setDidEdit((prevState) =>({
      ...prevState,
      [identifier]:false,
    }));
  }



  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">

        <Input label = "email" id="email" type = "email" name="email" 
         onBlur={() =>handleInputBlur('email')} 
          onChange={(event) => handleInputChange('email',event)} 
          value={entereValues.email}
          error={emailIsInvalid}
          />
       
        <Input label = "password" id="password" type = "password" name="password" 
          onChange={(event) =>('password',event)} 
           onBlur={() =>handleInputBlur('password')}  
           value={entereValues.password}
           error={passwrodIsInvalid}
          />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
