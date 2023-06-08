import { Component } from "react";
import "../styles/section.css"

class Section extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section>
                <div className="title">{this.props.title}</div>
                <div className="info">
                </div>
            </section>
        )
    }
}

export default Section