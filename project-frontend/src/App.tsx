import "./App.css";
import { SignUp } from "./components/signUp.page";
import { Login } from "./components/login.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Welcome } from "./components/welcome.page";
import { RecommendationPage } from "./components/recommendation.page";
import { MatchRecommendation } from "./components/matchRecommendations.page";
import { HomePage } from "./components/home.page";
import { Profile } from "./components/profile.page";
import {CornerPage} from "./components/corner.page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { CornerInfo } from "./components/cornerInfo.page";
import axios from "axios";

function App() {
  const [userIdentification, setuserIdentification] = useState();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [numberOfLogIns, setNumberOfLogIns] = useState(0);
  const [interestMap, setInterestMap] = useState();
  const [chosenCorner, setChosenCorner] = useState();
  const [chosenCornerObject, setChosenCornerObject] = useState({});
  const [userEmail, setUserEmail] = useState();
  const [joinedCorner, setJoinedCorner] = useState([]);
  const [updates, setUpdates] = useState([]);


  useEffect(() => {
    if (chosenCorner) {
      axios
        .get(`http://localhost:4000/corner/${chosenCorner}`)
        .then((res) => {
          setChosenCornerObject(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

        axios
          .get(`http://localhost:4000/update/${chosenCorner}`)
          .then((res) => {
            setUpdates(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  });

  useEffect(() => {
    const joinedCorner = JSON.parse(
      window.localStorage.getItem("joinedCorner")!
    );
    setJoinedCorner(joinedCorner);
  }, []);

  useEffect(() => {
    const chosenCorner = JSON.parse(
      window.localStorage.getItem("chosenCorner")!
    );
    setChosenCorner(chosenCorner);
  }, []);

  useEffect(() => {
    const updates = JSON.parse(
      window.localStorage.getItem("updates")!
    );
    setUpdates(updates);
  }, []);

  useEffect(() => {
    const numberOfLogIns = JSON.parse(
      window.localStorage.getItem("numberOfLogIns")!
    );
    setNumberOfLogIns(numberOfLogIns);
  }, []);

  useEffect(() => {
    const local = JSON.parse(window.localStorage.getItem("interest")!);
    setInterestMap(local);
  }, []);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user")!);
    setuserIdentification(user);
  }, []);

  useEffect(() => {
    if (userIdentification) {
      localStorage.setItem("user", JSON.stringify(userIdentification));
      axios
        .get(`http://localhost:4000/user/${userIdentification}`)
        .then((res) => {
          setUserEmail(res.data.email);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userIdentification]);

  useEffect(() => {
    if (interestMap) {
      localStorage.setItem("interest", JSON.stringify(interestMap));
    }
  }, [interestMap]);

  useEffect(() => {
    if (joinedCorner) {
      localStorage.setItem("joinedCorner", JSON.stringify(joinedCorner));
    }
  }, [joinedCorner]);

  useEffect(() => {
    if (numberOfLogIns) {
      localStorage.setItem("numberOfLogIns", JSON.stringify(numberOfLogIns));
    }
  }, [numberOfLogIns]);

  useEffect(() => {
    if (chosenCorner) {
      localStorage.setItem("chosenCorner", JSON.stringify(chosenCorner));
      
    }
  }, [chosenCorner]);

   useEffect(() => {
     if (updates) {
       localStorage.setItem("updates", JSON.stringify(updates));
     }
   }, [updates]);

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route
            path="/login"
            element={
              <Login
                setuserIdentification={setuserIdentification}
                setisLoggedIn={setisLoggedIn}
                setNumberOfLogIns={setNumberOfLogIns}
                numberOfLogIns={numberOfLogIns}
              />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <HomePage
                userIdentification={userIdentification}
                setChosenCorner={setChosenCorner}
                chosenCorner={chosenCorner}
                joinedCorner={joinedCorner}
              />
            }
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route
            path="/welcome"
            element={
              <Welcome
                isLoggedIn={isLoggedIn}
                numberOfLogIns={numberOfLogIns}
              />
            }
          ></Route>
          <Route
            path="/cornerInfo"
            element={
              <CornerInfo
                chosenCorner={chosenCorner}
                chosenCornerObject={chosenCornerObject}
                userEmail={userEmail}
                userIdentification={userIdentification}
                setJoinedCorner={setJoinedCorner}
                joinedCorner={joinedCorner}
              />
            }
          ></Route>

          <Route
            path="/creator_recommendation"
            element={<RecommendationPage setInterestMap={setInterestMap} />}
          ></Route>
          <Route path="/match" element={<MatchRecommendation />}></Route>
          <Route
            path="/corner"
            element={
              <CornerPage
                chosenCornerObject={chosenCornerObject}
                chosenCorner={chosenCorner}
                updates={updates}
                joinedCorner={joinedCorner}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
