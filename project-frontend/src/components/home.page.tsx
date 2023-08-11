import { Logo } from "./logo";
import {Link} from "react-router-dom";
import { ListCorners, Corner } from "./listCorner";
import {useState, useEffect} from 'react';

export function HomePage(props: {userIdentification: any}) {

  

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
              <input
                placeholder="search creator or category"
                className="text-xl font-small max-w-xl text-black mx-auto w-screen h-20"
              ></input>

              <button className="my-5 ml-20 mb-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                search
              </button>
            </div>
          </div>
        </div>
        <ListCorners  />
      </div>
    </>
  );
}
