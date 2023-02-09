import React from "react";

function Navbar() {

    return (
        <nav className="navbar navbar-light bg-danger">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Movie</a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Your Suggestion" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Submit</button>
                </form>
            </div>
        </nav>
    );
}
export default Navbar;

