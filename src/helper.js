import * as fs from "fs";

class Helper {
  get() {
    let jobsJson = JSON.parse(fs.readFileSync("./data/jobs.json"));
    return jobsJson;
  }

  post(form) {
    let jobsJson = JSON.parse(fs.readFileSync("./data/jobs.json"));
    // validate the form
    jobsJson.push(form);
    fs.writeFileSync("./data/jobs.json", JSON.stringify(jobsJson));
  }

  delete(formId) {
    let jobsJson = JSON.parse(fs.readFileSync("./data/jobs.json"));
    jobsJson.splice(
      jobsJson.indexOf((d) => d.jobId === formId),
      1
    );
    fs.writeFileSync("./data/jobs.json", JSON.stringify(jobsJson));
    return jobsJson;
  }
}

export default Helper;
