import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../universal-css/footer.css'
import { Link } from 'react-router';

function Footer() {
    return (
        <div>
            <footer className="footer-section">
                <Container>
                    <Row className='row-gap-5 text-md-start text-center'>
                        <Col lg={3} md={6}>
                            <div className="footer-heading d-flex align-items-center gap-2 justify-content-lg-start justify-content-center">
                                <img src="/assets/icons/logo.svg" alt="" width={30} />
                                <span className="fw-medium mb-3">Anime Saga</span>
                            </div>
                            <div className="footer-content">
                                <p>We provide high-quality anime streaming with fast updates and a seamless experience.</p>
                            </div>
                        </Col>
                        <Col lg={2} md={6}>
                            <div className="footer-heading">
                                <h4 className="fw-medium">Pages</h4>
                            </div>
                            <ul className="footer-list list-unstyled">
                                <li className="footer-item">
                                    <Link to={"/"} className="footer-link">Home</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to={"/About"} className="footer-link">About</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to={"/latestAnime"} className="footer-link">Latest Anime</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to={"/News"} className="footer-link">News</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={6}>
                            <div className="footer-heading">
                                <h4 className="fw-medium">Browse</h4>
                            </div>
                            <ul className="footer-list list-unstyled">
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Action & Adventure</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Comedy</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Romance</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Movies</a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={6}>
                            <div className="footer-heading">
                                <h4 className="fw-medium">Account</h4>
                            </div>
                            <ul className="footer-list list-unstyled">
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Watchlist</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">History</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">My Profile</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Log Out</a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} md={6}>
                            <div className="footer-heading">
                                <h4 className="fw-medium">Contact Us</h4>
                            </div>
                            <ul className="footer-list list-unstyled">
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Twitter</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Youtube</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Facebook</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Instagram</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
                <div className="copyright-section text-center py-1">
                    <p className='mt-3 fw-medium'>© Copyright 2025 Anime Saga. All rights reserved</p>
                </div>
        </div>
    )
}

export default Footer
