import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectData } from "../Store/selector";
import { useSelector } from "react-redux";
const SingleProject = () => {
  let { id } = useParams();
  let data = useSelector(selectData).filter((item) => item.id === Number(id));

  return (
    <div className="single-project">
      <h1 className="name">{data[0]?.name}</h1>
      <div className="btn">
        <a id='demo' target="_blank" rel="noreferrer" href={data[0]?.demo}>Demo</a>
        <a id="code" target="_blank" rel="noreferrer" href={`https://github.com/Kittonn/Frontend-Mentor-Challenges/tree/master/${data[0]?.code}`}>Code</a>
      </div>
      <div className="preview">
        <iframe src={data[0]?.demo} frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default SingleProject;
