import { useState } from "react";
import "./App.css";
import Vil from "./components/Vil";
import Visa from "./components/Visa";
import Opinion from "./components/Opinion";

function App() {
  const [changeForm, setchangeForm] = useState(<Vil />);
  const handlechange = (comp) => {
    setchangeForm(comp);
  };
  return (
    <div className="App">
      <header className="App-header">
        <a
          style={{ color: "black", width: "100px", textAlign: "center" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://chrome-extension-five.vercel.app/"
        >
          <h2> need web version ? </h2>
        </a>
        <div className="radio-group">
          <label className="radio1">
            <input
              type="radio"
              name="radio-group"
              onClick={() => handlechange(<Vil />)}
            />
            <span>VIL</span>
          </label>
          <label className="radio2">
            <input
              type="radio"
              name="radio-group"
              onClick={() => handlechange(<Visa />)}
            />
            <span>Arrival</span>
          </label>
          <label className="radio3">
            <input
              type="radio"
              name="radio-group"
              onClick={() => handlechange(<Opinion />)}
            />
            <span>Opinion</span>
          </label>
        </div>
      </header>
      <div className="form">{changeForm}</div>
    </div>
  );
}

export default App;
