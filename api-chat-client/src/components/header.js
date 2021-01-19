import { Link } from "react-router-dom"
import Navigation from "./Navigation/navigation"

const Header = ({isAuth}) => {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-brand">
                    <Link to="/" className="header-link">Dev</Link>
                </h1>
                <Navigation isAuth={isAuth} />
            </div>
        </header>
    )
}

export default Header