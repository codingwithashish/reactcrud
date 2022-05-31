import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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

  </Box>
    )
}

export default EmpTable;