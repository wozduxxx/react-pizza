import React from 'react';
import logo from '../assets/img/pizza-logo.png';
import {Link} from "react-router-dom";
import Search from "./Search";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width={50} height={50} src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>Tasty Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Search/>
                <div className="header__cart">
                    <Link to="/cart" className="button button--cart">
                        <span>520 ₽</span>
                        <div className="button__delimiter"></div>
                        <span>3</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;