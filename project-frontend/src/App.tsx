import "./App.css";
import { SignUp } from "./components/signUp.page";
import { Login } from "./components/login.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Welcome } from "./components/welcome.page";
import { RecommendationPage } from "./components/recommendation.page";
import { MatchRecommendation } from "./components/matchRecommendations.page";
import { HomePage } from "./components/home.page";
import { Profile } from "./components/profile.page";
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
  const [userEmail, setUserEmail ] = useState()

  useEffect(() => {
    if (chosenCorner) {
      axios
        .get(`http://localhost:4000/corner/${chosenCorner}`)
        .then((res) => {
         
          setChosenCornerObject(res.data)
        }).catch((err)=> {
          console.log(err)
        });
    }
  });


  useEffect(() => {
    const chosenCorner = JSON.parse(
      window.localStorage.getItem("chosenCorner")!
    );
    setChosenCorner(chosenCorner);
  }, []);

  useEffect(() => {
    const numberOfLogIns = JSON.parse(
      window.localStorage.getItem("numberOfLogIns")!
    );
    setInterestMap(numberOfLogIns);
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
      console.log(userIdentification)
      localStorage.setItem("user", JSON.stringify(userIdentification));
      axios
        .get(`http://localhost:4000/user/${userIdentification}`)
        .then((res) => {
          console.log("dddd" + res.data.email);
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
    if (numberOfLogIns) {
      localStorage.setItem("numberOfLogIns", JSON.stringify(numberOfLogIns));
    }
  }, [numberOfLogIns]);

  useEffect(() => {
    if (chosenCorner) {
      localStorage.setItem("chosenCorner", JSON.stringify(chosenCorner));
    }
  }, [chosenCorner]);


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
              />
            }
          ></Route>

          <Route
            path="/creator_recommendation"
            element={<RecommendationPage setInterestMap={setInterestMap} />}
          ></Route>
          <Route path="/match" element={<MatchRecommendation />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
