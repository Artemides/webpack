import React from "react";
import '../styles/not-found.scss'
export const NotFound = () => {
  return (
    <article className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-circle"></div>
        <p>Not Found</p>
        <p>
          <small>Please try i a few momments</small>
        </p>
      </div>
    </article>
  );
};
