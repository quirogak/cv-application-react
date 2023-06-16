import { Component } from "react";
import "../styles/buttons.css"

class EditBtn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <button className={[this.props.parentClass, "editBtn"].join(" ")}>Edit</button>
    }
}

export default EditBtn