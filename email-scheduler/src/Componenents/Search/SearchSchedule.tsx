import React, { useState } from "react";
import { Search } from "@mui/icons-material";




import { InputAdornment, TextField } from "@mui/material";
interface SearchProps {
  handleSearch: (search: string) => void;
}
const SearchSchedule = ({handleSearch }:SearchProps) => {
  let [search, setSearch] = useState("");
 
  interface Schedule {
    id:number
    title: string
    description: string
    subject: string
    frequency: string
    repeat:string
    time:string

 }
  
  return (
    <TextField
      variant="outlined"
      size="small"
      
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search  />
          </InputAdornment>
        ),
      }}
     
      name="search"
      value={search}
      onChange={(e) => {
        handleSearch(e.target.value);
        let allSchedule:Schedule[]= JSON.parse(localStorage.getItem("AllSchedules") || "[]")
        const filteredSchedules= allSchedule.filter((schedule)=>schedule.id===Number.parseInt(e.target.value)||schedule.title.includes(e.target.value));
        localStorage.setItem("FilteredSchedules", JSON.stringify(filteredSchedules));
        setSearch(e.target.value);
        

      }}
    />
  );
};

export default SearchSchedule;
