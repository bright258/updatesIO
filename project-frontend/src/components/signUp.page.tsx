import { Logo } from './logo';
import {Link} from 'react-router-dom';


export function SignUp (){
  return (
    <div className="content-center items-center ml-10">
      <Logo />
      <br />
      <br />
      <div className="content-center">
        Sign Up
        <br />
        <br />
        <input
          type="text"
          placeholder="FirstName"
          name="First Name"
          className="border-solid outline-black"
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="lastName"
          name="lastName"
          className="border-solid  outline-black"
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="userName"
          name="userName"
          className="border-solid outline-black"
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          className="border-solid outline-black"
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="password"
          name="password"
          className="border-solid outline-black"
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="country"
          name="country"
          className="border-solid outline-black"
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="country"
          name="country"
          className="border-solid outline-black"
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="dateOfBirth"
          name="country"
          className="border-solid outline-black"
        ></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center ">
          <Link to="/login">Submit</Link>
        </button>
      </div>
    </div>
  );
}