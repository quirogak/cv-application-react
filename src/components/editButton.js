import { Component } from "react";
import "../styles/buttons.css"
import uniqid from "uniqid"

class EditBtn extends Component {
    constructor(props) {
        super(props)
        this.parentClass = this.props.parentClass
        this.elementsToInput = this.elementsToInput.bind(this)
    }

    elementsToInput(elements) {
        const toInput = (content) => {
            if (typeof (content) === "object")
                return content.map(el => {
                    return <input key={uniqid()} defaultValue={el}></input>
                })
            else return <input key={uniqid()} defaultValue={content}></input>
        }
        const titleInput = toInput(elements[0])
        const contentInput = toInput(elements[1])
        this.props.titleHandler(titleInput)
        this.props.contentHandler(contentInput)
    }

    render() {
        return <button key={uniqid()} className={[this.parentClass, "editBtn"].join(" ")} onClick={() => this.elementsToInput(this.props.sectionContent)}>Edit</button>
    }
}

export default EditBtn