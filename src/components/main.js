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
    content: [
        "Leadership",
        "Communication",
        "Active listening",
        "Flexibility",
        "Verbal skills"
    ]
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

const educationText = [
    "B.S. Computer Science",
    "Massachusetts Institute of Technology",
    "Cambridge, MA",
    "2018 - 2023",
    "GPA: 3.97 / 5.00 cumulative",
]


const practicalText = [
    "Software Engineer",
    "Google",
    "Cambridge 355 Main Street",
    "20XX - Today",
    "Description about your responsabilities on this job.",
    "Additional Comment."
]

class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <div id="cv-page">
                    <article id="page-header">
                        <Section class="your-name" title="Your Name" content={{ value: "your position" }}></Section>
                    </article>
                    <article id="main-info">
                        <div id="left-side">
                            <Section class="contact" title="Contact" content={{ value: contactList, }} ></Section>
                            <Section class="skills" title="Skills" content={{ value: [softSkills, technicalSkills] }}></Section>
                        </div>
                        <div id="right-side">
                            <Section class="profile" title="Profile" content={{ value: profileText }}></Section>
                            <Section class="practical-experience" title="Practical Experience" content={{ value: practicalText }}></Section>
                            <Section class="educational-experience" title="Educational Experience" content={{ value: educationText }}></Section>
                        </div>
                    </article>
                </div>
            </main>
        )
    }
}

export default Main