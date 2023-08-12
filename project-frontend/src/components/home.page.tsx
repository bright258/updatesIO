import { Logo } from "./logo";
import { Link } from "react-router-dom";
import { ListCorners, Corner } from "./listCorner";
import { useState, useEffect } from "react";
import { SearchBarResult, searchHandler } from "./searchBar";

export function HomePage(props: { userIdentification: any }) {
  const [cornerList, setCornerList] = useState<Corner[]>([]);
  const [query, setQuery] = useState();
  const [chosenCorner, setChosenCorner] = useState()

  useEffect(()=> {
    if(chosenCorner){
      
      
    }

  })

  return (
    <>
      <div className="content-center ml-10">
        <Logo />
        <br />
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <Link to="/profile">Profile {props.userIdentification}</Link>
        </button>
        <div className="p-6 max-w-xl mx-auto bg-blue-300 rounded-xl shadow-lg flex items-center space-x-4 w-screen">
          <div></div>
          <div className="items-center w-screen">
            <div className="text-xl font-small items-center text-black ">
              <form
                onSubmit={(event) => searchHandler(event, cornerList, setQuery)}
              >
                <input
                  name="search"
                  placeholder="search corner"
                  className="text-xl font-small max-w-xl text-black mx-auto w-screen h-20"
                ></input>

                <button className="my-5 ml-20 mb-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  search
                </button>
              </form>
            </div>
          </div>
        </div>
        <br></br>
        <SearchBarResult
          query={query}
          cornerList={cornerList}
          setChosenCorner={setChosenCorner}
        />
        <br></br>
        <br></br>

        <hr></hr>
        <ListCorners cornerList={cornerList} setCornerList={setCornerList} />
      </div>
    </>
  );
}
