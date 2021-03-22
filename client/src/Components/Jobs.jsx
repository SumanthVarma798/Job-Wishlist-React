import React, { Component } from "react";
import $ from "jquery";
import Job from "./Job";
import "../Component_Styling/Jobs.css";
import Axios from "axios";

class Jobs extends Component {
  state = {
    // endPoint: "https://wishlist-mysql-server.herokuapp.com/", // production DB endPoint
    endPoint: "http://localhost:3305/", // development DB endPoint
    jobs: [],
    jobs_with_colors: [],
    colors: ["#E27D60", "#659DBD", "#E8A87C", "#C38D9E", "#41B3A3"],
    colorsLength: 5,
  };

  componentDidMount() {
    Axios.get(this.state.endPoint).then((response) => {
      let jobs = response.data;
      let jobs_with_colors = [];
      for (let i = 1; i <= jobs.length; i++) {
        jobs_with_colors.push({
          jobDetails: jobs[i - 1],
          jobColor: this.state.colors[i % this.state.colorsLength],
        });
      }
      this.setState({ jobs: jobs, jobs_with_colors: jobs_with_colors });
      this.props.setJobs(this.state.jobs);
      this.props.setJobsCount(this.state.jobs_with_colors.length);
    });

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
          {this.state.jobs_with_colors.map((job) => (
            <Job
              key={job.jobDetails.id}
              companyName={job.jobDetails.company_name}
              role={job.jobDetails.role}
              jobId={job.jobDetails.id}
              timeAdded={job.jobDetails.time_added}
              jobColor={job.jobColor}
              deleteJobFromDB={this.props.deleteJobFromDB}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
