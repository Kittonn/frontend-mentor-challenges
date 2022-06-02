import React from "react";
import { useParams } from "react-router-dom";
const SingleProject = () => {
  let { id } = useParams();
  return (
    <div>
      <div>SingleProject</div>
      <div>{id}</div>
    </div>
  );
};

export default SingleProject;
