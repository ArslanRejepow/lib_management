import React from 'react'

export default function Navbar(props){
    return(
        <div>
            <nav className={props.darkMode ? "navbar navbar-expand-lg navbar-light bg-light" :  "navbar navbar-expand-lg  navbar-dark bg-dark" } >
                
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <button className="nav-link border-0 bg-transparent" onClick={() => props.setCurrentPage('home')}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link border-0 bg-transparent" onClick={() => props.setCurrentPage('books')}>Kitaplar</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link border-0 bg-transparent" onClick={() => props.setCurrentPage('users')}>Ulanyjylar</button>
                    </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleDarkMode} id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Theme</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}