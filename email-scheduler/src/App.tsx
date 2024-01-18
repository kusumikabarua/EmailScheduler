import React, { useEffect, useState } from "react";

import './App.css';
import EmailTable from './Componenents/EmailTable/EmailTable';
import SearchEmail from './Componenents/Search/SearchEmail';
import Email from './Componenents/EmailModal/Email';
import Stack from '@mui/material/Stack';
import { fetchData } from "./api/api";


function App() {

  useEffect(() => {
    getAllEmail();
    
  }, []);
  const getAllEmail = async () => {
    try {
      const data = await fetchData();
      localStorage.setItem("FilteredEmails", JSON.stringify(data));
      localStorage.setItem("AllEmails", JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <br/>
      <Stack direction="row" justifyContent="space-between">
      <SearchEmail /><Email />
      </Stack>
      <br/>
      <br/>
       <EmailTable />
      
    </div>
  );
}

export default App;
