import { useState, useEffect } from "react";
import "./list.scss";
import axios from 'axios';
import ModalGift from "./ModalGift";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const GiftRegistry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collections, setCollections] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginId = localStorage.getItem('authId');
        const response = await axios.get(`https://wedding-production-e6b8.up.railway.app/api/auth/get-giftlists?authId=${loginId}`);
        const data = response.data;
        setCollections(data); // Set the data to the 'collections' state
      } catch (error) {
        console.error(error);
        // Handle error case
      }
    };

    fetchData();
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="newContainer ml-2">
          <div className="top">
            <h3>Gift Registry</h3>
          </div>
          <div className="subList m-2">
            <ModalGift isOpen={isModalOpen} onClose={handleCloseModal} />
            <span>&nbsp;<AddCircleOutlineOutlinedIcon fontSize="25px" color="#6439ff" onClick={handleOpenModal} /></span>
            <span>&nbsp; Create Gift List</span>
          </div>
          <div className="imagecollection">
            <div className="bottom">
            <div className="row">
  <h3>Here is the Gift Registry List</h3>
  <hr className="my-4" />
  <table className="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">S.No.</th>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Gift Item</th>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
      </tr>
    </thead>
    <tbody>
      {collections.map((collection, index) => (
        <tr key={collection._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
          <td className="px-6 py-4 whitespace-no-wrap">{collection.giftName}</td>
          <td className="px-6 py-4 whitespace-no-wrap">{collection.recievedGift ? 'Received' : 'Not Received'}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftRegistry;
