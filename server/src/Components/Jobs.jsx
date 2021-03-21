import React, { Component } from "react";
import $ from "jquery";
import Job from "./Job";
import "../Component_Styling/Jobs.css";

class Jobs extends Component {
  jobs_with_colors = [];
  colors = {
    1: "#E27D60",
    2: "#659DBD",
    3: "#E8A87C",
    4: "#C38D9E",
    5: "#41B3A3",
  };

  componentDidMount() {
    for (let i = 1; i <= this.props.jobs.length; i++) {
      this.jobs_with_colors.push({
        jobDetails: this.props.jobs[i],
        jobColor: this.colors[i % this.colors.length],
      });
    }

    $(".add-job").on("mouseover", () => {
      $(".add-job").css("background-color", "#f1f1f1");
      $(".add-job").css("box-shadow", "10px 10px 15px rgba(0, 0, 0, 0.19)");
    });

    $(".add-job").on("mouseout", () => {
      $(".add-job").css("background-color", "#ffffff");
      $(".add-job").css("box-shadow", "5px 5px 10px rgba(0, 0, 0, 0.19)");
    });

    $(".add-job").on("click", () => this.props.setaddjobtrigger(true));
  }

  render() {
    return (
      <div className="jobs-container">
        <h1 className="add-job">+</h1>
        <div className="jobs">
          {this.jobs_with_colors.map((job) => {
            return (
              <Job
                key={job.jobDetails.id}
                companyName={job.jobDetails.company_name}
                role={job.jobDetails.role}
                jobId={job.jobDetails.id}
                timeAdded={job.jobDetails.time_added}
                jobColor={job.jobColor}
                deleteJob={this.props.handleDelete}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Jobs;
