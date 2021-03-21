import React, { useState, useEffect } from "react";
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

  const handleDelete = (jobId) => {
    Axios.delete(endPoint + jobId);
    getJobs();
  };

  const addJobToDB = (form) => {
    Axios.post(endPoint, form).then(() => setJobsCount(jobsCount + 1));
  };

  const getJobs = () => {
    Axios.get(endPoint)
      .then((response) => setJobs(response.data))
      .then(() => setJobsCount(jobs.length));
  };

  useEffect(() => getJobs());

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
          getJobs={getJobs}
        />
      ) : (
        ""
      )}
      <Headings count={jobsCount} />
      <Jobs
        allJobs={jobs}
        setaddjobtrigger={setaddjobtrigger}
        handleDelete={handleDelete}
        setJobsCount={setJobsCount}
      />
    </div>
  );
}

export default App;
