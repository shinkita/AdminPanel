import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Images from "./pages/list/Images";
import Videos from "./pages/list/Videos";
import Playlist from "./pages/list/Playlist"

import GiftRegistry from "./pages/list/GiftRegistry"
import Profile from "./pages/settings/Profile";
import Chatsetting from "./pages/settings/ChatSetting";
import Register from "./pages/login/Register";
import New from "./pages/new/New";
import WeddingCalender from "./pages/Events/WeddingCalender";
import Polls from "./pages/list/Polls";
import ShareUrl from "./pages/Share/ShareUrl";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={<Home />} /> */}
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="register" element={<Register />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              { <Route
                path="new"
                element={<New title="Add New User" />}
              /> }
            </Route>
           
              
            <Route path="Images">
              <Route index element={<Images />} />
              <Route path=":userId" element={<Images />} />
              
            </Route>
            <Route path="Videos">
              <Route index element={<Videos />} />
              <Route path=":userId" element={<Videos />} />
              
            </Route>
            <Route path="Chatsettings">
              <Route index element={<Chatsetting />} />
              <Route path=":userId" element={<Chatsetting />} />
              
            </Route>
            <Route path="Polls">
              <Route index element={<Polls />} />
              <Route path=":userId" element={<Polls />} />
              </Route>
              <Route path="Playlist">
              <Route index element={<Playlist />} />
              <Route path=":userId" element={<Playlist />} />
              </Route>
              <Route path="WeddingCalender">
              <Route index element={<WeddingCalender />} />
              <Route path=":userId" element={<WeddingCalender />} />
              </Route>
             
             
            <Route path="ShareUrl">
              <Route index element={<ShareUrl />} />
              <Route path=":userId" element={<ShareUrl/>} />
              
            </Route>
            <Route path="GiftRegistry">
              <Route index element={<GiftRegistry />} />
              <Route path=":userId" element={<GiftRegistry/>} />
              
            </Route>
          
            <Route path="WeddingCalender">
              <Route index element={<WeddingCalender />} />
              <Route path=":userId" element={<WeddingCalender/>} />
              
            </Route>
              <Route path="Profile">
            <Route index element={<Profile />} />
       
          </Route>
      </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
