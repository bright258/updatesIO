import { Updates } from "./updates";

export function CornerPage(props: {
  chosenCorner: any;
  updates: any;
  chosenCornerObject: any;
  joinedCorner: any;
}) {
  return (
    <>
      <div>
        {props.joinedCorner.includes(props.chosenCorner) ? (
          <>
            <div> Welcome to {props.chosenCornerObject.name}</div>
            <Updates updates={props.updates} />
          </>
        ) : (
          <div>You don't belong here</div>
        )}
      </div>
    </>
  );
}
