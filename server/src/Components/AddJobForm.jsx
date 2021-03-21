import React, { Component } from "react";
import "../Component_Styling/AddJobForm.css";

class AddJobForm extends Component {
  constructor(props) {
    super(props);
    this.formDetails = {
      company: "",
      role: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm = (form) => {
    if (form.company !== null && form.company !== "") {
      if (form.role !== null && form.role !== "") {
        this.props.jobs.forEach((job) => {
          if (job.company_name === form.company && job.role === form.role) {
            alert("The job already exists !!!");
            return false;
          }
        });
        return true;
      } else {
        alert("Role cannot be empty");
        return false;
      }
    } else {
      alert("Company name cannot be empty");
      return false;
    }
  };

  handleSubmit = (event) => {
    if (this.validateForm(this.formDetails)) {
      this.props.addJobToDB(this.formDetails);
    }
    this.props.setaddjobtrigger(false);
    this.props.getJobs();
    event.preventDefault();
  };

  handleChange = (event) => {
    if (event.target.id === "company-name") {
      this.formDetails.company = event.target.value;
    } else if (event.target.id === "role") {
      this.formDetails.role = event.target.value;
    }
  };

  render() {
    return (
      <div className="form-container">
        <div className="blur-screen"></div>
        <div className="form">
          <h1>Add Job</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                id="company-name"
                type="text"
                placeholder="Company Name"
                onChange={this.handleChange}
              />
              <input
                id="role"
                type="text"
                placeholder="Role"
                onChange={this.handleChange}
              />
            </label>
            <input id="add-job-continue" type="submit" value="Continue" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddJobForm;
