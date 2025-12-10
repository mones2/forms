import { useState } from "react";
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
          onBlur={() =>handleInputBlur('email')} 
          onChange={(event) => handleInputChange('email',event)} 
          value={entereValues.email}/>

          <div className="control-error">{emailIsInvalid && <p>enter email address correctly </p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
           onChange={(event) =>('password',event)} 
           onBlur={() =>handleInputBlur('password')} 
           value={entereValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
