import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectData } from "../Store/selector";
const CardContainer = () => {
  const data = useSelector(selectData);
  let base_link =
    "https://raw.githubusercontent.com/Kittonn/Frontend-Mentor-Challenges/master/assets/";
  let color = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2"];
  return (
    <div className="card-container">
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="img-content">
              <img src={`${base_link}${item.path}`} alt="" />
            </div>
            <div className="text-content">
              <div className="tech">
                {item.stack.map((stack_item, index) => {
                  return (
                    <p style={{ backgroundColor: color[index] }} key={index}>
                      {stack_item}
                    </p>
                  );
                })}
              </div>
              <h1><a href={`/project/${item.id}`}>{item.name}</a></h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
