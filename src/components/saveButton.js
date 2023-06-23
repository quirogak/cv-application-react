import { Component } from "react";
import uniqid from "uniqid"

class SaveBtn extends Component {

    constructor(props) {
        super(props)

        this.getInputValues = this.getInputValues.bind(this)
        this.inputToElements = this.inputToElements.bind(this)
        this.parentClass = this.props.className
    }

    getInputValues(parentClass) {
        const titleParent = document.getElementsByClassName("title " + parentClass)[0]
        const contentParent = document.getElementsByClassName("content " + parentClass)[0]
        const titleChildren = titleParent.childNodes[0].value
        const contentChildren = contentParent.childNodes

        if (contentChildren.length > 2) { // when the contentChildren has more than one element (excluding save button).
            const childrenValues = []
            for (let i = 0; i < contentParent.childNodes.length - 1; i++) { // we substract one to avoid the save button itself.
                const element = contentParent.childNodes[i].value;
                childrenValues.push(element)
            }
            return [titleChildren, childrenValues]
        }
        //when the content is a single element.
        const childrenValue = contentChildren[0].value
        return [titleChildren, childrenValue]
    }

    inputToElements() {
        const inputValues = this.getInputValues(this.parentClass)
        this.props.titleHandler(inputValues[0])
        this.props.contentHandler({ value: inputValues[1] })
        this.props.addHandlers() // return original section mouseEvent handlers.
    }

    render() {
        return <button id={uniqid()} onClick={this.inputToElements}>Save</button>
    }

}


export default SaveBtn