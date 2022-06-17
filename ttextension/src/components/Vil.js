import React from "react";
import classes from "./vil.module.css";
function Vil() {
  return (
    <div className={classes.vil}>
      <h1>VIL</h1>
      <textarea className={classes.textarea}>
        {`Please find the attached passport of the below-mentioned patient & his attendant:

Patient Name: 
Passport Number: 

Attendant Name: 
Passport Number: 

Appointment Date: With on TH MAY 2022.

Kindly share the VIL below mentioned also:

To: Indian Embassy 

Kindly also share the VIL to:`}
      </textarea>
    </div>
  );
}

export default Vil;
