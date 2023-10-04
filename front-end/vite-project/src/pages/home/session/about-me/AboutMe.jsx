import { Fragment } from "react";
import './AboutMe.css'

const AboutMe = () =>{

    return (
        <Fragment>
            <div className="about-me-container">
                <h1>About Me</h1>
                <p>I am a programmer who focuses on developing a website that can be used for commercial, business, personal and internal organizational purposes.I like building websites with a friendly user interface and user experience so I can handle both frontend and backend.</p>
                <button><a href="#">My Resume</a></button>
            </div>
        </Fragment>
    )
};

export default AboutMe;