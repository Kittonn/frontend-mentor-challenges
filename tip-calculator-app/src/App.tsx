import React, { useEffect } from "react";
import { ReactComponent as Logo } from "./images/logo.svg";

function App() {
  let tip_percent: number = 0.05;
  let bill: number = 0;
  let people: number = 1;
  let total: number = 0;
  let tip: number = 0;
  return (
    <div className="min-h-screen bg-lightgrayish flex flex-col justify-center items-center">
      <div className="mb-12">
        <Logo />
      </div>
      <div className="bg-white flex flex-row p-8 rounded-2xl">
        <div className="mr-8">
          <div>
            <h1 className="text-grayish">Bill</h1>
            <input
              type="number"
              onChange={(e) => {
                bill = Number(e.target.value);
                tip = (bill * tip_percent) / people;
                total = bill / people + tip;
                
              }}
              placeholder="0"
              className="bg-verylightgrayish w-full text-xl border-2 border-white py-2 px-4 rounded-lg"
            />
          </div>
          <div className="my-16">
            <h1 className="text-grayish">Select Tip %</h1>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => (tip_percent = 0.05)}
                className="bg-darkcyan w-[120px] rounded-md text-white py-2 px-4 text-2xl"
              >
                5%
              </button>
              <button
                onClick={() => (tip_percent = 0.1)}
                className="bg-darkcyan w-[120px] rounded-md text-white py-2 px-4 text-2xl"
              >
                10%
              </button>
              <button
                onClick={() => (tip_percent = 0.15)}
                className="bg-darkcyan w-[120px] rounded-md text-white py-2 px-4 text-2xl"
              >
                15%
              </button>
              <button
                onClick={() => (tip_percent = 0.25)}
                className="bg-darkcyan w-[120px] rounded-md text-white py-2 px-4 text-2xl"
              >
                25%
              </button>
              <button
                onClick={() => (tip_percent = 0.5)}
                className="bg-darkcyan w-[120px] rounded-md text-white py-2 px-4 text-2xl"
              >
                50%
              </button>
              <input
                type="text"
                placeholder="Custom"
                onChange={(e) => (tip_percent = Number(e.target.value))}
                className="w-[120px] rounded-md text-white py-2 px-4 text-2xl bg-verylightgrayish"
              />
            </div>
          </div>
          <div>
            <h1 className="text-grayish">Number of People</h1>
            <input
              type="number"
              onChange={(e) => (people = Number(e.target.value))}
              placeholder="0"
              className="w-full bg-verylightgrayish  text-xl border-2 border-white py-2 px-4 rounded-lg"
            />
          </div>
        </div>

        <div className="bg-darkcyan w-[400px] flex flex-col justify-between p-6 rounded-2xl">
          <div>
            <div className="flex flex-row justify-between items-center">
              <div>
                <h1 className="text-white ">Tip Amount</h1>
                <p className="text-grayish">/ person</p>
              </div>
              <div className="text-5xl text-strongcyan">${tip.toFixed(2)}</div>
            </div>
            <div className="flex flex-row justify-between items-center mt-8">
              <div>
                <h1 className="text-white ">Total</h1>
                <p className="text-grayish">/ person</p>
              </div>
              <div className="text-5xl text-strongcyan">
                ${total.toFixed(2)}
              </div>
            </div>
          </div>
          <button
            onClick={() => console.log(total)}
            className="w-full bg-strongcyan py-4 rounded-xl text-darkcyan"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
