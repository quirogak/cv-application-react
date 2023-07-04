import "../styles/section.css";
import List from "./list";
import EditBtn from "./editButton";
import uniqid from "uniqid";
import React, { useState } from "react";

const Section = (props) => {

  const [currentContent, setCurrentContent] = useState(props.content)
  const [currentTitle, setCurrentTitle] = useState(props.title)
  const [eventHandlers, setEventHandlers] = useState(true)

  const getContent = (content) => {
    const currentValue = content.value;
    //if the content is multi-dimensional, we call getContent recursively on each element, so they can be returned using the logic below.
    if (content.length > 1)
      return content.map((el) => {
        return getContent(el);
      });

    //when the content has a value.
    if (currentValue)
      if (typeof currentValue === "object")
        // when the current value is a list.
        return <List key={uniqid()} content={currentValue}></List>;
      else return currentValue;
    else return content; //when the content is directly a component.
  }

  const genButton = (component) => {
    if (typeof currentContent[1] === "object") return; // avoid generating duplicated edit buttons.
    const content = currentContent;
    const contentWithButton = [content, component];
    setCurrentContent(contentWithButton)
  }

  const contentHandler = (content) => {
    setCurrentContent(content)
  }

  const titleHandler = (content) => {
    setCurrentTitle(content)
  }

  const removeButtons = () => {
    if (currentContent.length > 1) {
      setCurrentContent(currentContent[0]) // currentContent[0] it's the initial content without the buttons.
    }
  }

  const genEditButton = () => {

    return genButton(
      <EditBtn
        key={uniqid()}
        sectionContent={[
          currentTitle,
          currentContent.value,
        ]}
        className={props.class}
        contentHandler={contentHandler}
        titleHandler={titleHandler}
        eventHandlers={setEventHandlers}
      ></EditBtn>
    );
  }

  return (
    <section
      onMouseEnter={eventHandlers ? () => genEditButton() : null}
      onMouseLeave={eventHandlers ? () => removeButtons() : null}
      className={props.class}
    >
      <div className={"title " + props.class}>
        {currentTitle} <hr></hr>
      </div>
      <div className={"content " + props.class}>
        {getContent(currentContent)}
      </div>
    </section>
  );

}

export default Section;