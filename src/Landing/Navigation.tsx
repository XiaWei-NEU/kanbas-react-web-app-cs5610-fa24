import { Link } from "react-router-dom";
export default function LandingNavigation() {
    return (
        <div id="wd-landing-navigation">
            <Link to="../Kanbas" id="wd-kanbas-link">Kanbas</Link><br />
            <Link to="../Labs" id="wd-labs-link">Labs</Link><br />
            <a href="https://github.com/XiaWei-NEU/kanbas-react-web-app-cs5610-fa24" id="wd-home-link">Source Code</a>
        </div>
    );
}