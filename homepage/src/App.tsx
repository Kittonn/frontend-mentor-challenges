import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CardContainer from "./Components/CardContainer";
import SingleProject from "./Components/SingleProject";
import { getData } from "./Store/dataSlice";
import { appDispatch } from "./Store/selector";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch<appDispatch>()
  useEffect(()=>{
    dispatch(getData())
  },[dispatch])
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<CardContainer />} />
        <Route path="project/:id" element={<SingleProject />} />
      </Route>
    </Routes>
  );
};

export default App;

