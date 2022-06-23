import React, { useState } from "react";
import classes from "./vil.module.css";
function Vil() {
  const [name, setname] = useState("");
  const [passportnumber, setpassportnumber] = useState("");
  const [Attendentname, setAttendentname] = useState("");
  const [Attendentpassportnumber, setAttendentpassportnumber] = useState("");
  const [AppointmentDate, setAppointmentDate] = useState("");
  const [DoctorName, setDoctorName] = useState("");
  const [country, setcountry] = useState("");
  const [Attendent2, setAttendent2] = useState("");
  const [Attendentpassportnumber2, setAttendentpassportnumber2] = useState("");
  const Handlechange = (e, setter) => {
    setter(e.target.value);
  };
  return (
    <div className={classes.vil}>
      <h1>VIL</h1>
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
          <span> PassPort Number : </span>
          <input
            type="text"
            placeholder=" PassPort Number"
            onChange={(e) => Handlechange(e, setpassportnumber)}
          />
        </p>

        <p>
          <span> Attendent Name : </span>
          <input
            type="text"
            placeholder="Attendent Name "
            onChange={(e) => Handlechange(e, setAttendentname)}
          />
        </p>
        <p>
          <span> Passport Number : </span>
          <input
            type="text"
            placeholder="Passport Number "
            onChange={(e) => Handlechange(e, setAttendentpassportnumber)}
          />
        </p>
        <p>
          <span> Attendent Name : </span>
          <input
            type="text"
            placeholder="Attendent Name "
            onChange={(e) => Handlechange(e, setAttendent2)}
          />
        </p>
        <p>
          <span> Passport Number : </span>
          <input
            type="text"
            placeholder="Passport Number "
            onChange={(e) => Handlechange(e, setAttendentpassportnumber2)}
          />
        </p>
        <p>
          <span>Appointment Date : </span>
          <input
            type="text"
            placeholder="Appointment date "
            onChange={(e) => Handlechange(e, setAppointmentDate)}
          />
        </p>
        <p>
          <span> Doctor Name : </span>
          <input
            type="text"
            placeholder="Doctor name"
            onChange={(e) => Handlechange(e, setDoctorName)}
          />
        </p>
        <p>
          <span> Country : </span>
          <input
            type="text"
            placeholder="Country"
            onChange={(e) => Handlechange(e, setcountry)}
          />
        </p>
      </div>
      <pre style={{ paddingBottom: "100px" }} className={classes.textarea}>
        {`


Dear Team ,

Please find the attached passport of the below-mentioned patient & his attendant:

Patient Name: ${name}

Passport Number: ${passportnumber}

Attendant Name: ${Attendentname}

Passport Number: ${Attendentpassportnumber}

Attendant Name: ${Attendent2}

Passport Number: ${Attendentpassportnumber2}

Appointment Date with: ${DoctorName}  ${AppointmentDate.split("-")
          .reverse()
          .join("-")} 



Kindly share the VIL below mentioned also:



To: Indian Embassy ${country}

`}
      </pre>
    </div>
  );
}

export default Vil;
