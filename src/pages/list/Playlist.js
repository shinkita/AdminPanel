import { useState, useEffect } from "react";
import "./list.scss";
import ModalPlayList from "./ModalPlaylist";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loginId = localStorage.getItem("authId");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://wedding-production-e6b8.up.railway.app/api/auth/get-playlists?authId=${loginId}`
        );
        const data = response.data;
        setPlaylist(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [playlist]);

  console.log(playlist);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="newContainer ml-2">
          <div className="top">
            <h3>PlayList</h3>
          </div>
          <div className="subList">
            <ModalPlayList isOpen={isModalOpen} onClose={handleCloseModal} />
            <span className="create-btn" onClick={handleOpenModal}>
              {" "}
              &nbsp;
              <AddCircleOutlineOutlinedIcon fontSize="25px" color="#6439ff" />
              <span>&nbsp; Create Playlist</span>
            </span>
          </div>

          <div className="imagecollection">
            <div className="">
              <h4 className="heading-4">Spotify Playlists</h4>
              <Div className="">
                {playlist?.map((data) => {
                  return (
                    <div className="p-header" key={data._id}>
                      <Link
                        to={data.playListUrl}
                        target="_blank"
                        className=" p-btn"
                      >
                        <img
                          className="logo"
                          src="https://i.postimg.cc/gjsy7KPC/pngwing-com.png"
                          alt=""
                        />
                        <span>{data.playListName}</span>
                      </Link>
                    </div>
                  );
                })}
              </Div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;

const Div = styled.div`
  margin-top: 0px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;

  .p-header {
    .p-btn {
      padding: 5px 10px;
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: #fff;
      cursor: pointer;
      border: 1px solid lightgray;
      border-radius: 5px;
      outline: none;

      &:hover {
        background-color: lightgray;
      }

      .logo {
        width: 20px;
      }
    }
  }
`;
