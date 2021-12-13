import React from 'react';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl, RadioGroup, TextField, FormControlLabel, Radio, FormLabel} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import RightArrow from '@mui/icons-material/KeyboardArrowRight';

function App() {
  const [domain, setdomain] = React.useState('');

  const handleChange = (event) => {
    setdomain(event.target.value);
  };

  return (
    <>
    <header className="container">
        <a href="">Employee Sheet</a>
        <Button variant="contained" color="secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <PersonAddIcon className="me-1"/> ADD NEW</Button>
    </header>

  <div className="container">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead className="bg-light mt-5">
      <TableRow>
        <TableCell>Emp. Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableCell>1</TableCell>
      <TableCell>Ashish</TableCell>
      <TableCell>kohliashish@gmail.com</TableCell>
      <TableCell>1234456587</TableCell>
      <TableCell>Rishikesh</TableCell>
      <TableCell>
        <a href="/edit"> <ModeEditIcon/> </a>
        <a href="/delete" className="text-danger"> <DeleteIcon/> </a>
      </TableCell>
    </TableBody>
  </Table>

    <div className="pagination-wrap d-flex justify-content-between py-3">
        <span>Showing 5 out of 25 entries</span>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
    </div>

  </div>

 {/* modal Add new user*/}
{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-uppercase" id="staticBackdropLabel">New Employee Records</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form method="POST">
        <div class="modal-body">
          <TextField
            fullWidth
            label="Name"
            color="secondary"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            color="secondary"
            className="my-3"
          />
          <TextField
            fullWidth
            label="Phone"
            type="number"
            color="secondary"
          />
          <TextField
            fullWidth
            label="Hire Date"
            type="date"
            color="secondary"
            defaultValue="2021-12-13"
            className="mt-3"
          />
          <FormControl component="fieldset" className="mt-3">
            <FormLabel component="legend" className="mb-0">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
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
              fullWidth
            >
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
            className="mt-3"
          />  
          <div class="form-check ps-0">
            <Checkbox defaultChecked color="secondary" className="ps-0"/>
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
          </div>      
        </div>
        <div class="modal-footer">
          <Button variant="contained" color="secondary">Submit <RightArrow/> </Button>
        </div>
      </form>
    </div>
  </div>
</div>
 </> 
 )}

export default App;
