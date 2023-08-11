import axios from "axios";
import {useState, useEffect} from 'react';

export type Corner = {
  name: string;
  description: string;
  numberOfTokensNeededToJoin: number;
  ownerId: string;
  profilePictureUrl: string;
  category: string;
};




export function ListCorners() {
  const [cornerList, setCornerList] = useState<Corner[]>([]);

  useEffect(()=>{
    axios
    .get("http://localhost:4000/corner")
    .then((res) => 
    setCornerList(res.data))
    .catch(err => console.log(err))


  })


    return (
      <>
        Available Corners you can Join 
        <br></br> 
        <br></br>
        
        <div>{cornerList.map((i)=>{
         
          return (
            <div className="container mx-auto">
              <li>
                {i.name +
                  " " +
                  i.description +
                  " " +
                  i.numberOfTokensNeededToJoin}
              </li>
              <br></br>
            </div>
          );
        })}</div>
      </>
    );
    
  
}
