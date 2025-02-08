import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router';
import { LuChevronDown } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import '../universal-css/header.css'

function Header() {
    function Toggle() {
        document.querySelector('.header-dropdown-toggle').classList.toggle('rotate');
    }
    return (
        <Navbar expand="lg" className='header'>
            <Container>
                <Link to={"/"} className='d-flex align-items-center justify-content-center gap-2 navbar-brand'><img src="/assets/icons/logo.svg" alt="" width={35} /><h3 className="fw-normal">AnimeSaga</h3></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Left Contents start */}
                    <Nav className="me-auto gap-1">
                        <Link to={"/"} className='nav-link header-link fw-medium'>Home</Link>
                        <Link to={"/About"} className='nav-link header-link fw-medium'>About</Link>
                        <Link to={"/latestAnime"} className='nav-link header-link fw-medium'>Latest Anime</Link>
                        <Dropdown>
                            <Dropdown.Toggle className='bg-transparent border-0 d-flex gap-2' id="headerDropdown">
                                Browser <span><LuChevronDown className='header-dropdown-toggle' onClick={Toggle} /></span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link to={"/News"} className='nav-link header-link fw-medium'>News</Link>
                    </Nav>
                    {/* Left Contents end */}
                    {/* Right Contents start */}
                    <ul className="right-content d-flex align-items-center justify-content-around-content-center mt-2 gap-4">
                        <li className="right-content-item">
                            <a href="#" className="right-content-link"><FaRegBookmark className='right-content-icon' /></a>
                        </li>
                        <li className="right-content-item">
                            <a href="#" className="right-content-link"><FaSearch className='right-content-icon' /></a>
                        </li>
                        <li className="right-content-item">
                            <a href="#" className="right-content-link"><img src="/assets/img/user-img.jpeg" alt="" width={45} className='rounded-circle' /></a>
                        </li>
                    </ul>
                    {/* Right Contents end */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;