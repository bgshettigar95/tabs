import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <section>
      {duties.map((duty) => {
        return (
          <article className="job-desc" key={uuidv4()}>
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Duties;
