import { Component } from "react";
import "../styles/section.css"
import List from "./list";

class Section extends Component {
    constructor(props) {
        super(props)
        this.getContent = this.getContent.bind(this)
    }

    getContent() {
        const content = this.props.content
        if (content) {
            const currentValue = content.value
            if (typeof (currentValue) === "object") // when the current value is a list.
                return <List content={currentValue}></List>
            return currentValue
        }
        else return
    }

    render() {
        return (
            <section className={(this.props.title).toLowerCase()}>
                <div className="title">{this.props.title} <hr></hr></div>
                <div className="content">{this.getContent()}</div>
            </section>
        )
    }
}

export default Section