import React, { useState } from "react";
import Headings from "./Components/Headings";
import Jobs from "./Components/Jobs";
import AddJobForm from "./Components/AddJobForm";
import Axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);
  const [jobsCount, setJobsCount] = useState(0);
  const [addjobtrigger, setaddjobtrigger] = useState(false);
  const endPoint = "https://wishlist-mysql-server.herokuapp.com/"; // production DB endPoint
  // const endPoint = "http://localhost:3305/"; // development DB endPoint

  const deleteJobFromDB = (jobId) => {
    Axios.delete(endPoint + jobId);
    window.location.reload();
  };

  const addJobToDB = (form) => {
    Axios.post(endPoint, form);
    window.location.reload();
  };

  return (
    <div
      style={{
        width: "30vw",
        height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {addjobtrigger === true ? (
        <AddJobForm
          setaddjobtrigger={setaddjobtrigger}
          addJobToDB={addJobToDB}
          jobs={jobs}
        />
      ) : (
        ""
      )}
      <Headings count={jobsCount} />
      <Jobs
        setaddjobtrigger={setaddjobtrigger}
        deleteJobFromDB={deleteJobFromDB}
        setJobs={setJobs}
        setJobsCount={setJobsCount}
      />
    </div>
  );
}

export default App;
