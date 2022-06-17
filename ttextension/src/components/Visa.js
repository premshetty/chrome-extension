import React from "react";
import classes from "./visa.module.css";
function Visa() {
  return (
    <div className={classes.visa}>
      <h1>Visa</h1>
      <textarea className={classes.textarea}>
        {`Dear team, 
 
Greetings from Treatment Traveller!
 
Please find the tickets and arrival details of the below-mentioned patient:

Patient Name:  

Patient will arrive in  on th may, 2022 at hrs by  Airlines.

Patient needs an appointment with on th may, 2022.

Kindly schedule the appointment.





Patent is arriving by Airlines at hrs at Delhi Airport. Kindly arrange the pickup. Our associate Pankaj will accompany the patient.
 
Kindly pick Pankaj at 1pm from the address: PIPAL CHOWK NEAR INDARPRASTH CNG PUMP and NEAR FORTIS HOSPITAL VASANT KUNJ  
 
After the pick up the patient will go with Pankaj.
 
kindly drop the Pankaj back to his address. His contact no- (+917782905322)`}
      </textarea>
    </div>
  );
}

export default Visa;
