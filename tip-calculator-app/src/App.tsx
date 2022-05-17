import React from 'react';

function App() {
  return (
  <div className='min-h-screen bg-lightgrayish'>
    <div>
      <div>
        <div>
          <h1>Bill</h1>
          <input type="number" name="" id="" />
        </div>
        <div>
          <h1>Select Tip %</h1>
          <div>
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>20%</button>
            <button>25%</button>
            <input type="number" name="" id="" />
          </div>
        </div>
        <div>
          <h1>Number of People</h1>
          <input type="number" name='' id='' />
        </div>
      </div>

      <div>
        <div>
          <div>
            <h1>Tip Amount</h1>
            <p>/ person</p>
          </div>
          <div>$0.00</div>
        </div>
        <div>
          <div>
            <h1>Total</h1>
            <p>/ person</p>
          </div>
          <div>$0.00</div>
        </div>
        <button>RESET</button>
      </div>
    </div>
  </div>
  );
}

export default App;

