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
            if (typeof (content) === "object") // when there is a list inside of a section.
                return content.map(el => {
                    if (typeof (el) === "object") // when there is a list with sub-lists inside of a section.
                        return toInput(Object.values(el))

                    return toInput(el) // at this point, the element is a simple value, triggering the conditional below.
                })

            else return <input key={uniqid()} defaultValue={content}></input>
        }
        this.props.removeHandlers()
        const titleInput = toInput(elements[0])
        const contentInput = toInput(elements[1])
        this.props.titleHandler(titleInput)
        this.props.contentHandler(contentInput)
    }

    render() {
        return <button key={uniqid()} className={[this.parentClass, "editBtn"].join(" ")}
            onClick={() => {
                this.elementsToInput(this.props.sectionContent)
            }}>Edit</button>
    }
}

export default EditBtn