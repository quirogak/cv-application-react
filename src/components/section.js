import { Component } from "react";
import "../styles/section.css";
import List from "./list";
import EditBtn from "./editButton";
import uniqid from "uniqid";

class Section extends Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
    this.genEditButton = this.genEditButton.bind(this);
    this.removeButtons = this.removeButtons.bind(this);
    this.contentHandler = this.contentHandler.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.removeSectionHandlers = this.removeSectionHandlers.bind(this);
    this.addSectionHandlers = this.addSectionHandlers.bind(this);
    this.genButton = this.genButton.bind(this);

    this.className = this.props.class;

    this.state = {
      currentContent: this.props.content, //default values
      currentTitle: this.props.title,
      removeButtons: this.removeButtons,
      genEditButton: this.genEditButton,
    };
  }

  getContent(content) {
    const currentValue = content.value;
    //if the content is multi-dimensional, we call getContent recursively on each element, so they can be returned using the logic below.
    if (content.length > 1)
      return content.map((el) => {
        return this.getContent(el);
      });

    //when the content has a value.
    if (currentValue)
      if (typeof currentValue === "object")
        // when the current value is a list.
        return <List key={uniqid()} content={currentValue}></List>;
      else return currentValue;
    else return content; //when the content is directly a component.
  }

  genButton(component) {
    if (typeof this.state.currentContent[1] === "object") return; // avoid generating duplicated edit buttons.
    const content = this.state.currentContent;
    const contentWithButton = [content, component];
    this.setState({
      currentContent: contentWithButton,
    });
  }

  genEditButton() {
    return this.genButton(
      <EditBtn
        key={uniqid()}
        sectionContent={[
          this.state.currentTitle,
          this.state.currentContent.value,
        ]}
        className={this.className}
        contentHandler={this.contentHandler}
        titleHandler={this.titleHandler}
        removeHandlers={this.removeSectionHandlers}
        addHandlers={this.addSectionHandlers}
        genSaveButton={this.genSaveButton}
      ></EditBtn>
    );
  }

  removeButtons() {
    if (this.state.currentContent.length > 1)
      // check if there are buttons.
      this.setState({
        currentContent: this.state.currentContent[0], // currentContent[0] it's the initial content without the buttons.
      });
  }

  contentHandler(content) {
    this.setState({
      currentContent: content,
    });
  }

  titleHandler(content) {
    this.setState({
      currentTitle: content,
    });
  }

  removeSectionHandlers() {
    this.setState({
      genEditButton: null,
      removeButtons: null,
    });
  }

  addSectionHandlers() {
    this.setState({
      genEditButton: this.genEditButton,
      removeButtons: this.removeButtons,
    });
  }

  render() {
    return (
      <section
        onMouseEnter={this.state.genEditButton}
        onMouseLeave={this.state.removeButtons}
        className={this.className}
      >
        <div className={"title " + this.className}>
          {this.state.currentTitle} <hr></hr>
        </div>
        <div className={"content " + this.className}>
          {this.getContent(this.state.currentContent)}
        </div>
      </section>
    );
  }
}

export default Section;
