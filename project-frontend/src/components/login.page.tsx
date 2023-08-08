import { Logo } from "./logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export function Login() {
  let navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      username: data.get("username"),
      password: data.get("password"),
    };

     axios
      .post("http://localhost:4000/auth/", form)
      .then((res) => {
        if (res.status === 201){
          console.log(res)
          navigate("/welcome");
           toast.success("Welcome", {
             position: toast.POSITION.TOP_RIGHT,
           });

        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          toast.error("Invalid login details", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  
  };
  return (
    <div className="content-center ml-10">
      <Logo />

      <div className="content-center m-9">
        Log In
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            className="border-solid outline-black m-9 "
            required
          
          ></input>
          <input
            type="text"
            placeholder="password"
            name="password"
            className="border-solid  outline-black m-9 "
            required
          ></input>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center  m-9"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
