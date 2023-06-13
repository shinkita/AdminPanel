import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const ShareUrl = () => {
  const loginId = localStorage.getItem("authId");

  // console.log(loginId);

  var URL = `http://localhost:3001/home/${loginId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(URL);
    alert("URL copied to clipboard!");
  };

  // console.log(URL);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="newContainer">
          <div className="top">
            <h3>Share Invite URL</h3>
            <div>
              <button onClick={copyToClipboard}>Copy link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareUrl;
