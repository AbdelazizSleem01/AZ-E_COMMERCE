import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Alogo from './img/letter-a.png'
import Zlogo from './img/letter-z (1).png'
import '../style/Footer.scss'


const Footer = () => {
    return (
        <MDBFooter  className='Footer  text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span className='text-black'>Get connected with us on social networks:</span>
                </div>
                <div>
                    <Link to='https://www.facebook.com' className='me-4 p-2 text-reset bg_icon'>
                        <MDBIcon  color='black' fab icon="facebook" />
                    </Link>
                    <Link to='https://twitter.com/home' className='me-4 p-2 text-reset bg_icon'>
                        <MDBIcon color='black' fab icon="twitter" />
                    </Link>
                    <Link to='https://mail.google.com/mail/u/0/#inbox' className='me-4 p-2 text-reset bg_icon'>
                        <MDBIcon color='black' fab icon="google" />
                    </Link>
                    <Link to='https://www.instagram.com' className='me-4 p-2 text-reset bg_icon'>
                        <MDBIcon color='black' fab icon="instagram" />
                    </Link>
                    <Link to='https://www.linkedin.com/in/abdelaziz-sleem-230574294/' className='me-4 p-2 text-reset bg_icon'>
                        <MDBIcon color='black' fab icon="linkedin" />
                    </Link>
                    <Link to='https://github.com/AbdelazizSleem01' className='me-4 p-2 text-reset bg_icon'>
                        <MDBIcon color='black' fab icon="github" />
                    </Link>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                            <HashLink href="/" className='Logo d-flex animate__animated animate__lightSpeedInLeft '><img src={Alogo} width={55} /> <img src={Zlogo} width={55} /></HashLink>
                                <span className='text-warning'>AZ</span> Company
                                {/* animate__infinite */}
                            </h6>
                            <p className='summary'>
                                AZ Company is a specialized retailer offering a wide range of high-quality and diverse products, With a commitment to customer satisfaction
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase text-warning fw-bold mb-4'>Products</h6>
                            <p>
                                <HashLink href='#!' className='text-reset '>
                                Technology
                                </HashLink>
                            </p>
                            <p>
                                <HashLink href='#!' className='text-reset'>
                                Clothing
                                </HashLink>
                            </p>
                            <p>
                                <HashLink href='#!' className='text-reset'>
                                Watchs
                                </HashLink>
                            </p>
                            <p>
                                <HashLink href='#!' className='text-reset'>
                                Home& Kitchen
                                </HashLink>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase text-warning fw-bold mb-4'>Useful links</h6>
                            <p>
                                <HashLink to='/Login#Login' className='text-reset'>
                                Login
                                </HashLink>
                            </p>
                            <p>
                                <HashLink href='/Login#Login' className='text-reset'>
                                Register
                                </HashLink>
                            </p>
                            <p>
                                <HashLink smooth to='/Contact#Contact'  className='text-reset'>
                                Contact Us
                                </HashLink>
                            </p>
                            <p>
                                <HashLink href='#' className='text-reset'>
                                Help
                                </HashLink>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase text-warning fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='black'  icon="home" className="me-2" />
                                Benha, Qalubia, EGYPT
                            </p>
                            <p>
                                <MDBIcon color='black' icon="envelope" className="me-3" />
                                zezofalcon01@gmail.com
                            </p>
                            <p>
                                <MDBIcon color='black' icon="phone" className="me-2" /> +20  01007488071
                            </p>
                            <p>
                                <MDBIcon color='black' icon="print" className="me-2" /> + 20  01119268163 
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className='text-center text-black p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <HashLink smooth to='#AZ' className='text-reset fw-bold' >
                    AZ.com
                </HashLink>
            </div>
        </MDBFooter>
    );
}

export default Footer
