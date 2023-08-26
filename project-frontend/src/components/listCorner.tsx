import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function ListCorners(props: {
  cornerList: any;
  setCornerList: any;
  setChosenCorner: any;
  joinedCorner: any
}) {
  let navigate = useNavigate();



  useEffect(() => {
    axios
      .get("http://localhost:4000/corner/")
      .then((res) => props.setCornerList(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h1>Available Corners you can Join</h1>
      <br></br>
      <br></br>
      <div>
        {props.cornerList.map((i: any) => {
          return (
            <div className="container mx-auto">
              <li>
                <img
                  src={i.profilePictureUrl}
                  alt="img"
                  width="100"
                  height="300"
                  className="rounded-lg inline-flex"
                />

                {"   " +
                  i.name +
                  " " +
                  i.description +
                  " " +
                  i.numberOfTokensNeededToJoin +
                  " " +
                  i.category +
                  " "}
                <span>
                  {props.joinedCorner.includes(i.id) ? (
                    <button
                      onClick={() => {
                        props.setChosenCorner(i.id);
                        navigate("/corner");
                      }}
                      className="my-5 ml-20 mb-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    >
                      enter
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        props.setChosenCorner(i.id);
                        navigate("/cornerInfo");
                      }}
                      className="my-5 ml-20 mb-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    >
                      Join
                    </button>
                  )}
                </span>
              </li>

              <br></br>
            </div>
          );
        })}
      </div>
    </>
  );
}
