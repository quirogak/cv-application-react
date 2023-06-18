import { Component } from "react";
import "../styles/buttons.css"

class EditBtn extends Component {
    constructor(props) {
        super(props)
        this.parentClass = this.props.parentClass
        this.elementsToInput = this.elementsToInput.bind(this)
    }

    elementsToInput(elements) {
        this.props.contentHandler(<input defaultValue={elements[1]}></input>)
    }

    render() {
        return <button className={[this.parentClass, "editBtn"].join(" ")} onClick={() => this.elementsToInput(this.props.sectionContent)}>Edit</button>
    }
}

export default EditBtn