import React , {useState} from "react";
import {Button, TextField} from '@mui/material';
const Createnote = (props) =>{
    const [inputval, setinputval] = useState({
        title : '',
        desc : ''
    });

    const handleChange = (event) =>{
        
      const  {name , value} =  event.target;

      setinputval((prevdata)=>{
        return { ...prevdata , [name] : value } 
      })
    }

    const submitForm = () =>{
        props.addSubmitEvent(inputval);
        setinputval({
            title:"",
            desc: ""
        })
    }

    return(
        <>
            <form method="POST">
                <div class="modal-body">
                    <TextField fullWidth label="Title" name='title' onChange={handleChange} value={inputval.title} color="secondary"/>
                    <TextField
                        fullWidth
                        label="Description"
                        type="text"
                        color="secondary"
                        name="desc"
                        value={inputval.desc}
                        onChange={handleChange}
                        className="mt-3"/>
                </div>
                <div class="modal-footer">
                    <Button variant="contained" color="secondary" onClick={submitForm}>SAVE ME
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Createnote;