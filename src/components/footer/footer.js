import './footer.css';
import {ReactComponent as Github} from '../../img/github.svg'
import {ReactComponent as Linkedin} from '../../img/linkedin.svg'
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <div className="footer">
            <a href="https://github.com/LeaMarco">
            <Github className="footerIcon" />
            </a>                
            <a href="https://www.linkedin.com/in/mmleandro/">
            <Linkedin className="footerIcon"/>
            </a> 
        </div>
    )
}