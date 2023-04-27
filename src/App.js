import "./App.css";
import Login from "./Components/Login/Login.js";
import Home from "./Components/Home/Home.js";
import Sidebar from "./Components/Sidebar/Sidebar";
import UserHome from "./Components/Pages/UserHome";
import Users from "./Components/Pages/Users";
import Assessments from "./Components/Pages/Assessments";
import Question from "./Components/Pages/Question";
import Campaigns from "./Components/Pages/Campaign";
import Masters from "./Components/Pages/Masters";
import Settings from "./Components/Pages/Settings";
import Help from "./Components/Pages/Help";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
       {/* <Route path="/accounts" element={<Login />} /> */}
        <Sidebar>
          <Routes>
            <Route path="/accounts" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/userHome" element={<UserHome />} />
            <Route path="/users" element={<Users />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/question-bank" element={<Question />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/sidebar" element={<Sidebar />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
