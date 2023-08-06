import {Link} from 'react-router-dom';
import { Logo } from "./logo";

export function MatchRecommendation(){
  return (
    <div className="content-center ml-10">
      <Logo />
      We have matched you with the following creators based on your passions
      <li>{"kdkdk"}</li>
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center ">
        <Link to="/home">Continue</Link>
      </button>
    </div>
  );
}