import React, { useEffect } from "react";
import $ from "jquery";
import "../Component_Styling/Job.css";

function Job({ companyName, role, jobId, timeAdded, deleteJob }) {
  const colors = {
    0: "#E27D60",
    1: "#659DBD",
    2: "#E8A87C",
    3: "#C38D9E",
    4: "#41B3A3",
  };

  let timeAddedAgo = (timeAdded - new Date().getUTCMilliseconds) / 100 / 60;

  useEffect(() => {
    $(".job-and-icon").css("background-color", colors[jobId % 5]);

    $(".job-and-icon").on("click", () => {
      $("#delete-button").css("color", "red").css("background-color", "white");
    });
  });

  return (
    <div className="job-and-icon">
      <div className="icon-container">
        <i className="fa fa-briefcase fa-fw fa-2x" style={{ color: "white" }} />
      </div>
      <div className="job-container">
        <div className="delete-button-container">
          <div
            className="fa fa-trash-o fa-fw fa-2x"
            id="delete-button"
            onClick={() => deleteJob(jobId)}
          ></div>
        </div>
        <div className="details-container">
          <h1 className="company">{companyName}</h1>
          <h1 className="role">{role}</h1>
        </div>
        <div className="extra-details">
          <h1 className="time-added">
            {timeAddedAgo > 60
              ? "Added more than an hour ago"
              : "Added " + timeAddedAgo + " minutes ago"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Job;
