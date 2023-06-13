import React, { useState } from "react";
import Modal from "react-modal";
import axios from 'axios';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Alert } from '@mui/material';

 
const ModalGift = ({ isOpen, onClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [items, setItems] = useState('');
  

  const handleCloseModal = () => {
    onClose();
  };

  const handleInputChange = (e) => {
    setItems(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const authId = localStorage.getItem('authId');
    formData.append('giftName', items);
    formData.append('authId', authId);

    try {
      const response = await axios.post(
        'https://wedding-production-e6b8.up.railway.app/api/auth/giftlists',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With'
          },
        }
      );

      console.log('Added Gift Item successfully in Gift Registry', response.data);
      setShowAlert(true);
      setItems(' ');
    } catch (error) {
      console.error(error);
      setShowAlert(true);
      setErrorMessage('Error saving data');
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Gift Modal"
      >
        <button onClick={handleCloseModal} className="closeIcon">
          <CloseOutlinedIcon />
        </button>
        <h4> Create List </h4>
        <hr />
        <form className="PaddingCustom">
          {showAlert && (
            <Alert severity={errorMessage ? 'error' : 'success'} onClose={() => setShowAlert(false)}>
              {errorMessage ? errorMessage : 'Added Gift Item successfully in Gift Registry'}
            </Alert>
          )}

          <input
            type="text"
            value={items}
            onChange={handleInputChange}
            placeholder="Add Gift Item here"
            className="textLayout"
          />
          <button type="submit" onClick={handleSubmit} className="btnSolid">
            Add
          </button>
          <br />
          <br />
         
        </form>
      </Modal>
    </>
  );
};

export default ModalGift;

