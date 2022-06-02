import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';

const EmpTable = () => {
    return (
<Box className="container">
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
    
    <Pagination count={3} variant="outlined" color="secondary" className='mt-3' />
 
 </Box>
    )
}

export default EmpTable;