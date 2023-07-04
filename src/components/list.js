import uniqid from "uniqid";

const List = (props) => {
  const renderList = (listArr) => {
    // if the given list contains sub-lists
    if (typeof listArr[0] === "object")
      return listArr.map(
        (
          el //render the title and render the given list recursively.
        ) => (
          <figure key={uniqid()}>
            <figcaption>
              {el.title}
              {renderList(el.content)}
            </figcaption>
          </figure>
        )
      );

    return listArr.map((el) => (
      <li key={uniqid()} className="item">
        {el}
      </li>
    ));
  }
  return <ul>{renderList(props.content)}</ul>;
}

export default List;
