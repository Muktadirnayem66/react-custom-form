import React from 'react';
import useForm from '../../hooks/useForm';
const init = {
    text:"",
    checked:false,
    group:false,
    priority:"medium",
    file:null,
}


const Task = () => {

    const {formState, handleChange, handleSubmit} = useForm({init, validate:true})

    const submitCB = ({values})=>{
        console.log(values);
    }

    return (
        <div>
            <h2>Task</h2>
            <form onSubmit={(e)=>handleSubmit(e, submitCB)}>
                <input type="checkbox"
                 name='checked'
                 checked={formState.checked.value} 
                 onChange={handleChange}/>

                <input type="text" 
                name='text'
                value={formState.text.value}
                onChange={handleChange}/>
                <select name='group' value={formState.group.value} onChange={handleChange}>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                   
                </select>
                <input 
                 type="radio"
                  name='priority'
                   value='low'
                    onChange={handleChange} />
                     Low

                     <input 
                 type="radio"
                  name='priority'
                   value='medium'
                    onChange={handleChange} />
                     Medium

                     <input 
                 type="radio"
                  name='priority'
                   value='High'
                    onChange={handleChange} />
                     High

                    <input type="file" name='file' value={formState.file.value} onChange={handleChange} />
                <button>Submit</button>
            </form>
            
        </div>
    );
};

export default Task;