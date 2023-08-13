import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type Corner = {
  name: string;
  description: string;
  numberOfTokensNeededToJoin: number;
  ownerId: string;
  profilePictureUrl: string;
  category: string;
};

export function ListCorners(props: { cornerList: any; setCornerList: any }) {
    let navigate = useNavigate();

  function list() {
    navigate('/profile')
    console.log("ksksksksksksksk");
    return <div></div>;
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/corner")
      .then((res) => props.setCornerList(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      Available Corners you can Join
      <br></br>
      <br></br>
      <div>
        {props.cornerList.map((i: any) => {
          return (
            <div className="container mx-auto">
              <li>
                <img
                  src={i.profilePictureUrl}
                  alt="horse"
                  width="100"
                  height="300"
                  className="rounded-lg inline-flex"
                />

                {"   " + i.name +
                  " " +
                  i.description +
                  " " +
                  i.numberOfTokensNeededToJoin +
                  " " +
                  i.category +
                  " "}

                <button
                  onClick={list}
                  className="my-5 ml-20 mb-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  Join
                </button>
              </li>

              <br></br>
            </div>
          );
        })}
      </div>
    </>
  );
}
