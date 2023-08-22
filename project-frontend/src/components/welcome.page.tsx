import { Link } from "react-router-dom";
import { Logo } from "./logo";
import { Profile } from "./profile.page";

export function Welcome(props: { isLoggedIn: any; numberOfLogIns: any }) {
  return (
    <div className="content-center ml-10">
      {props.numberOfLogIns === 1 ? (
        <div className="content-center ml-10">
          {props.isLoggedIn ? (
            <div>
              <Logo />
              <br />
              <br />
              Welcome to Updates.IO.
              <br />
              <br />
              Here you get access to premium information from your peers.
              <br />
              <br />
              You can share your updates too
              <br />
              <br />
              Let's show you around
              <br />
              <br />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center ">
                <Link to="/creator_recommendation">Continue</Link>
              </button>
            
            </div>
          ) : (
            <div>
              You are not logged in
              <br></br>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          <br></br>
          <Profile />
        </div>
      )}
      ;
    </div>
  );

}
