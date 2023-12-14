import { NavLink } from "react-router-dom";
import './Header.css'
import { BsEnvelope } from "react-icons/bs";
import { BiBasketball } from "react-icons/bi";

const Header = () => {
    return (
        <div className=" headerContainer">
            <div className=" heder1">

            </div>
            <div className=" heder2">
                <nav id="sidebar">
                    <NavLink style={{ textDecoration: 'none', color: 'gray' }} to={"/portfolio"}>Portfolio</NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'gray' }} to={'/blog'}>Blog</NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'gray' }} to={'/about'}>About</NavLink>
                </nav>
                <div className="partOfHeader">
                    <BiBasketball />
                    <BsEnvelope />
                </div>
            </div>
        </div>
    );
};

export default Header;