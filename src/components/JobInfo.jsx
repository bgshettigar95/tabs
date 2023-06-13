import React from "react";
import Duties from "./Duties";

const JobInfo = ({ job }) => {
  const { id, company, dates, duties, title, order } = job;
  return (
    <section>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </section>
  );
};

export default JobInfo;
