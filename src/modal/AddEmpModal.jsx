import React from 'react';
import RightArrow from '@mui/icons-material/KeyboardArrowRight';
import {
    FormControl,
    RadioGroup,
    Button,
    InputLabel,
    TextField,
    MenuItem,
    FormControlLabel,
    Radio,
    FormLabel,
    Select,
    Checkbox
} from '@mui/material';

const AddEmpModal = () => {
    const [values,
        setvalues] = React.useState({name: '', email: '', phone: '', address: ''});

    const handleChange = (event) => {
        const {value, name} = event.target;
        setvalues((prevdata) => {
            return {
                ...prevdata,
                [name]: value
            }
        });
    };

    const submitChange = (e) => {
        e.preventDefault();
    }

    return ( <> <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-uppercase" id="staticBackdropLabel">New Employee Records</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <form method="POST" onSubmit={submitChange}>
                    <div className="modal-body">
                        <TextField
                            fullWidth
                            label="Name"
                            color="secondary"
                            name="name"
                            onChange={handleChange}
                            value={values.name}/>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            color="secondary"
                            className="my-3"/>
                        <TextField
                            fullWidth
                            label="Phone"
                            type="number"
                            color="secondary"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}/>
                        <TextField
                            fullWidth
                            label="Address"
                            type="text"
                            color="secondary"
                            value={values.address}
                            onChange={handleChange}
                            name="address"
                            className="mt-3"/> {/* <FormControl component="fieldset" className="mt-3">
                        <FormLabel component="legend" className="mb-0">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="male" control={< Radio />} label="Male"/>
                            <FormControlLabel value="female" control={< Radio />} label="Female"/>
                        </RadioGroup>
                    </FormControl> */}
                        {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">Domain</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Domain"
                            name="domain"
                            onChange={handleChange}
                            color="secondary"
                            fullWidth>
                            <MenuItem value={values.domain}>Frontend Developer</MenuItem>
                            <MenuItem value={20}>Backend Developer</MenuItem>
                            <MenuItem value={30}>Network And support</MenuItem>
                            <MenuItem value={40}>Project Cordinator</MenuItem>
                            <MenuItem value={50}>QA</MenuItem>
                        </Select>
                    </FormControl> */}

                        {/* <div className="form-check ps-0">
                        <Checkbox defaultChecked color="secondary" className="ps-0"/>
                        <label className="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                    </div> */}
                    </div>
                    <div className="modal-footer">
                        <Button variant="contained" type="submit" color="secondary">Submit
                            <RightArrow/>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div> </>)
}

export default AddEmpModal;