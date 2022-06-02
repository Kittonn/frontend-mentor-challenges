import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectData } from "../Store/selector";
import { useSelector } from "react-redux";
const SingleProject = () => {
  let { id } = useParams();
  let data = useSelector(selectData).filter((item) => item.id === Number(id));

  return (
    <div>
      <Link to="/">back</Link>
      <div>
        {data.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
      <iframe src="https://recipe-page-kittonn.netlify.app/" ></iframe>
    </div>
  );
};

export default SingleProject;
