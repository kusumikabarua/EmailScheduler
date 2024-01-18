
import ScheduleTable from '../Table/ScheduleTable';
import SearchSchedule from '../Search/SearchSchedule';
import Schedule from '../Modal/Schedule';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { useState } from 'react';


const Main=()=>{
    const [search,setSearch]= useState("");
   
    return (
        <Box sx={{padding:5}}>
          <br/>
          <Stack direction="row" justifyContent="space-between">
          <SearchSchedule handleSearch={setSearch}/><Schedule />
          </Stack>
          <br/>
          <br/>
           <ScheduleTable searchSchedule={search} />
          
        </Box>
      );
}
export default Main