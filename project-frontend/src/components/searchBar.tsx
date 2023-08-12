
export function searchHandler(e: any, cornerList: any, setQuery: any) {
  e.preventDefault();

  const data = new FormData(e.currentTarget);
  const form = {
    search: data.get("search"),
  };
  
  setQuery(form.search);

  return form;
}

export function SearchBarResult(props: { cornerList: any; query: any }) {
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
                  <li>{i.name}</li>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
