import { useState } from "react"
import { deepClone, isObjectEmpty } from "../utils/Object-utils"


/**
 * @typedef {Object} Param
 * @property {Object} init
 * @property {(Object | boolean)} validate
 * create form useing useform usehook
 * @param {Param} param
 * @returns 
 */

const useForm = ({init, validate})=>{
   const [state, setState]=useState(MapValuesToState(init))


   const handleChange = (e)=>{
    const {name:key, value, type, checked} = e.target
    
    const oldState  = deepClone(state)
    if(type === 'checkbox'){
      oldState[key].value = checked

    }else{
      oldState[key].value = value
      
    }

      
    const {errors} = getErrors()

    if(oldState[key].touched && errors[key]){
      oldState[key].error = errors[key]
    }else{
      oldState[key].error = ""
    }
    setState(oldState)

  }


const handleFocuse=(e)=>{
  const {name} = e.target

  const oldState = deepClone(state)
  oldState[name].focused = true

  if(!oldState[name].focused){
    oldState[name].focused = true
  }
  setState(oldState)
}


const handleBlur = (e)=>{
  const key = e.target.name;

 const  {errors} = getErrors()

  const oldState = deepClone(state)
  if(oldState[key].touched && errors[key]){
    oldState[key].error = errors[key]
  }else{
    oldState[key].error = ""
  }
  oldState[key].focused = false
  setState(oldState)
}


const handleSubmit = (e, cb)=>{
  e.preventDefault()
 const {hasError, errors, values} =  getErrors()
cb({
  hasError,errors,values,
  touched:mapStateToKeys(state, 'touched'),
  focused:mapStateToKeys(state, 'focused'),
})

}

const clear = ()=>{
 const newState = MapValuesToState(init, true )
 setState(newState)
}

const getErrors = ()=>{

  let hasError = null,
   errors = null;

  const values = mapStateToKeys(state, 'value')

  if(typeof validate === 'boolean'){
    hasError = validate
    errors = mapStateToKeys(state, 'error')

  }else if( typeof validate === 'function'){
    
    const errorsFromCb = validate(values)


     hasError = !isObjectEmpty(errorsFromCb);
    errors = errorsFromCb;

  }else{
    throw new Error("Validate property must be boolean or function")
  }
  return {
    errors,
    hasError,
    values
  }
}


   return {
    formState: state,
    handleChange,
    handleBlur,
    handleFocuse,
    handleSubmit,
    clear
    
   }
}

export default useForm


//helper functions

  
const MapValuesToState=(values, shouldClear= false)=>{
    return Object.keys(values).reduce((acc,key)=>{
        acc[key]={
            value: shouldClear? "" : values[key],
            error:"",
            focused:false,
            touched:false
        }
        return acc
    },{})
}


const mapStateToKeys = (state,key)=>{
    return Object.keys(state).reduce((acc,cur)=>{
      acc[cur] = state[cur][key]
      return acc
    },{}) 
}
