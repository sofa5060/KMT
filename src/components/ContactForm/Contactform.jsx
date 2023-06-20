import React, {useContext, useState} from "react";
import "./Contactform.css";
import TextField from "@mui/material/TextField";
import { AlertContext } from "../../context/AlertContextProvider";
import axios from "axios";

export default function Contactform() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const { showAlert } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!firstName || !lastName || !emailAddress || !message){
      return showAlert("error", "Please fill all the fields");
    }


    let res;
    try{
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        name: firstName + " " + lastName,
        email: emailAddress,
        message
      });
    }catch(e){
      return showAlert("error", "Error in submitting the form");
    }

    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setMessage("");
    showAlert("success", "Submitted Successfully");
  };

  return (
    <div className="contact-form">
      <h2>Connect with KMT Tours Get in Touch Today!</h2>
      <p>
        Whether you have questions about our tours, want to request a quote, or
        simply need more information about traveling to Egypt, we're here to
        help. Our team of friendly and knowledgeable travel experts is available
        to assist you with all your travel needs. Contact us today and let us
        help you plan an unforgettable trip to Egypt!
      </p>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <TextField label="First Name" required fullWidth onChange={e => setFirstName(e.target.value)} value={firstName}/>
          <TextField label="Last Name" required fullWidth onChange={e => setLastName(e.target.value)} value={lastName}/>
        </div>
        <TextField label="Email Address" type="email" required fullWidth onChange={e => setEmailAddress(e.target.value)} value={emailAddress}/>
        <TextField label="Write Your Message" multiline required fullWidth rows={5} onChange={e => setMessage(e.target.value)} value={message}/>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
