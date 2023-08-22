import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';
export function searchHandler(e: any, cornerList: any, setQuery: any) {
  e.preventDefault();

  const data = new FormData(e.currentTarget);
  const form = {
    search: data.get("search"),
  };

  setQuery(form.search);

  return form;
}

export function SearchBarResult(props: {
  cornerList: any;
  query: any;
  setChosenCorner: any;
  chosenCorner: any;
}) {

  let navigate = useNavigate();

  const searchResult = props.cornerList.filter((i: any) =>
    i.name.includes(props.query)
  );
  return (
    <>
      <div>
        {props.query && (
          <div>
            Your searches::
            {searchResult.map((i: any) => {
              return (
                <div>
                  <li>
                    <img
                      src={i.profilePictureUrl}
                      alt="horse"
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
                    <button
                      onClick={() => {
                        props.setChosenCorner(i.id);
                        navigate("/cornerInfo");

                      }}
                      className="my-5 ml-20 mb-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    >
                      Join
                    </button>{" "}
                  </li>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
