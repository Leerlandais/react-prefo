
import Link from "./Link";
export default function Header () {
    return (
        <header>
        <nav>
            <div>
                <hr/>
                <h1 id="hspec">Site Préformation de Lee Brennan</h1>
                <hr/>
            </div>
            <ul>
                <Link className={"myLink"} linkTo="/" linkName="Home"/>
                <Link className={"myLink"} linkTo="/Enterprise" linkName="Enterprise"/>
                <Link className={"myLink"} linkTo="/Interview" linkName="Interview"/>
                <Link className={"myLink"} linkTo="/Musee" linkName="Musée"/>
                <Link className={"myLink"} linkTo="/Gallery" linkName="Galerie"/>
                <Link className={"myLink"} linkTo="/Conclusion" linkName="Conclusion"/>
                </ul>
            </nav>
        </header>
    );
}

