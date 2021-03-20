import React, { useState } from "react";
import Headings from "./Components/Headings";
import Jobs from "./Components/Jobs";
import AddJobForm from "./Components/AddJobForm";

function App() {
  const [jobsCount, setJobsCount] = useState(0);
  const [addjobtrigger, setaddjobtrigger] = useState(false);

  const handleDelete = (jobid) => {
    setJobsCount(jobsCount - 1);
  };

  const retrieveForm = (form) => {
    console.log(form);
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
          setJobsCount={setJobsCount}
          jobCount={jobsCount}
          setaddjobtrigger={setaddjobtrigger}
          retrieveForm={retrieveForm}
        />
      ) : (
        ""
      )}
      <Headings count={jobsCount} />
      <Jobs setaddjobtrigger={setaddjobtrigger} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
