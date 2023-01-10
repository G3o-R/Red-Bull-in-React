import "../styles/Header.scss"
import { ReactComponent as MenuIcon } from "../images/menuHeaderButton.svg"
import { ReactComponent as UserIcon } from "../images/user.svg"
import { ReactComponent as SearchIcon } from "../images/search.svg"
import NavPill from "./NavPill"

function Header(){
    return(
        <header className="menu-header-content">
            <div className="menu-header">
                <div className="menu-left-button">
                <MenuIcon className="menu"/>
                <img src="https://resources.redbull.com/logos/redbullcom/v3/redbullcom-logo.svg"
                alt="Red Bull Logo" 
                className="Logo" />
                </div>
                <NavPill />
                <div className="menu-right-buttons">
                <UserIcon className="svg" id="user" />
                <SearchIcon className="svg" id="search" />
                </div>


            </div>
        </header>)
}

export default Header