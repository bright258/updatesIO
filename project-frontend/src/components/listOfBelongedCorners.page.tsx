export function CornersBelongedTo(props: { joinedCorner : any}) {
  return <div>
    {props.joinedCorner.map((i: any)=>{
      return (
        <div>
          <ul>
            <li>{i}</li>
          </ul>
        </div>
      );
    })}
  </div>;
}
