import React, { useState } from "react";
import Modal from "react-modal";
import axios from 'axios';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dropzone from "react-dropzone";
import { Alert } from '@mui/material';
const ModalAddVideo=({ isOpen, onClose ,selectedCollectionId})=>
  {
    const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [files, setFiles] = useState([]);
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
       
    
  
    const handleCloseModal = () => {
      onClose();
    };
    const onDrop = (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles]);
    };
    const removeFile = (index) => {
      const newFiles = [...files];
      newFiles.splice(index, 1);
      setFiles(newFiles);
    };
    const handleSubmit=async(event)=>{
      event.preventDefault();
      const formData = new FormData();
      const authId = localStorage.getItem('authId');
      formData.append('collectionId', selectedCollectionId);
      alert(authId);
     
      formData.append('authId', authId);
     
          for (let i = 0; i < files.length; i++) {
            formData.append('photos', files[i]);
          }
      
          try {
            const response = await axios.post(
              'https://wedding-production-e6b8.up.railway.app/api/auth/add-video-more',
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "X-Requested-With"
                },
              }
            );
      
            console.log('Data saved successfully', response.data);
            setShowAlert(true); 
          } catch (error) {
            console.error(error);
            setShowAlert(true);
            setErrorMessage('Error saving data');
          }
      }
  return(
<>

<Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Upload Modal"
    >
      <button onClick={handleCloseModal} className="closeIcon"><CloseOutlinedIcon></CloseOutlinedIcon></button> 
      <h4>Add More Videos</h4>
      <hr></hr>
      <form  className="PaddingCustom">
      {showAlert && (
    <Alert severity={errorMessage ? 'error' : 'success'} onClose={() => setShowAlert(false)}>
    {errorMessage ? errorMessage : 'Data saved successfully'}
  </Alert>
  )}
       
        
        <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      {files.map((file, index) => (
    <div key={file.name}>
      <img src={URL.createObjectURL(file)} alt={file.name} width={50} height={50} />
      <button className="closeBtn" onClick={() => removeFile(index)}>x</button>
    </div>
  ))}
        <br />
        <button type="submit" onClick={handleSubmit} className="btnSolid">Save</button>
      </form>
    </Modal>
</>  
);
 
}

export default ModalAddVideo;