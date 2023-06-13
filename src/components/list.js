import { Component } from "react";
import uniqid from "uniqid"

class List extends Component {
    constructor(props) {
        super(props)
        this.renderList = this.renderList.bind(this)
    }

    renderList(listArr) {
        if (typeof (listArr[0]) === "object") // if the given list contains sub-lists

            return listArr.map(el => //render the title and render the given list recursively.
                <figure>
                    <figcaption>{el.title}{this.renderList(el.content)}</figcaption>
                </figure>)

        return listArr.map(el => <li className="item" key={uniqid()}>{el}</li>)
    }
    render() {
        return (<ul>{this.renderList(this.props.content)}</ul>)
    }
}


export default List