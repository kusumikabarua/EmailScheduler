
import ScheduleTable from '../Table/ScheduleTable';
import SearchEmail from '../Search/SearchSchedule';
import Schedule from '../Modal/Schedule';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";


const Main=()=>{
    return (
        <Box sx={{padding:5}}>
          <br/>
          <Stack direction="row" justifyContent="space-between">
          <SearchEmail /><Schedule />
          </Stack>
          <br/>
          <br/>
           <ScheduleTable />
          
        </Box>
      );
}
export default Main