import { Component } from "react";
import "../styles/section.css"
import List from "./list";
import EditBtn from "./editButton";
import uniqid from "uniqid"

class Section extends Component {
    constructor(props) {
        super(props)
        this.getContent = this.getContent.bind(this)
        this.genEditButton = this.genEditButton.bind(this)
        this.removeButtons = this.removeButtons.bind(this)
        this.contentHandler = this.contentHandler.bind(this)
        this.titleHandler = this.titleHandler.bind(this)

        this.className = this.props.title.toLowerCase()

        this.state = {
            currentContent: this.props.content, //default value
            currentTitle: this.props.title
        }
    }

    getContent(content) {
        const currentValue = content.value
        //if the content is multi-dimensional, we call getContent recursively on each element, so they can be returned using the logic below.
        if (content.length > 1)
            return content.map(el => {
                return this.getContent(el)
            })

        //when the content has a value.
        if (currentValue)
            if (typeof (currentValue) === "object") // when the current value is a list.
                return <List key={uniqid()} content={currentValue}></List>
            else return currentValue

        //when the content is directly a component.
        else return content
    }

    genEditButton() {
        if (typeof (this.state.currentContent[1]) === "object") return // avoid generating duplicated edit buttons.
        const content = this.state.currentContent
        const contentWithButton = [
            content,
            <EditBtn key={uniqid()} sectionContent={[this.className, content.value]}
                contentHandler={this.contentHandler} titleHandler={this.titleHandler}>
            </EditBtn>
        ]
        this.setState({
            currentContent: contentWithButton
        })
    }

    removeButtons() {
        this.setState({
            currentContent: this.props.content
        })
    }

    contentHandler(content) {
        this.setState({
            currentContent: content
        })
    }

    titleHandler(content) {
        this.setState({
            currentTitle: content
        })
    }

    render() {
        return (
            <section onMouseEnter={this.genEditButton} onMouseLeave={this.removeButtons} id={this.className} className={this.className}>
                <div className="title">{this.state.currentTitle} <hr></hr></div>
                <div className="content">{this.getContent(this.state.currentContent)}</div>
            </section>
        )
    }
}

export default Section