import { useState } from "react"
import InputGroup from "../Components/shared/InputGroup"
import Button from "../Components/UI/Button/Button"
const Init = {
  title:"",
  bio:"",
  skills:""
}
function App() {
  const [values, setValues] = useState({...Init})
  const [errors, setErrors] = useState({...Init})
  const [focuses, setFocuses] = useState({
    title:false,
    bio:false,
    skills:false
  })

  const handleChange =(e)=>{
    setValues((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))

    const key = e.target.name;
    const {errors} =checkValidity(values)
    if(!errors[key]){
      setErrors((prev)=>({
        ...prev,
        [key]:""
      }))
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const {errors, isValid} = checkValidity(values)
    if(isValid){
      console.log(isValid);
      setErrors({...errors})
    }
    else{
      setErrors({...errors})
    }
    console.log(values);
    setValues({...Init})
  }

  const handleFocus= (e)=>{
    setFocuses((prev)=>({
      ...prev,
      [e.target.name]:true
    }

    ))
  }

  const handleBlur = (e)=>{
    const key = e.target.name;
    const {errors} =checkValidity(values)
    if(errors[key] && focuses[key] === true){
      setErrors((prev)=>({
        ...prev,
        [key]:errors[key]
      }))
    }else{
      setErrors((prev)=>({
        ...prev,
        [key]:""
      }))
    }
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
      <InputGroup value={values.title}
      name={"title"}
      label={"Title"}
      placeholder={"Enter your title"}
       onChange={handleChange}
       error={errors.title}
       onFocus={handleFocus}
       onBlur={handleBlur}/>

       <InputGroup 
       value={values.bio}
       name={"bio"}
       label={"Bio"}
       placeholder={"Enter your bio"}
       onChange={handleChange}
       error={errors.bio}
       onFocus={handleFocus}
       onBlur={handleBlur}/>

       <InputGroup 
       value={values.skills}
       name={"skills"}
       label={"Skills"}
       placeholder={"Enter your Skills"}
       onChange={handleChange}
       error={errors.skills}
       onFocus={handleFocus}
       onBlur={handleBlur}/>

        <Button type="submit">Submit</Button>
      </div>
       
    </form>

      
    </>
  )
}

export default App
