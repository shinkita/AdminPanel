import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { Link } from "react-router-dom";
import RsvpOutlinedIcon from '@mui/icons-material/RsvpOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import SwitchVideoOutlinedIcon from '@mui/icons-material/SwitchVideoOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Wedding App</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/Chatsettings" style={{ textDecoration: "none" }}>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span> Chat Settings</span>
          </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Invitee List</span>
            </li>
          </Link>
          <Link to="/Images" style={{ textDecoration: "none" }}>
            <li>
              <CropOriginalOutlinedIcon className="icon" />
              <span>Images</span>
            </li>
          </Link>
          <Link to="/Videos" style={{ textDecoration: "none" }}>
            <li>
              <SwitchVideoOutlinedIcon className="icon" />
              <span>Videos</span>
            </li>
          </Link>
          <Link to="/Polls" style={{ textDecoration: "none" }}>
            <li>
              <PollOutlinedIcon  className="icon" />
              <span>Polls</span>
            </li>
          </Link>
          <Link to="/PlayList" style={{ textDecoration: "none" }}>
            <li>
              <QueueMusicIcon  className="icon" />
              <span>PlayList</span>
            </li>
          </Link>
          <Link to="/GiftRegistry" style={{ textDecoration: "none" }}>
            <li>
              <CardGiftcardIcon  className="icon" />
              <span>Gift Registry</span>
            </li>
          </Link>
          
          <p className="title">Events</p>
          <Link to="/WeddingCalender" style={{ textDecoration: "none" }}>
          <li>
          <Link to="/WeddingCalender" style={{ textDecoration: "none" }}>
            <EventAvailableOutlinedIcon className="icon" />
            <span>Wedding Calender</span>
            </Link>
          </li>
          </Link>
          <li>
            <RsvpOutlinedIcon  className="icon" />
            <span>RSVP</span>
          </li>
         
          <p className="title">Settings</p>
         
          <Link to="/ShareUrl" style={{ textDecoration: "none" }}>
          <li>
            <ShareOutlinedIcon className="icon" />
            <span>Share Invite URL</span>
          </li>
          </Link>
          <Link to="/Profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
  
    </div>
  );
};

export default Sidebar;
