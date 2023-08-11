import { Logo } from "./logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "firebase/app";
import "firebase/storage";

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

    // Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, and one underscore, and it
    // must be 8-16 characters long.

    axios
      .post("http://localhost:4000/user/post", form, {
        signal: AbortSignal.timeout(5000),
      })
      .then((res) => {
        console.log(res)
        navigate("/login");
        toast.success(`Success`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("bad", err.request.response);
          toast.error(err.request.response, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
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
            className="border-solid outline-blackshadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            required
          ></input>

          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            className="border-solid outline-blackshadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            required
          ></input>

          <input
            type="text"
            placeholder="userName"
            name="userName"
            className="border-solid outline-blackshadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
            required
          ></input>

          <input
            type="email"
            placeholder="email"
            name="email"
            className="border-solid outline-blackshadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            required
          ></input>

          <input
            type="password"
            placeholder="password"
            name="password"
            className="border-solid outline-blackshadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            required
          ></input>

          <input
            type="text"
            placeholder="country"
            name="country"
            className="border-solid outline-blackshadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            required
          ></input>

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
