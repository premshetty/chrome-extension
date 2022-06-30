import React, { useState } from "react";
import classes from "./opinion.module.css";

function Opinion() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [problem, setproblem] = useState("");
  const [caseHistory, setcaseHistory] = useState("");

  const [country, setcountry] = useState("");
  const [department, setdepartment] = useState("");
  const Handlechange = (e, setter) => {
    setter(e.target.value);
  };
  const copytoClipBoard = () => {
    let inputElement = document.getElementById("textcontent");
    let text = inputElement.innerText;
    navigator.clipboard.writeText(text);
  };

  console.log(name);
  return (
    <div className={classes.opinion}>
      <h1>Opinion</h1>
      <div className={classes.form}>
        <p>
          <span> Patient Name : </span>
          <input
            onChange={(e) => Handlechange(e, setname)}
            type="text"
            placeholder="patient name"
          />
        </p>
        <p>
          <span> Age : </span>
          <input
            type="text"
            placeholder="patient Age "
            onChange={(e) => Handlechange(e, setage)}
          />
        </p>
        <p>
          <span> Health Problem : </span>
          <input
            type="text"
            placeholder="Health Problem "
            onChange={(e) => Handlechange(e, setproblem)}
          />
        </p>
        <p>
          <span> Case History : </span>
          <input
            type="text"
            placeholder="Case History "
            onChange={(e) => Handlechange(e, setcaseHistory)}
          />
        </p>

        <p>
          <span> Country : </span>
          <input
            type="text"
            placeholder="Country "
            onChange={(e) => Handlechange(e, setcountry)}
          />
        </p>
        <p>
          <span> Department : </span>
          <input
            type="text"
            placeholder="Department "
            onChange={(e) => Handlechange(e, setdepartment)}
          />
        </p>
      </div>
      <div>
        <pre className={classes.textarea} id="textcontent">
          {`Dear Team ,

Greetings From Treatment Traveller!!

Please find the attached RX DETAILS of the below-mentioned patient:

Patient Name: ${name}

Age / Gender : ${age}

Health Problem: ${problem}

Case History:   ${caseHistory}


 
Country:  ${country}


 Kindly suggest the cost estimation and ${department}'s opinion. URGENT!`}
        </pre>
        <button className={classes.button} onClick={copytoClipBoard}>
          copy
        </button>
      </div>
    </div>
  );
}

export default Opinion;
