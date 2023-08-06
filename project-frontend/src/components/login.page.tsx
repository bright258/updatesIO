import {Logo} from './logo';
import { Link } from "react-router-dom";


export function Login(){
  return (
    <div className="content-center ml-10">
      <Logo />
      <br />
      <br />
      <div className="content-center">
        Log In
        <br />
        <br />
        <input
          type="text"
          placeholder="UserName"
          name="UserName"
          className="border-solid outline-black"
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="Password"
          name="Password"
          className="border-solid  outline-black"
        ></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center ">
          <Link to="/welcome">Submit</Link>
        </button>
      </div>
    </div>
  );
}