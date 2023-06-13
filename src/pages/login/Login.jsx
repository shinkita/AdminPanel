import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';

const Login = () => {
  const [authEmail, setEmail] = useState('');
  const [authPassword, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignin = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('authEmail', authEmail);
    formData.append('authPassword', authPassword);

    try {
      const response = await axios.post(
        'https://wedding-production-e6b8.up.railway.app/api/auth/login',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With',
          },
        }
      );
      console.log('Login successfully', response.data);
      // Store authId in local storage
	  const authId = response.data.user._id;
      localStorage.setItem('authId', authId);
      console.log(authId);
      setShowAlert(true);
	  window.location.href = '/home';
    } catch (error) {
      console.error(error);
      setShowAlert(true);
      setErrorMessage('Error in Login! Try again');
    }
  };

  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <h2 className="mb-4 text-center font-bold text-base">Login here</h2>
                <form action="#" className="signin-form">
                  {showAlert && (
                    <Alert
                      severity={errorMessage ? 'error' : 'success'}
                      onClose={() => setShowAlert(false)}
                    >
                      {errorMessage ? errorMessage : 'Login successfully'}
                    </Alert>
                  )}

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      value={authEmail}
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="password-field"
                      type="password"
                      className="form-control"
                      placeholder="Password"
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
                      onClick={handleSignin}
                    >
                      Sign In
                    </button>
                    <a href="/register" className="text-base">&nbsp;Sign Up</a>
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

export default Login;
