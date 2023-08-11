import { Logo } from "./logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export function Login(props: {
  setuserIdentification: any;
  setisLoggedIn: any;
  setNumberOfLogIns: any;
  numberOfLogIns: any;
}) {
  function parseJwt(token: string) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

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
        if (res.status === 201) {
          console.log(parseJwt(res.data).sub);
          props.setuserIdentification(parseJwt(res.data).sub);

          navigate("/welcome");

          toast.success(`Welcome`, {
            position: toast.POSITION.TOP_RIGHT,
          });
          props.setisLoggedIn(true);
          props.setNumberOfLogIns(props.numberOfLogIns + 1);
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

      <div className="content-center m-9 content-around">
        Log In
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            className="border-solid outline-blackshadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline content-around"
            required
          ></input>
          <input
            type="text"
            placeholder="password"
            name="password"
            className="border-solid outline-blackshadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline content-around"
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
