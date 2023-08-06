import { Logo } from "./logo";
import {Link} from "react-router-dom";

export function RecommendationPage() {
  return (
    <div className="content-center ml-10">
      <Logo />
      <br />
      <br />
      So that we can show you creators that match your interest,
      <br />
      kindly choose the categories you are interested in
      <br />
      <br />
      Entertainment
      <input type="checkbox" name="entertainment" value="entertainment"></input>
      <br />
      Crypto
      <input type="checkbox" name="crypto" value="crypto"></input>
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center ">
        <Link to="/match">Continue</Link>
      </button>
    </div>
  );
}
