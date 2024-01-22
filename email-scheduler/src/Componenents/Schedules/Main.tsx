
import ScheduleTable from '../Table/ScheduleTable';
import SearchSchedule from '../Search/SearchSchedule';
import ScheduleWindow from '../Modal/Schedule';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { useState } from 'react';


const Main=()=>{
    const [search,setSearch]= useState("");
    const [newSchedule,setNewSchedule]= useState<boolean>(false);

    return (
        <Box sx={{padding:5}}>
          <br/>
          <Stack direction="row" justifyContent="space-between">
          <SearchSchedule handleSearch={setSearch}/>
   
     <ScheduleWindow editScheduleId={0} addSchedule={setNewSchedule} />
      
          </Stack>
          <br/>
          <br/>
           <ScheduleTable searchSchedule={search} newSchedule={newSchedule} addSchedule={setNewSchedule} />
          
        </Box>
      );
}
export default Main