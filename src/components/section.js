import { Component } from "react";
import "../styles/section.css"

class Section extends Component {
    constructor(props) {
        super(props)
        this.getContent = this.getContent.bind(this)
        this.renderList = this.renderList.bind(this)
    }

    renderList(listArr) {
        return (<ul>{listArr.map(el => <li>{el}</li>)}</ul>)
    }

    getContent() {
        const content = this.props.content
        if (content) {
            const currentValue = content.value
            if (typeof (currentValue) === "object") // when the current value is a list.
                return this.renderList(currentValue)
            return currentValue
        }
        else return
    }

    render() {
        return (
            <section>
                <div className="title">{this.props.title} <hr></hr></div>
                <div className="content">{this.getContent()}</div>
            </section>
        )
    }
}

export default Section