import React, { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    FormControl,
    RadioGroup,
    TextField,
    FormControlLabel,
    Radio,
    FormLabel
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import RightArrow from '@mui/icons-material/KeyboardArrowRight';
const Header = () => {
    const [domain,
        setdomain] = React.useState('');

    const handleChange = (event) => {
        setdomain(event.target.value);
    };
    const [inputval, setnewinputval] = useState('');
    const [newitem, setnewitem] = useState([]);
    const submitTodoForm = (e) =>{
        e.preventDefault();
        setnewitem((prevdata)=>{
            return [...prevdata , inputval];
        });
    }
   

    const todovalue = (event) =>{
        setnewinputval(event.target.value);
       
    }

    return ( <> <header className="container">
        <a href="">Employee Sheet</a>
        <div class="header-btn">
                <Button
                    variant="contained"
                    color="secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#todomodal">
                Employee Todo</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    data-bs-toggle="modal"
                    className="ms-3"
                    data-bs-target="#staticBackdrop">
                    <PersonAddIcon className="me-1"/>
                ADD NEW</Button>
        </div>
    </header> 
    <div class = "modal fade" id = "staticBackdrop" data-bs-backdrop = "static" data-bs-keyboard = "false" tabindex = "-1" aria-labelledby = "staticBackdropLabel" aria-hidden = "true" > <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-uppercase" id="staticBackdropLabel">New Employee Records</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <form method="POST">
                <div class="modal-body">
                    <TextField fullWidth label="Name" color="secondary"/>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        color="secondary"
                        className="my-3"/>
                    <TextField fullWidth label="Phone" type="number" color="secondary"/>
                    <TextField
                        fullWidth
                        label="Hire Date"
                        type="date"
                        color="secondary"
                        defaultValue="2021-12-13"
                        className="mt-3"/>
                    <FormControl component="fieldset" className="mt-3">
                        <FormLabel component="legend" className="mb-0">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="male" control={< Radio />} label="Male"/>
                            <FormControlLabel value="female" control={< Radio />} label="Female"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">Domain</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={domain}
                            label="Domain"
                            onChange={handleChange}
                            color="secondary"
                            fullWidth>
                            <MenuItem value={10}>Frontend Developer</MenuItem>
                            <MenuItem value={20}>Backend Developer</MenuItem>
                            <MenuItem value={30}>Network And support</MenuItem>
                            <MenuItem value={40}>Project Cordinator</MenuItem>
                            <MenuItem value={50}>QA</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Address"
                        type="text"
                        color="secondary"
                        className="mt-3"/>
                    <div class="form-check ps-0">
                        <Checkbox defaultChecked color="secondary" className="ps-0"/>
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div class="modal-footer">
                    <Button variant="contained" color="secondary">Submit
                        <RightArrow/>
                    </Button>
                </div>
            </form>
        </div>
    </div> 
</div>

<div class = "modal fade" id = "todomodal" data-bs-backdrop = "static" data-bs-keyboard = "false" tabindex = "-1" aria-labelledby = "todomodalLabel" aria-hidden = "true" > 
<div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-uppercase" id="todomodalLabel">ADD EMPLOYEE TODO</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <form method="POST" onSubmit={submitTodoForm}>
                <div class="modal-body">
                    <TextField fullWidth label="Add New Item" color="secondary" onChange={todovalue}/>
                    <div className="list-item-wrapper">
                        <ul className="list-unstyled mt-3">
                            {
                                newitem.map( (data, index) =>{
                                    return(
                                        <>
                                            <li className='list-item d-flex justify-content-between'>
                                                <span>{data}</span>
                                                <div className="action-icon">
                                                    <a href=""><ModeEditIcon/></a>
                                                    <a href="" className="text-danger"><DeleteIcon/> </a>
                                                </div>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <Button type='submit' variant="contained" color="secondary">ADD ITEM
                        <RightArrow/>
                    </Button>
                </div>
            </form>
        </div>
    </div> 
</div>
</>)
}

export default Header;