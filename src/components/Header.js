import React from 'react';

const Header = ({title}) => {

    return (
        <header id="header">

            {/* Menu */}
            <nav id="menu">
                <div className="nav-wrapper light-blue darken-2">
                    <a href="#!" className="brand-logo">{title}</a>
                </div>
            </nav>

        </header>
    );

}

export default Header;