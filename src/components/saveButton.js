import uniqid from "uniqid";

const SaveBtn = (props) => {

  const getInputValues = (parentClass) => {
    const titleParent = document.getElementsByClassName(
      "title " + parentClass
    )[0];
    const contentParent = document.getElementsByClassName(
      "content " + parentClass
    )[0];
    const titleChildren = titleParent.childNodes[0].value;
    const contentChildren = contentParent.childNodes;

    if (contentChildren.length > 2) {
      // when the contentChildren has more than one element (excluding save button).
      const childrenValues = [];
      for (let i = 0; i < contentParent.childNodes.length - 1; i++) {
        // we substract one to avoid the save button itself.
        const element = contentParent.childNodes[i].value;
        childrenValues.push(element);
      }
      return [titleChildren, childrenValues];
    }
    //when the content is a single element.
    const childrenValue = contentChildren[0].value;
    return [titleChildren, childrenValue];
  }

  const inputToElements = () => {
    const inputValues = getInputValues(props.className);
    props.contentHandler({ value: inputValues[1] })
    props.titleHandler(inputValues[0])
    props.eventHandlers(true);
  }
  return (
    <button className="saveBtn" id={uniqid()} onClick={inputToElements}>
      Save
    </button>
  );
}
export default SaveBtn;
