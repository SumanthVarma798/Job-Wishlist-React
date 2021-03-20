import React, { Component } from "react";
import $ from "jquery";
import Job from "./Job";
import Helper from "../helper";
import "../Component_Styling/Jobs.css";

class Jobs extends Component {
  state = {
    jobCount: 0,
    jobs: [],
    formDetails: {
      companyName: "Amazon",
      role: "Software Development Engineer (SDE1)",
      jobid: 1,
      timeAdded: new Date().getUTCMilliseconds(),
    },
  };

  componentDidMount() {
    const https_requests = new Helper();
    let jobs = https_requests.get();

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
          <Job
            companyName={this.state.formDetails.companyName}
            role={this.state.formDetails.role}
            jobId={this.state.formDetails.jobid}
            timeAdded={this.state.formDetails.timeAdded}
            deleteJob={this.props.handleDelete}
          />
          {this.state.jobs.forEach(() => (
            <Job
              companyName={this.state.formDetails.companyName}
              role={this.state.formDetails.role}
              jobId={this.state.formDetails.jobid}
              timeAdded={this.state.formDetails.timeAdded}
              deleteJob={this.props.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
