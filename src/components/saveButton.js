import { Component } from "react";
import uniqid from "uniqid"

class SaveBtn extends Component {

    constructor(props) {
        super(props)

        this.getInputValues = this.getInputValues.bind(this)
        this.inputToElements = this.inputToElements.bind(this)
        this.parentClass = this.props.sectionContent[0]
    }

    getInputValues(parentClass) {
        const titleParent = document.getElementsByClassName("title " + parentClass)[0]
        const contentParent = document.getElementsByClassName("content " + parentClass)[0]

        const titleChildren = titleParent.childNodes[0].value
        const contentChildren = []

        for (let i = 0; i < contentParent.childNodes.length - 1; i++) { // we substract one to avoid the save button itself.
            const element = contentParent.childNodes[i].value;
            contentChildren.push(element)
        }

        return [titleChildren, contentChildren]
    }

    inputToElements() {
        const inputValues = this.getInputValues(this.parentClass)
        this.props.titleHandler(inputValues[0])
        this.props.contentHandler(inputValues[1])
        this.props.addHandlers() // return original section mouseEvent handlers.
    }

    render() {
        return <button id={uniqid()} onClick={this.inputToElements}>Save</button>
    }

}


export default SaveBtn