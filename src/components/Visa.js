import React, { useState } from "react";
import classes from "./visa.module.css";
function Visa() {
  const [name, setname] = useState("");
  const [arrivalDate, setarrivalDate] = useState("");
  const [arrivalHour, setarrivalHour] = useState("");
  const [airline, setairline] = useState("");
  const [doctorname, setdoctorname] = useState("");
  const [AppointmentDate, setAppointmentDate] = useState("");
  const [city, setcity] = useState("");
  const Handlechange = (e, setter) => {
    setter(e.target.value);
  };
  return (
    <div className={classes.visa}>
      <h1>Visa</h1>
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
          <span> Arraival Date : </span>
          <input
            type="text"
            placeholder=" Arraival Date"
            onChange={(e) => Handlechange(e, setarrivalDate)}
          />
        </p>

        <p>
          <span> Arrival Hour : </span>
          <input
            type="text"
            placeholder="arrival hour "
            onChange={(e) => Handlechange(e, setarrivalHour)}
          />
        </p>
        <p>
          <span> Airline : </span>
          <input
            type="text"
            placeholder="Airline "
            onChange={(e) => Handlechange(e, setairline)}
          />
        </p>
        <p>
          <span>Doctor Name : </span>
          <input
            type="text"
            placeholder="Doctor Name"
            onChange={(e) => Handlechange(e, setdoctorname)}
          />
        </p>
        <p>
          <span> Appointment Date : </span>
          <input
            type="text"
            placeholder="Appointment Date"
            onChange={(e) => Handlechange(e, setAppointmentDate)}
          />
        </p>
        <p>
          <span> CIty : </span>
          <input
            type="text"
            placeholder="City "
            onChange={(e) => Handlechange(e, setcity)}
          />
        </p>
      </div>
      <pre className={classes.textarea}>
        {`Dear team, 
 
Greetings from Treatment Traveller!
 
Please find the tickets and arrival details of the below-mentioned patient:

Patient Name:  ${name}

Patient will arrive on ${arrivalDate} 

at ${arrivalHour} by ${airline} Airlines.

Patient needs an appointment with ${doctorname} on ${AppointmentDate}.

Kindly schedule the appointment.





Patent is arriving by ${airline} Airlines at ${arrivalHour} at ${city} Airport. Kindly arrange the pickup. Our associate Pankaj will accompany the patient.
 
Kindly pick Pankaj at 1pm from the address: PIPAL CHOWK NEAR INDARPRASTH CNG PUMP and NEAR FORTIS HOSPITAL VASANT KUNJ  
 
After the pick up the patient will go with Pankaj.
 
kindly drop the Pankaj back to his address. His contact no- (+917782905322)`}
      </pre>
    </div>
  );
}

export default Visa;
