import { Component } from "react";
import Section from "./section";
import "../styles/main.css"

class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <div id="cv-page">
                    <article id="page-header">
                        <Section title="Your Name"></Section>
                    </article>
                    <article id="main-info">
                        <div id="left-side">
                            <Section title="Contact"></Section>
                            <Section title="Skills"></Section>
                        </div>
                        <div id="right-side">
                            <Section title="Profile"></Section>
                            <Section title="Educational Experience"></Section>
                            <Section title="Practical Experience"></Section>
                        </div>
                    </article>
                </div>
            </main>
        )
    }
}

export default Main