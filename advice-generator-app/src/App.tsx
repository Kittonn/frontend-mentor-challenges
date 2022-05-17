import React, { useEffect } from "react";
import { ReactComponent as Random } from "./images/icon-dice.svg";
import { ReactComponent as Divider } from "./images/pattern-divider-desktop.svg";
import {ReactComponent as DividerMobile } from "./images/pattern-divider-mobile.svg"
import { useSelector, useDispatch } from "react-redux";
import { appDispatch, selectQuote } from "./Store/selector";
import { getRandomQuote } from "./Store/quote";
function App() {
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    dispatch(getRandomQuote());
  }, [dispatch]);
  const data = useSelector(selectQuote);

  return (
    <div className="min-h-screen overflow-hidden font-[Manrope] bg-[#1f2632] flex flex-col justify-center items-center">
      <div className="bg-[#323a49] rounded-2xl px-12 py-10 text-center w-full max-w-[391px] md:max-w-[540px]">
        <p className="text-[#52ffa8] text-sm tracking-[0.2em]">
          ADVICE #{data?.slip?.id}
        </p>
        <h1 className="text-[#cee3e9] text-[28px] mt-5 mb-10">
          "{data?.slip?.advice}"
        </h1>
        <div className="mb-10">
          <Divider className="invisible md:visible" />
          <DividerMobile className="visible md:invisible" />
        </div>
      </div>
      <div
        onClick={() => dispatch(getRandomQuote())}
        className="bg-[#52ffa8] cursor-pointer p-5 mt-[-32px] hover:shadow-[#52ffa8] hover:neon rounded-full"
      >
        <Random />
      </div>
    </div>
  );
}

export default App;
