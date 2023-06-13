import React, {useState} from "react";
import Modal from "react-modal";
import axios from 'axios';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dropzone from "react-dropzone";
import { Alert } from '@mui/material';

const ModalLayout=({ isOpen, onClose })=>
  {
    const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [collectionName, setCollectionName] = useState("");
  const [inviteType, setInviteType] = useState("");
  const [videos, setVideos] = useState([]);
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
       
    const handleCollectionNameChange = (e) => {
      setCollectionName(e.target.value);
  
    };
    const handleInviteType = (event) => {
      setInviteType(event.target.value);
    };
    const handleCloseModal = () => {
      onClose();
    };
    const onDrop = (acceptedFiles) => {
      const videoFiles = acceptedFiles.filter(file =>
        file.type === 'video/mp4' || file.type === 'audio/wav'
      );
      setVideos([...videos, ...videoFiles]);
    };
    const videoFormats = {
      "video/mp4": [".mp4", ".MP4"]
    };
    const removeVideo = (index) => {
      const newVideos = [...videos];
      newVideos.splice(index, 1);
      setVideos(newVideos);
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      const authId = localStorage.getItem('authId');
      alert(authId);
      formData.append('VideoCollectionName', collectionName);
      formData.append('authId', authId);
      formData.append('inviteType', inviteType);
      for (let i = 0; i < videos.length; i++) {
        formData.append('videos', videos[i]);
      }
  
      try {
        const response = await axios.post(
          'https://wedding-production-e6b8.up.railway.app/api/auth/add-video-collection',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "X-Requested-With"
            },
          }
        );
  
        console.log('Added Video Collection successfully', response.data);
        setShowAlert(true);
      } catch (error) {
        console.error(error);
        setShowAlert(true);
        setErrorMessage('Error saving data');
      }
    };
  
  return(
<>

<Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Video Upload Modal"
    >
      <button onClick={handleCloseModal} className="closeIcon"><CloseOutlinedIcon></CloseOutlinedIcon></button> 
      <h4>Add Video Collection </h4>
      <hr></hr>
      <form  className="PaddingCustom">
      {showAlert && (
    <Alert severity={errorMessage ? 'error' : 'success'} onClose={() => setShowAlert(false)}>
    {errorMessage ? errorMessage : 'Added Video Collection successfully'}
  </Alert>
  )}
    
          <input
            type="text"
            value={collectionName}
            onChange={handleCollectionNameChange}
            className="textLayout"
            placeholder="Video Collection Name"
          />
       
        
       <Dropzone onDrop={onDrop} accept={videoFormats}>
  {({ getRootProps, getInputProps }) => (
    <div {...getRootProps()}>
      <input {...getInputProps({ accept: 'video/mp4, audio/wav' })} />
      <p>Drag and drop some files here, or click to select files</p>
    </div>
  )}
</Dropzone>
      {videos.map((video, index) => (
    <div key={video.name}>
        <video src={URL.createObjectURL(video)} controls width={100} height={100} />
      <button className="closeBtn" onClick={() => removeVideo(index)}>x</button>
    </div>
  ))}
   <br />
  <div className="form-group">
      <label htmlFor="inviteTypeSelect">Invite type:</label>
      <select
        id="inviteTypeSelect"
        value={inviteType}
        onChange={handleInviteType}
        className="textLayout"
        required
      >
        <option value="">-- Select an invite type --</option>
        <option value="general">General</option>
        <option value="close">Close</option>
      </select>
</div>
        <br />
        <button type="submit" onClick={handleSubmit} className="btnSolid">Save</button>
       
      </form>
    </Modal>
</>  
);
 
}

export default ModalLayout;