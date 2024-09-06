
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
                <Link linkTo="/" linkName="Home"/>
                <Link linkTo="/Enterprise" linkName="Enterprise"/>
                <Link linkTo="/Interview" linkName="Interview"/>
                <Link linkTo="/Musee" linkName="Musée"/>
                <Link linkTo="/Gallery" linkName="Galerie"/>
                <Link linkTo="/Conclusion" linkName="Conclusion"/>
                </ul>
            </nav>
        </header>
    );
}

