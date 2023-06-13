import { Component } from "react";
import Section from "./section";
import "../styles/main.css"

const profileText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
const contactList = [
    "firstname@domain.com",
    "+1-212-456-7890",
    "477 James Drive Seymour, IN 47274",
    "www.yourwebsite.com"
]

const softSkills = {
    title: "Soft Skills",
    content: ["Leadership",
        "Communication",
        "Active listening",
        "Flexibility",
        "Verbal skills"]
}


const technicalSkills = {
    title: "Technical Skills",
    content: [
        "CSS",
        "HTML",
        "JavaScript",
        "Python",
        "React"
    ]
}

const educationText = []

const practicalText = []

class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <div id="cv-page">
                    <article id="page-header">
                        <Section title="Your Name" content={{ value: "your position" }}></Section>
                    </article>
                    <article id="main-info">
                        <div id="left-side">
                            <Section title="Contact" content={{ value: contactList, }} ></Section>
                            <Section title="Skills" content={{ value: [softSkills, technicalSkills] }}></Section>
                        </div>
                        <div id="right-side">
                            <Section title="Profile" content={{ value: profileText }}></Section>
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