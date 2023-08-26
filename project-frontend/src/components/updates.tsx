export function Updates(props: { updates: any }) {
  return (
    <div>
      Here are the updates{" "}
      <ul>
        {props.updates.map((i: any) => (
          <li>
            -- {i.content}
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
}
