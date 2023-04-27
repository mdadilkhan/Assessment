import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import UserHome from '../Pages/UserHome';
import Users from '../Pages/Users';
import Assessments from '../Pages/Assessments';
import Question from '../Pages/Question';
import Campaigns from '../Pages/Campaign';
import Masters from '../Pages/Masters';
import Settings from '../Pages/Settings';
import Help from '../Pages/Help';
import './Home.css'
const Home = () => {
  return (
   <div className="home">

      <Sidebar>
        <Routes>
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/question-bank" element={<Question />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Sidebar>

      
   </div>
  )
}

export default Home
