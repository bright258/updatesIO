import { PaystackButton } from "react-paystack";
import axios from "axios";

export function CornerInfo(props: {
  chosenCorner: any;
  chosenCornerObject: any;
  userEmail: any;
  userIdentification: any;
  setJoinedCorner: any;
  joinedCorner: any;
}) {
  return (
    <div>
      {props.chosenCornerObject.name}
      <br></br>
      <br></br>
      {props.chosenCornerObject.description}
      <br></br>
      <br></br>
      {props.chosenCornerObject.category}
      <br></br>
      {props.chosenCornerObject.numberOfTokensNeededToJoin}
      <br></br>
      <br></br>
      <div>
        {props.joinedCorner.includes(props.chosenCornerObject.id) ? (
          <div>You are already a member of this corner already</div>
        ) : (
          <PaystackButton
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center  m-9"
            publicKey={"pk_test_26ac854f3289285d270632ffea5b846e7ab86f77"}
            email={props.userEmail}
            amount={
              parseInt(props.chosenCornerObject.numberOfTokensNeededToJoin) *
              100
            }
            onSuccess={(res) => {
              let form = {
                senderId: props.userIdentification,
                receiverId: props.chosenCornerObject.ownerId,
                amount: parseInt(
                  props.chosenCornerObject.numberOfTokensNeededToJoin
                ),
                transactionId: res.trxref,
                status: res.status,
                message: `${res.message} Corner subscription`,
              };
              axios
                .post(`http://localhost:4000/transactions`, form)
                .then(() => {
                  props.setJoinedCorner((arr: any) => [
                    ...arr,
                    props.chosenCornerObject.id,
                  ]);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            onClose={() => {
              alert("You are cancelling this transaction");
            }}
            text="Pay to join"
          />
        )}
      </div>
    </div>
  );
}
