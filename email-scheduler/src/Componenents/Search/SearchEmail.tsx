import React, { useState } from "react";
import { Search } from "@mui/icons-material";




import { InputAdornment, TextField } from "@mui/material";

const SearchEmail = () => {
  let [search, setSearch] = useState();
 
 
  
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
      
      }}
    />
  );
};

export default SearchEmail;
