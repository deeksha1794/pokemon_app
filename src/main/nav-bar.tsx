import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';
const NavBar = (props) => {

    return (
        <div className="pokemon-nav">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={require("../025.png")} alt={"icon"} />Pokemon</NavbarBrand>
            </Navbar>
        </div>
    );
}

export default NavBar;