import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <section className="btn-container ">
      {jobs.map((job, i) => {
        return (
          <button
            className={`job-btn ${currentItem === i ? "active-btn" : ""} `}
            key={job.id}
            onClick={() => setCurrentItem(i)}
          >
            {job.company}
          </button>
        );
      })}
    </section>
  );
};

export default BtnContainer;
