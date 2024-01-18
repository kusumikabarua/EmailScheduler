import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import WeekDaysButtonGroup from "../WeekDays/WeekDaysButtonGroup";
import Select, { SelectChangeEvent } from "@mui/material/Select";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Schedule() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [frequency, setFrequency] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFrequency(event.target.value as string);
  };

  const handleTimeChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };
 
  const done = () => {
    
  };
  return (
    <div>
      <Button
        sx={{ color: 'white', backgroundColor: 'black' }}
        onClick={handleOpen}
        variant="contained"
      >
        <AddCircleOutlineIcon />
        Add
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2} className="form">
            <h2>Add Email</h2>
            <TextField
              id="Title"
              title="Title"
              name="Title"
              label="Title"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="Description"
              title="Description"
              name="Description"
              label="Description"
              variant="outlined"
              multiline
              maxRows={4}
              fullWidth
            />
            <TextField
              id="Subject"
              title="Subject"
              name="Subject"
              label="Subject"
              variant="outlined"
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="frequency-label">Frequency</InputLabel>
              <Select
                labelId="frequency-label"
                id="Frequency"
                value={frequency}
                label="Frequency"
                onChange={handleChange}
              >
                <MenuItem value={"Daily"}>Daily</MenuItem>
                <MenuItem value={"Weekly"}>Weekly</MenuItem>
                <MenuItem value={"Monthly"}>Monthly</MenuItem>
              </Select>
            </FormControl>
            {frequency === "Weekly" ? <WeekDaysButtonGroup /> : ""}
            <FormControl fullWidth>
              <InputLabel id="frequency-label">Time</InputLabel>
              <Select
                labelId="frequency-label"
                id="Frequency"
                value={time}
                label="Frequency"
                onChange={handleTimeChange}
              >
                <MenuItem value={"10 AM"}>10 AM</MenuItem>
                <MenuItem value={"10 PM"}>10 PM</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ resize: "horizontal", gap: 2, px: 2, display: "flex" ,justifyContent:"flex-end" }}>
              {" "}
              <Button
                sx={{
                  color: "black",
                  backgroundColor: "lightgrey",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
                onClick={handleClose}
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                sx={{
                  color: "black",
                  backgroundColor: "lightgrey",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
                onClick={done}
                variant="contained"
              >
                Done
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
