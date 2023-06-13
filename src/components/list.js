import { Component } from "react";
import uniqid from "uniqid"

class List extends Component {
    constructor(props) {
        super(props)
        this.renderList = this.renderList.bind(this)
    }

    renderList(listArr) {
        return listArr.map(el => <li className="item" key={uniqid()}>{el}</li>)
    }
    render() {
        return (<ul>{this.renderList(this.props.content)}</ul>)
    }
}


export default List