import "../styles/buttons.css";
import uniqid from "uniqid";
import SaveBtn from "./saveButton";

const EditBtn = (props) => {

  const elementsToInput = (elements) => {
    const toInput = (content) => {
      if (typeof content === "object")
        // when there is a list inside of a section.
        return content.map((el) => {
          if (typeof el === "object")
            // when there is a list with sub-lists inside of a section.
            return toInput(Object.values(el));

          return toInput(el); // at this point, the element is a simple value, triggering the conditional below.
        });
      else if (content.length > 100)
        // when the text is a parragraph.
        return <textarea key={uniqid()} defaultValue={content}></textarea>;

      return <input key={uniqid()} defaultValue={content}></input>;
    };

    const titleInput = toInput(elements[0]);
    const contentInput = toInput(elements[1]);

    props.eventHandlers(false); // remove onMouseEnter && onMouseLeave Handlers.
    props.titleHandler(titleInput);
    props.contentHandler([
      contentInput,
      <SaveBtn
        key={uniqid()}
        sectionContent={props.sectionContent}
        contentHandler={props.contentHandler}
        titleHandler={props.titleHandler}
        eventHandlers={props.eventHandlers}
        className={props.className}
      ></SaveBtn>,
    ]);
  }
  return (
    <button
      key={uniqid()}
      className={[props.parentClass, "editBtn"].join(" ")}
      onClick={() => {
        elementsToInput(props.sectionContent);
      }}
    >
      Edit
    </button>
  );
}

export default EditBtn;
