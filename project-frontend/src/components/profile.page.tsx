import { Link, useNavigate } from "react-router-dom";

export function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <h1>Your corners : </h1>
      <h1> corners you belong to : </h1>
      <h1> Number of tokens</h1>
      <h1> Buy more tokens</h1>

      <button className="my-5 ml-20 mb-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <Link to="/home">Go to home</Link>
      </button>
    </div>
  );
}
