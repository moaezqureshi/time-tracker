import React, { useState } from "react";
import { useNavigate } from "react-router";

function Register(props) {
    const navigate = useNavigate()
    let {userData, setUserData} = props;
  const [phonenum, setPhonenum] = useState("");
  const [name, setName] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phonenum.length!==10) {
        seterror('Enter Valid Phonenum')
    }else{
        seterror('')
        await setUserData({'number': phonenum,'name':name})
        if (userData) {
            navigate('/dashboard')
        }

    }
  };
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
              type="text"
              name="name"
              id="name"
              className="w-25 form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {/* <div className="recaptcha-container"></div> */}
    </>
  );
}

export default Register;
