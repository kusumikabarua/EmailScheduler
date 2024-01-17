import * as React from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { grey } from '@mui/material/colors';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: grey[200],
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));





export default function EmailTable() {

  interface Email {
    title: string
    description: string
    subject: string
    frequency: string
    repeat:string
    time:string

 }
  const rows :Email[]= JSON.parse(localStorage.getItem("Emails") || "[]");


// const rows = [
//   createData('Frozen yoghurt', '159', '6.0', '24'),
//   createData('Ice cream sandwich', '237', '9.0', '37'),
//   createData('Eclair', '262', '16.0',' 24'),
//   createData('Cupcake', '305', '3.7', '67'),
//   createData('Gingerbread', '356', '16.0', '49'),
// ];

  return (
    <TableContainer  sx={{ maxWidth: 1100 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell>Schedule</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.subject}</TableCell>
              {row.frequency==="Daily"?
              <TableCell>{row.frequency} at {row.time}</TableCell>:<TableCell>{row.frequency} on {row.repeat} at {row.time} </TableCell>}
              <TableCell><EditIcon />&nbsp;&nbsp;<DeleteOutlineIcon/></TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}