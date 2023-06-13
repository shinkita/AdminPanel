import { useState, useEffect } from "react";
import "./list.scss";
import ModalLayout from "../list/ModalLayout";
import ModalAddImages from "../list/ModalAddImages"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import axios from "axios";

const Images = () => {
  const [collections, setCollections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginId = localStorage.getItem('authId');
        console.log(loginId)
        const response = await axios.get(`https://wedding-production-e6b8.up.railway.app/api/auth/get-collection?authId=${loginId}`);
        const data = response.data;
        setCollections(data.details);
        if (data.details.length > 0) {
          setSelectedCollectionId(data.details[0]._id);
        }
        
      } catch (error) {
        console.error(error);
        // Handle error case
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleAdModal = () => {
    setIsModal1Open(true);
    //setSelectedCollectionId(collectionId); 
   // console.log("collectionid",selectedCollectionId)

  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleAddCloseModal = () => {
    setIsModal1Open(false);
  };
  useEffect(() => {
    console.log("collectionId", selectedCollectionId);
  }, [selectedCollectionId]);


  return (
   
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="newContainer ml-2">
          <div className="top">
            <h3>Images Hub</h3>
            </div>
            <div className="subList">
              <ModalLayout isOpen={isModalOpen} onClose={handleCloseModal} />
              
              <span>
                <AddCircleOutlineOutlinedIcon fontSize="25px" color="#6439ff" onClick={handleOpenModal} />
                Add new Collection
              </span>
            </div>
           
          <div className="imagecollection">
            <div className="bottom">
              <div className="row">
                {collections.map((collection) => (
                  <div key={collection._id} className="column">
                    <h4><strong>{collection.collectionName} </strong> 
                    &nbsp;&nbsp;
                   
                    <ModalAddImages isOpen={isModal1Open} onClose={handleAddCloseModal} 
                    selectedCollectionId={selectedCollectionId} />
                    <span>
                <AddCircleOutlineOutlinedIcon fontSize="25px" color="#6439ff" onClick={handleAdModal} />
                Add More
              </span>
                    </h4> 
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {collection.photos.map((photo) => (
    <div key={photo._id}>
      <div className="image-item">
        <hr />
        <div className="flex mt-3">
          <img src={photo.url} alt={photo.name} className="w-20 h-auto" />
          <div className="ml-4">
            <p>
              <strong>Name:</strong> {photo.name}
            </p>
            <p>
              <strong>Size:</strong> {(photo.size / 1024).toFixed(2)} KB
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    );
};

export default Images;