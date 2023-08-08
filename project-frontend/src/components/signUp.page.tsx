import { Logo } from "./logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  let navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      userName: data.get("userName"),
      password: data.get("password"),
      country: data.get("country"),
     
    };
    console.log(form)

     axios.post("http://localhost:4000/user/post", form, {
      signal: AbortSignal.timeout(5000)
     }).then((res)=> {
      
      navigate("/login");
      console.log(res.request.response.status)

     }).catch(err=>{

      
     })
    
  };
  return (
    <div className="content-center items-center ml-10">
      <Logo />

      <div className="content-center m-9">
        Sign Up
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            className="border-solid outline-black m-9 "
            required
          ></input>

          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            className="border-solid  outline-black m-9 "
            required
          ></input>

          <input
            type="text"
            placeholder="userName"
            name="userName"
            className="border-solid outline-black m-9 "
            required
          ></input>

          <input
            type="email"
            placeholder="email"
            name="email"
            className="border-solid outline-black m-9 "
            required
          ></input>

          <input
            type="password"
            placeholder="password"
            name="password"
            className="border-solid outline-black m-9 "
            required
          ></input>

          <input
            type="text"
            placeholder="country"
            name="country"
            className="border-solid outline-black m-9 "
            required
          ></input>

          {/* <input
            type="text"
            placeholder="YYYY"
            name="BirthYear"
            className="border-solid outline-black m-9 required"
          ></input> */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center m-9"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
