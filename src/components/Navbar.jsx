import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Alogo from './img/letter-a.png'
import Zlogo from './img/letter-z (1).png'
import Language from '../components/Language';
import { HashLink } from 'react-router-hash-link';
import Tooltip from '@mui/material/Tooltip';
import AutoComolete from './AutoComolete';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import SmallPage from "./SmallPage";
import list from "../data";
import '../style/Home.scss';
import 'animate.css';

const Navbarnav = ({size,favor,Comp, setShow}) => {

    const productIDs = list.map(item => item.ID);

    const [user] = useAuthState(auth)
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false);

        const handleClick = () => {
        setTheme(!theme);
        };

        useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
        if (theme === false) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        }, [theme]);

        useEffect(() => {
            localStorage.setItem('size', JSON.stringify(size));
        }, [size]);
        
        useEffect(() => {
            localStorage.setItem('favor', JSON.stringify(favor));
        }, [favor]);

        useEffect(() => {
            localStorage.setItem('Comp', JSON.stringify(Comp));
        }, [Comp]);
        
        const [showSmallPage, setShowSmallPage] = useState(false);
        const handleShow = () => {
            setShowSmallPage(!showSmallPage);
        };

        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');

    return (
        <div className=' NAV'>
            <Navbar expand="lg" className="bg_nav">
                <Container fluid>
                    <HashLink smooth to={'/'}>
                        <Navbar.Brand id='#AZ'  onClick={()=>setShow(true)} className='Logo d-flex animate__animated animate__lightSpeedInLeft '><img src={Alogo} width={55} /> <img src={Zlogo} width={55} /></Navbar.Brand>
                    </HashLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='Collapse' id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown  className='narrow-none Pages_par ' title={<span className='title'> Home</span>}id="navbarScrollingDropdown">
                            <span className='border_bottom'></span>
                            <NavDropdown.Item href="#productIDs">
                                <HashLink smooth  className="Pages mx-auto" to={`/${productIDs}#top`}>
                                    Home E-Books 
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <HashLink smooth className="Pages" to={`/${productIDs}#bottom`}>
                                    Home Technology
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <HashLink smooth className="Pages" to={`/${productIDs}#bottom`}>
                                    Home  Watch
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <HashLink smooth className="Pages" to={`/${productIDs}#bottom`}>
                                    Home Electronic
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <HashLink smooth className="Pages" to={`/${productIDs}#bottom`}>
                                    Smart Product
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <HashLink smooth className="Pages" to={`/${productIDs}#bottom`}>
                                    Home Furniture
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <HashLink smooth className="Pages" to={`/${productIDs}#bottom`}>
                                    Home Clothing
                                </HashLink>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className="Pages_par" title={<span className='title'> Shop</span> } id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">
                                <HashLink smooth className="Pages">
                                    Home Organic
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                <HashLink smooth className="Pages">
                                    Home Electronic
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                <HashLink smooth className="Pages">
                                    Home Furniture
                                </HashLink>
                            </NavDropdown.Item>
                        </NavDropdown>      
                            
                        <NavDropdown title={<span className='title'> Pages</span> } id="navbarScrollingDropdown">
                            <NavDropdown.Item className="Pages_par">
                                <HashLink smooth className="Pages" to="/Contact#top">
                                    Contact US
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="Pages_par">
                                <HashLink smooth className="Pages" to="/Login#top">
                                    Login                        
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="Pages_par">
                                <HashLink smooth className="Pages" to="/SignIn#top">
                                    Sign In                        
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="Pages_par">
                                <HashLink smooth className="Pages" to="/Checkout#top">
                                    Checkout                        
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="Pages_par">
                                <HashLink smooth className="Pages" to="/Payment#Payment">
                                    Payment                        
                                </HashLink>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown  className="Pages_par" title={<span className='title'> Blogs</span> } id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action4">
                                <HashLink smooth className="Pages" to="/">
                                    Home Organic
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                <HashLink smooth className="Pages" to="/">
                                    Home Electronic
                                </HashLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                <HashLink smooth className="Pages" to="/">
                                    Home Furniture
                                </HashLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex search_box">
                        <AutoComolete/>
                    </Form>
                    <div className='Nav_icons'>
                        <HashLink smooth to="./Compare.js#Compare"  className='shop_cart'  onClick={()=>setShow(false)} style={{ textDecoration: 'none' }}>
                        <span class="material-symbols-outlined">insert_chart</span>
                            <h4>{Comp}</h4>
                        </HashLink>
                        <HashLink smooth to="./Favor.js#Favor"  className='shop_cart'  onClick={()=>setShow(false)} style={{ textDecoration: 'none' }}>
                            <span class="material-symbols-outlined">favorite</span>
                            <h4>{favor}</h4>
                        </HashLink>
                        <HashLink smooth to="./Cart.js#Cart" className='shop_cart'  onClick={()=>setShow(false)} style={{ textDecoration: 'none' }}>
                                <span class="material-symbols-outlined">shopping_cart</span>
                                <h4>{size}</h4>
                        </HashLink>
                        {user ? (
                            <div className="Gmail d-flex">
                                <div className="button" onClick={handleShow}>
                                <Tooltip title={
                                            user?.providerData[0]?.providerId === 'google.com' ? (
                                            <>
                                                <p>Google Account</p>
                                                {user.displayName}, <br />
                                                {user.email}
                                            </>
                                            ) : (
                                            <>
                                                {firstName && lastName &&(
                                                    <>
                                            <p>Your Gmail</p>
                                                        {firstName} {''} {lastName}
                                                    </>
                                                )}                                            
                                            </>
                                            )}
                                        >
                                        {user?.providerData[0]?.providerId === 'google.com'  ? (<img src={user.photoURL} className="img-fluid Avatar" alt=''/>)
                                        :(  <> 
                                                <div className="UserPhoto">
                                                    {(firstName && lastName) ? (
                                                        <>
                                                        <h6 className="text-uppercase d-flex text-center">
                                                            {firstName.charAt(0)} {''} {lastName.charAt(0)}
                                                        </h6>
                                                        </>
                                                    ) : ''}
                                                </div>
                                            </> 
                                            )}
                                    </Tooltip>
                                </div>
                                {showSmallPage && <SmallPage firstName={firstName} lastName={lastName}/>}
                            </div>	
                            ): (
                                <Dropdown className='drop'>
                                    <Dropdown.Toggle className='Language' variant="success " id="dropdown-basic" >
                                        <span class="material-symbols-outlined">account_circle</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='menu'>
                                        
                                        <Dropdown.Item  className='as'>
                                            <HashLink className='as' to="/Login#top">
                                                Login <span class="material-symbols-outlined">login</span>
                                            </HashLink>
                                        </Dropdown.Item>
                                        <hr style={{width:"145px"}}/>
                                        <Dropdown.Item className='as' >
                                            <HashLink className='as'  to='/SignIn#top'>
                                                Register <span class="fa-regular fa-address-card"></span> 
                                            </HashLink>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            )}
                            <Language/>
                            <button className="Darkmode" onClick={handleClick}>{theme?<span class="material-symbols-outlined ">light_mode</span>:<span class="material-symbols-outlined ">dark_mode</span>}</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};


export default Navbarnav

