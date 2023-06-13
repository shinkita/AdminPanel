import  "../settings/Style.scss";
import  "../new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chatsection1 from "./Chatsection1";
import Chatsection2 from "./Chatsection2";
const Chatsettings=()=>{
return(
    <>
    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>Add Details</h1>
      </div>
      <div className="bottom">
      <Chatsection1/>  
         
        </div>
        <div className="bottom">
        <Chatsection2/>  
          
        </div>
     
      </div>
   
  </div>
      </>
)
}
export default Chatsettings
