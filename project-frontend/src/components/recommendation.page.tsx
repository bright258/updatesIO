import { Logo } from "./logo";
import { useNavigate} from "react-router-dom";

export function RecommendationPage( props: { setInterestMap: any } ) {
  let navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      entertainment: data.get("entertainment"),
      crypto: data.get("crypto"),
    };
    props.setInterestMap(form);
    navigate('/home');
  }

  return (
    <div className="content-center ml-10">
      <Logo />
      <br />
      <br />
      So that we can show you creators that match your interest,
      <br />
      kindly choose one category you are interested in
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        Entertainment
        <input
          type="checkbox"
          name="entertainment"
          value="entertainment"
        ></input>
        <br />
        Crypto
        <input type="checkbox" name="crypto" value="crypto"></input>
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center ">
          Continue
        </button>
      </form>
    </div>
  );
}
