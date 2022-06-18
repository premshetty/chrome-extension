import React, { useState } from "react";
import classes from "./opinion.module.css";

function Opinion() {
  const [text, setText] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [problem, setproblem] = useState("");
  const [caseHistory, setcaseHistory] = useState("");
  const [patientGender, setpatientGender] = useState("");
  const [symptoms, setsymptoms] = useState("");
  const [country, setcountry] = useState("");
  const [department, setdepartment] = useState("");
  const Handlechange = (e, setter) => {
    setter(e.target.value);
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
            type="Number"
            placeholder="patient Age "
            onChange={(e) => Handlechange(e, setage)}
          />
        </p>
        <p>
          <span> Patient Gender : </span>
          <select onChange={(e) => Handlechange(e, setpatientGender)}>
            <option value="male" key="male">
              male
            </option>
            <option value="female" key="female">
              female
            </option>
          </select>
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
          <span> Symptoms : </span>
          <input
            type="text"
            placeholder="Symptoms "
            onChange={(e) => Handlechange(e, setsymptoms)}
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
        <pre
          onCanPlayCapture={(e) => setText(e.target.innerHtml)}
          className={classes.textarea}
        >
          {`Dear Team

Greetings From Treatment Traveller!!

Please find the attached RX DETAILS of the below-mentioned patient:

Patient Name: ${name}

Age: ${age}  

Gender : ${patientGender}

Health Problem: ${problem}

Case History:   ${caseHistory}

Current Symptoms:   ${symptoms}

What treatment plan has been suggested by the doctors in their country –
 
Country:  ${country}
`}
          <pre className={classes.yellow}>
            {` Kindly suggest the cost estimation and ${department}'s opinion. URGENT!`}
          </pre>
        </pre>
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
      >
        Copy to clipboard !!
      </button>
    </div>
  );
}

export default Opinion;
