
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const AddEmail = () => {
    return(
     
        <Button sx={{ color:grey[50] , backgroundColor:grey[900] }} variant="contained"><AddCircleOutlineIcon/>Add</Button>
    )
}
export default AddEmail;