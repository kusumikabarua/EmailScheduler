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
import EditIcon from "@mui/icons-material/Edit";

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

interface ScheduleData {
  id: number;
  title: string;
  description: string;
  subject: string;
  frequency: string;
  repeat: string;
  time: string;
}
interface ScheduleProps {
  addSchedule: (schedule: boolean) => void;
  editScheduleId: number;
}
export default function Schedule({
  addSchedule,
  editScheduleId,
}: ScheduleProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //const [addEditSchedule,setAddEditSchedule]=React.useState<ScheduleData>();

  const [frequency, setFrequency] = React.useState("");
  const [time, setTime] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [repeat, setRepeat] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFrequency(event.target.value as string);
  };

  const handleTimeChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };

  const done = () => {
    let allSchedules = JSON.parse(localStorage.getItem("AllSchedules") || "[]");
    if (editScheduleId === 0) {
      let maxId = allSchedules.reduce(
        (a: number, b: ScheduleData) => Math.max(a, b.id),
        0
      );
      console.log(maxId);
      let newSchedule = {
        id: maxId + 1,
        title: title,
        description: description,
        subject: subject,
        frequency: frequency,
        repeat: repeat,
        time: time,
      };
      allSchedules.push(newSchedule);
    } else {
      let editedIndex = allSchedules.findIndex(
        (schedule: ScheduleData) => schedule.id === editScheduleId
      );

      allSchedules[editedIndex].title = title;
      allSchedules[editedIndex].description = description;
      allSchedules[editedIndex].subject = subject;
      allSchedules[editedIndex].frequency = frequency;
      allSchedules[editedIndex].repeat = repeat;
      allSchedules[editedIndex].time = time;
    }

    localStorage.setItem("AllSchedules", JSON.stringify(allSchedules));
    handleClose();
    setTitle("");
    setDescription("");
    setSubject("");
    setFrequency("");
    setRepeat("");
    setTime("");
    addSchedule(true);
  };
  const populateEdit = () => {
    let allSchedules = JSON.parse(localStorage.getItem("AllSchedules") || "[]");
    let scheduleTobeEdited = allSchedules.filter(
      (schedule: ScheduleData) => schedule.id === editScheduleId
    );
    setTitle(scheduleTobeEdited[0].title);
    setDescription(scheduleTobeEdited[0].description);
    setSubject(scheduleTobeEdited[0].subject);
    setFrequency(scheduleTobeEdited[0].frequency);
    setRepeat(scheduleTobeEdited[0].repeat);
    setTime(scheduleTobeEdited[0].time);
    handleOpen();
  };
  return (
    <div>
      {editScheduleId > 0 ? (
        <Button
          onClick={() => {
            populateEdit();
          }}
        >
          <EditIcon />
        </Button>
      ) : (
        <Button
          sx={{ color: "white", backgroundColor: "black" }}
          onClick={handleOpen}
          variant="contained"
        >
          <AddCircleOutlineIcon />
          Add
        </Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2} className="form">
            <h2>Add Schedule</h2>
            <TextField
              id="Title"
              title="Title"
              name="Title"
              label="Title"
              value={title}
              variant="outlined"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              fullWidth
            />
            <TextField
              id="Description"
              title="Description"
              name="Description"
              label="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
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
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
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
            {frequency === "Weekly" ? (
              <WeekDaysButtonGroup day={repeat} setDay={setRepeat} />
            ) : (
              ""
            )}
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
            <Box
              sx={{
                resize: "horizontal",
                gap: 2,
                px: 2,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
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
