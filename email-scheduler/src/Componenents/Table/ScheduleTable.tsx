import {useState} from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from "@mui/material/Button";

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





export default function ScheduleTable() {
  interface Schedule {
    id:number
    title: string
    description: string
    subject: string
    frequency: string
    repeat:string
    time:string

 }
  const [rows,setRows]= useState<Schedule[]>(JSON.parse(localStorage.getItem("AllEmails") || "[]"));

 const deleteSchehdule =(id:number)=>{
    const updatedSchedules= rows.filter((schedule:Schedule)=>schedule.id!==id);
    setRows(updatedSchedules);
 }
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
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.subject}</TableCell>
              {row.frequency==="Daily"?
              <TableCell>{row.frequency} at {row.time}</TableCell>:<TableCell>{row.frequency} on {row.repeat} at {row.time} </TableCell>}
              <TableCell><EditIcon />&nbsp;&nbsp;<Button onClick={()=>{deleteSchehdule(row.id)}}><DeleteOutlineIcon /></Button></TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}