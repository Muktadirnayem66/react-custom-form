import { useState } from "react"
import InputGroup from "../Components/shared/InputGroup"
import Button from "../Components/UI/Button/Button"
import { deepClone } from "../utils/Object-utils"
const Init = {
  title:{
    value:"",
    error:"",
    focuse:false
  },
  bio:{
    value:"",
    error:"",
    focuse:false
  },
  skills:{
    value:"",
    error:"",
    focuse:false
  }
}
function App() {
 const [state, setState] = useState({...Init})
 const [hasError, setHasError] = useState(false)

  const mapStateTwoValues = (state)=>{
    return Object.keys(state).reduce((acc,cur)=>{
      acc[cur] = state[cur].value
      return acc
    },{})

  }

  const handleChange = (e)=>{
    const {name:key, value} = e.target
    const oldState  = deepClone(state)
    const values = mapStateTwoValues(oldState)
    const {errors} = checkValidity(values)
    oldState[key].value = value
    if(oldState[key].focuse && errors[key]){
      oldState[key].error = errors[key]
    }else{
      oldState[key].error = ""
    }
    setState(oldState)

  }

  

  const handleSubmit = (e)=>{
    e.preventDefault()

    const values = mapStateTwoValues(state)    
    const {isValid, errors} = checkValidity(values)
    if(isValid){
      console.log(state);
    }else{

       const oldState = deepClone(state)
      Object.keys(errors).forEach((key)=>{
        oldState[key].error =  errors[key]
       })
       setState(oldState)
    }
  }

  const handleFocus= (e)=>{
    const {name} = e.target
    const oldState = deepClone(state)
    oldState[name].focuse = true
    setState(oldState)


  }

  const handleBlur = (e)=>{
    const key = e.target.name;
    const values = mapStateTwoValues(state)
    const {errors} =checkValidity(values)
    const oldState = deepClone(state)
    if(oldState[key].focuse && errors[key]){
      oldState[key].error = errors[key]
    }else{
      oldState[key] = ""
    }
    setState(oldState)
  }

  const checkValidity =(values)=>{
    const errors = {}
    const {title, bio, skills} = values
    if(!title){
      errors.title = "Invalid title"
    }
    if(!bio){
      errors.bio = "Invalid bio"
    }
    if(!skills){
      errors.skills = "Invalid skills"
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0
    }
  }
  return (
    <>
    <h4>This is styled components</h4>
    <form onSubmit={handleSubmit}>
      <div style={{display:"flex", flexDirection:"column", gap:"1rem" }}>
      <InputGroup value={state.title.value}
      name={"title"}
      label={"Title"}
      placeholder={"Enter your title"}
       onChange={handleChange}
       error={state.title.error}
       onFocus={handleFocus}
       onBlur={handleBlur}/>

       <InputGroup 
       value={state.bio.value}
       name={"bio"}
       label={"Bio"}
       placeholder={"Enter your bio"}
       onChange={handleChange}
       error={state.bio.error}
       onFocus={handleFocus}
       onBlur={handleBlur}/>

       <InputGroup 
       value={state.skills.value}
       name={"skills"}
       label={"Skills"}
       placeholder={"Enter your Skills"}
       onChange={handleChange}
       error={state.skills.error}
       onFocus={handleFocus}
       onBlur={handleBlur}/>

        <Button type="submit" disabled={hasError}>Submit</Button>
      </div>
       
    </form>

      
    </>
  )
}

export default App
