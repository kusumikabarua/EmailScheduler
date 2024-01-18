import React, { useEffect } from "react";
import Main from "./Componenents/Schedules/Main"
import { Routes, Route } from "react-router-dom";
import { fetchData } from "./api/api";


function App() {

  useEffect(() => {
    getAll();
    
  }, []);
  const getAll = async () => {
    try {
      const data = await fetchData();
      localStorage.setItem("FilteredSchedules", JSON.stringify(data));
      localStorage.setItem("AllSchedules", JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };
  return (
   
      <div className="App">
      <Routes>
        <Route path="schedules" element={<Main/>} />
        
      </Routes>
    </div>
  );
}

export default App;
