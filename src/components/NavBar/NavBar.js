import React from 'react';
import './NavBar.scss'
import AuthComponent from '../AuthComponent/AuthComponent';
const NavBar = () => {
    return (
        <nav className="navbar">
           <div>
                <i className="icon google red large"/>
            </div>     
           <div>
               <AuthComponent/>
            </div>     
        </nav>
    );
}
 
export default NavBar;