import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#fdf5ff" }}>
            <div className="container-fluid">
                {/* Brand Logo */}
                <a className="navbar-brand" href="/">
                    <img
                        src="icon.png"
                        alt="Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-text-top me-2"
                    />
                    <span className="ms-2">Anna's Website</span>
                </a>

                {/* Toggle Button for Mobile View */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/citale">Citale Website Project</a></li>
                                <li><a className="dropdown-item" href="/ds542">DS542: Deep Learning Project</a></li>
                                <li><a className="dropdown-item" href="/ds598">DS598: Azure Big Data Project</a></li>
                                <li><a className="dropdown-item" href="/ds701">DS701: Data Science Project</a></li>
                                <li><a className="dropdown-item" href="/undergradThesis">Undergrad Thesis</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/interests">
                                Interests
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">
                                Message Board
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}