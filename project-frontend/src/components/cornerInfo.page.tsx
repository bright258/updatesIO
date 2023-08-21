import {useEffect} from 'react';


export function CornerInfo(props: { chosenCorner: any; chosenCornerObject: any }) {
  // let navigate = useNavigate()

  return (
    <div>
      {/* {props.chosenCorner} */}
      {props.chosenCornerObject.name}
      <br></br>
      <br></br>
      {props.chosenCornerObject.description}
      <br></br>
      <br></br>
      {props.chosenCornerObject.category}
      <br></br>
      <br></br>
      {props.chosenCornerObject.numberOfTokensNeededToJoin}
      Hell0
    </div>
  );
}


// setChosenCorner somewhere else
