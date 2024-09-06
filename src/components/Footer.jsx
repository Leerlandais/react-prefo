import Link from "./Link";
export default function Footer() {
    return (
        <footer>
            <hr/>
            <h4 id="copyright">
                &copy; <Link linkTo={"http://leerlandais.com"} linkName={"Leerlandais"} />
            </h4>
            <hr/>
        </footer>
    )
}

