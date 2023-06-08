import { Component } from "react";
import '../styles/header.css'

class Header extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        )
    }
}

export default Header