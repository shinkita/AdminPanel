import "./widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SwitchVideoOutlinedIcon from '@mui/icons-material/SwitchVideoOutlined';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
 

  switch (type) {
    case "images":
      data = {
        title: "Uploaded Images",
        link: "See all Images",
        icon: (
          <CropOriginalOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "videos":
      data = {
        title: "Videos",
            link: "Total Videos",
        icon: (
          <SwitchVideoOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "polls":
      data = {
        title: "Polls",
          link: "Total Polls",
        icon: (
          <PollOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "giftlist":
      data = {
        title: "Giftlist",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
      case "invitees":
        data = {
          title: "Invitees",
          isMoney: true,
          link: "See details",
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        };
        break;
        case "playlist":
          data = {
            title: "PlayList",
            isMoney: true,
            link: "See details",
            icon: (
              <QueueMusicIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            ),
          };
          break;
    default:
      data = {
    title: "Unknown Type",
    link: "Unknown Link",
    icon: null, // or provide a default icon
  };
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
