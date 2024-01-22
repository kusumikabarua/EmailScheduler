
import ScheduleTable from '../Table/ScheduleTable';
import SearchSchedule from '../Search/SearchSchedule';
import ScheduleWindow from '../Modal/Schedule';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { useState } from 'react';

interface Schedule {
    id:number
    title: string
    description: string
    subject: string
    frequency: string
    repeat:string
    time:string

 }

const Main=()=>{
    const [search,setSearch]= useState("");
    const [newSchedule,setNewSchedule]= useState<boolean>(false);
    return (
        <Box sx={{padding:5}}>
          <br/>
          <Stack direction="row" justifyContent="space-between">
          <SearchSchedule handleSearch={setSearch}/><ScheduleWindow  addSchedule={setNewSchedule}/>
          </Stack>
          <br/>
          <br/>
           <ScheduleTable searchSchedule={search} newSchedule={newSchedule} addSchedule={setNewSchedule} />
          
        </Box>
      );
}
export default Main