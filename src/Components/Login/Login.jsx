import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";

import { authentication } from "../../utilis/firebase/firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {  useNavigate } from "react-router";

function Login() {
  const [otpOpen, setOtpOpen] = useState(false);
  const [checkboxSelected, setcheckboxSelected] = useState(false);
  const [error, setError] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [isOtp, setIsOTP] = useState("");
  const [otp, setOtp] = useState("");
  
  const navigate = useNavigate()
  const generateRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      console.log("Captcha generation");
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log(response);
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          },
        },
        authentication
      ).catch((error) => {
        console.log(error);
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phonenum) {
      setError("Please enter phone number!");
    } else if (phonenum.length === 10 && phonenum === '9876543210') {
    //   setPhonenum("");
    //   setError("Enter a valid phone number");
      setOtpOpen(true);
    } else {

      //OTP Generation
    //   generateRecaptcha();
    //   let appVerifier = window.recaptchaVerifier;
    //   signInWithPhoneNumber(authentication, `+91`+phonenum, appVerifier)
    //     .then((confirmationResult) => {
    //       window.confirmationResult = confirmationResult;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    }
  };
  const verifyOtp = ()=>{
      console.log("Oseccured", otp)
    if (otp == "123654") {
        console.log("Otp seccured")
        navigate('/dashboard')
    }
  }
  return (
    <>
      <div className="container">
        <form className="form-control login-form" onSubmit={handleSubmit}>
            {error === "" ? "" : <span className="error-msg">{error}</span>}
          <div className="form-group pnumber-group">
            <label htmlFor="pnumber">Enter Your Number</label>
            <input
              type="number"
              name="pnumber"
              id="pnumber"
              className="w-25"
              placeholder="Number...."
              value={phonenum}
              onChange={(e) => {
                setPhonenum(e.target.value);
              }}
            />
            <input
              type="checkbox"
              name="policy_check"
              id="policy_check"
              value={checkboxSelected}
            />{" "}
            Agree terms and conditions
          </div>
          {otpOpen ? (
            <>
              <input type="number" name="Otp" id="Otp" value={otp} onChange={(e)=>{setOtp(e.target.value); verifyOtp()}} />
            </>
          ) : (
            <></>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="recaptcha-container"></div>
    </>
  );
}

export default Login;
