import React, { Component } from "react";
import $ from "jquery";
import Job from "./Job";
import "../Component_Styling/Jobs.css";

class Jobs extends Component {
  componentDidMount() {
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
          {this.props.jobs.map((job) => {
            return (
              <Job
                key={job.id}
                companyName={job.company_name}
                role={job.role}
                jobId={job.id}
                timeAdded={job.time_added}
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
