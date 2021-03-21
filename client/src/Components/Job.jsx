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

  const sqlToJsDate = (dateStr) => {
    let sqlDateLis = dateStr.substring(0, dateStr.length - 1).split("T");
    let sqlDate = sqlDateLis[0] + " " + sqlDateLis[1];
    let sqlDateArr1 = sqlDate.split("-");
    let sYear = sqlDateArr1[0];
    let sMonth = (Number(sqlDateArr1[1]) - 1).toString();
    let sqlDateArr2 = sqlDateArr1[2].split(" ");
    let sDay = sqlDateArr2[0];
    let sqlDateArr3 = sqlDateArr2[1].split(":");
    let sHour = sqlDateArr3[0];
    let sMinute = sqlDateArr3[1];
    let sqlDateArr4 = sqlDateArr3[2].split(".");
    let sSecond = sqlDateArr4[0];
    let sMillisecond = sqlDateArr4[1];
    return new Date(sYear, sMonth, sDay, sHour, sMinute, sSecond, sMillisecond);
  };

  let time_job_was_added = sqlToJsDate(timeAdded);
  let timeAddedAgo = Math.round((time_job_was_added - new Date()) / 1000 / 60);

  useEffect(() => {
    $(`#job-${jobId}`).css("background-color", colors[jobId % 5]);

    $(`#job-${jobId}`).on("mouseover", () => {
      $(`#delete-button-${jobId}`).css("color", "black");
    });

    $(`#job-${jobId}`).on("mouseout", () => {
      $(`#delete-button-${jobId}`)
        .css("color", "transparent")
        .css("background-color", "transparent");
    });

    $(`#delete-button-${jobId}`).on("mouseover", () => {
      $(`#delete-button-${jobId}`)
        .css("color", "red")
        .css("background-color", "white");
    });

    $(`#delete-button-${jobId}`).on("mouseout", () => {
      $(`#delete-button-${jobId}`)
        .css("color", "black")
        .css("background-color", "transparent");
    });
  });

  return (
    <div className="job-and-icon" id={`job-${jobId}`}>
      <div className="icon-container">
        <i className="fa fa-briefcase fa-fw fa-2x" style={{ color: "white" }} />
      </div>
      <div className="job-container">
        <div className="delete-button-container">
          <div
            className="fa fa-trash-o fa-fw fa-2x"
            id={`delete-button-${jobId}`}
            onClick={() => deleteJob(jobId)}
            style={{
              cursor: "pointer",
              color: "transparent",
              backgroundColor: "transparent",
              borderRadius: "50%",
              padding: "0.1em",
              marginRight: "0.1em",
              marginTop: "0.1em",
            }}
          ></div>
        </div>
        <div className="details-container">
          <h1 className="company">{companyName}</h1>
          <h1 className="role">{role}</h1>
        </div>
        <div className="extra-details">
          <h1 className="time-added">
            {timeAddedAgo > 60
              ? timeAddedAgo > 1440
                ? "Added more than a day ago"
                : "Added more than an hour ago"
              : timeAddedAgo <= 1
              ? "Added less than a minute ago"
              : "Added " + timeAddedAgo + " minutes ago"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Job;
