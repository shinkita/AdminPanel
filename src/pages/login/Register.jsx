import "./login.scss";
import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';
import Login from "./Login";

const Register = () => {
  const [authName, setFullName] = useState('');
  const [authEmail, setEmail] = useState('');
  const [authPassword, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleName = (event) => {
    setFullName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('authName', authName);
    formData.append('authEmail', authEmail);
    formData.append('authPassword', authPassword);

    try {
      const response = await axios.post(
        'https://wedding-production-e6b8.up.railway.app/api/auth/register',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With',
          },
        }
      );

      console.log('Data saved successfully', response.data);
      setShowAlert(true);
      setFullName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
      setShowAlert(true);
      setErrorMessage('Error saving data');
    }
  };

  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <h2 className="mb-4 text-center text-base">Sign Up here</h2>
                <form action="#" className="signin-form">
				{showAlert && (
    <Alert severity={errorMessage ? 'error' : 'success'} onClose={() => setShowAlert(false)}>
    {errorMessage ? errorMessage : 'Data saved successfully'}
  </Alert>
  )}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      id="fullName"
                      value={authName}
                      onChange={handleName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="email"
                      id="email"
                      value={authEmail}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      id="password"
                      value={authPassword}
                      onChange={handlePassword}
                      required
                    />
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </button>
                    <a href="/" className="text-base">&nbsp;Sign In</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
