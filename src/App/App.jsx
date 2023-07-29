import React from 'react';
import useForm from '../hooks/useForm';
import InputGroup from '../Components/shared/InputGroup';
import Button from '../Components/UI/Button/Button';
import Task from '../Components/Task/Task';

const init = {
     firstName:"",
     lastName:"",
     email:"",
     password:"",
 
}

const validate = (values)=>{
    const errors = {}

    if(!values.firstName){
        errors.firstName = "First name is required"
    }

    if(!values.lastName){
        errors.lastName = "Last name is required"
    }

    if(!values.email){
        errors.email = "email is required"
    }

    if(!values.password){
        errors.password = "password is required"
    }

    return errors;

}
const App = () => {
        

    const {formState: state, 
        handleBlur,
         handleChange,
          handleSubmit,
           handleFocuse,
            clear} = useForm({  init, validate})

            const cb = ({hasError, values, errors})=>{
                if(hasError){
                    alert("[ERROR]" + JSON.stringify(errors))
                }else{
                    alert("[SUCCESS]" + JSON.stringify(values))
                }

            }
    
    return (
        <div>
            <h2>My custom hooks form</h2>
            <form onSubmit={(e)=>handleSubmit(e,cb)} >
            <div style={{display:"flex", flexDirection:"column", gap:"1rem" }}>
      <InputGroup value={state.firstName.value}
      name={"firstName"}
      label={"First Name"}
      placeholder={"John"}
       onChange={handleChange}
       error={state.firstName.error}
       onFocus={handleFocuse}
       onBlur={handleBlur}/>


    <InputGroup 
    value={state.lastName.value}
      name={"lastName"}
      label={"Last Name"}
      placeholder={"Doe"}
       onChange={handleChange}
       error={state.lastName.error}
       onFocus={handleFocuse}
       onBlur={handleBlur}/>

<InputGroup value={state.email.value}
      name={"email"}
      label={"Email"}
      placeholder={"test@gamil.com"}
       onChange={handleChange}
       error={state.email.error}
       onFocus={handleFocuse}
       onBlur={handleBlur}/>


<InputGroup value={state.password.value}
      name={"password"}
      label={"Password"}
      placeholder={"*****"}
       onChange={handleChange}
       error={state.password.error}
       onFocus={handleFocuse}
       onBlur={handleBlur}/>

       <div>
        <Button type='reset' onClick={clear}> Clear</Button>
        <Button type='submit' >Submit</Button>
       </div>

           </div>
            </form>

            <hr />
             <Task/> 
        </div>
    );
};

export default App;