import "../new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const Profile = () => {
    const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [status, setStatus] = useState("");
  const [inviteType, setInviteType] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // create invite link using the user's data
    const inviteLink = `https://weddingcard.com/invite/${userName}-${email}`;
    alert(`Here's your invite link: ${inviteLink}`);
        console.log({
      userName,
      email,
      profilePicture,
      status,
      inviteType,
      inviteLink,
    });
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Profile Data</h1>
        </div>
        <div className="bottom">
       
        <form onSubmit={handleSubmit}>
          
  <div class="form-group">
          
      <label htmlFor="userName">User name:</label>
      <input
        type="text"
        id="userName"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        
        required
      />
  
  </div>
  <div class="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
</div>
<div class="form-group">
      <label htmlFor="profilePicture">Profile picture:</label>
      <input
        type="file"
        id="profilePicture"
        onChange={(event) => setProfilePicture(event.target.files[0])}
      />
</div>

<div>

<div class="form-group">
      <button type="submit" className="btnSolid">Save</button>
      
</div>
      </div>
    </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
