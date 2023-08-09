import './App.css';
import{ SignUp } from './components/signUp.page';
import {Login} from './components/login.page';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Welcome} from './components/welcome.page';
import {RecommendationPage} from './components/recommendation.page';
import {MatchRecommendation} from './components/matchRecommendations.page';
import {HomePage} from './components/home.page';
import {Profile} from './components/profile.page';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {useState} from 'react';



function App() {
  const [userIdentification, setuserIdentification] = useState()
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route
            path="/login"
            element={<Login setuserIdentification={setuserIdentification} />}
          ></Route>
          <Route
            path="/home"
            element={<HomePage userIdentification={userIdentification} />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/welcome" element={<Welcome />}></Route>
          <Route
            path="/creator_recommendation"
            element={<RecommendationPage />}
          ></Route>
          <Route path="/match" element={<MatchRecommendation />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
