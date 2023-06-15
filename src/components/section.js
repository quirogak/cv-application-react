import { Component } from "react";
import "../styles/section.css"
import List from "./list";
import EditBtn from "./editButton";

class Section extends Component {
    constructor(props) {
        super(props)
        this.getContent = this.getContent.bind(this)
        this.genEditButton = this.genEditButton.bind(this)

        this.state = {
            currentContent: this.props.content //aqui puedo ingresar el contenido que quiero, y también empezar a hacer la lógica para que ese contenido aparezca junto con el botón de Edit.
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
                return <List content={currentValue}></List>
            else return currentValue

        //when the content is directly a component.
        else return content
    }

    genEditButton() {
        const content = this.props.content
        const contentWithButton = [content, <EditBtn></EditBtn>]
        this.setState({
            currentContent: contentWithButton
        })
    }

    render() {
        const className = this.props.title.toLowerCase()
        return (
            <section onMouseEnter={() => this.genEditButton()} className={(className)}>
                <div className="title">{this.props.title} <hr></hr></div>
                <div className="content">{this.getContent(this.state.currentContent)}</div>
            </section>
        )
    }
}

export default Section