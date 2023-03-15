import "./Footer.css"
const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <p>&copy;{date.getFullYear()} #VANLIFE</p>
        </footer>
    )
}

export default Footer;