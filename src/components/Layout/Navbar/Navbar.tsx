import { Link } from "react-router-dom";

const Navbar = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <Link to="/">Calculator</Link>
                </li>
            </ul>
        </nav>
    </>);
}

export default Navbar;