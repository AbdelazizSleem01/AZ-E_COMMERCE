import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import card4 from './img/card4.jpg'
import Back1 from './img/backbag1.jpg'
import Back2 from './img/backbag2.jpg'
import Back3 from './img/backbag3.jpg'
import '../style/single.scss'
import { Link } from 'react-router-dom';

const SingleCard4 = () => {

    return (
        <>
            <main className="pt-4" id='SingleCard4'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6  mb-4">
                            <img  src={card4} className="img-fluid m-5" alt="" />
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="p-4">
                                <div className="mb-3">
                                    <Link href="">
                                        <span className="badge bg-dark me-1">Category 1</span>
                                    </Link>
                                    <Link href="">
                                        <span className="badge bg-info me-1">New</span>
                                    </Link>
                                    <Link href="">
                                        <span className="badge bg-success me-1">Bestseller</span>
                                    </Link>
                                </div>
                                <p className="lead">
                                    <span className="me-1">
                                        <del>$150</del>
                                    </span>
                                    <span className='des_price'>$57.55</span>
                                </p>
                                <strong><p  className='Des_title'>Description</p></strong>
                                <div className='mb-5 details'>
                                    <li>Fashion meets Functionality: The bag's sleek design </li>
                                    <li>Compact Design: The backpack takes the form of a tote bag</li>
                                    <li>Convenient Size: With its dimensions tailored for everyday use</li>
                                    <li>Social gathering space: Couches serve as a central gathering</li>
                                    <li>Rsatility: The bag seamlessly transforms from a tote  to a backpack</li>
                                    <li>Size: X , XL , XXL , MD</li>
                                </div>
                                <div className='rating' >
                                    <p>Rating: </p> 
                                    <Stack >
                                        <Rating className='stars' name="half-rating-read"  defaultValue={4} precision={3} readOnly />
                                    </Stack>
                                </div>
                                <form className="d-flex justify-content-left">
                                    <button className=" btn_fav ms-1" type="submit">
                                        Add to Fav
                                        <i className="fas fa-heart  ms-1"></i>
                                    </button>
                                    <button className="btn_cart ms-1" type="submit">
                                        Add to cart
                                        <i className="fas fa-shopping-cart ms-1"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="row d-flex justify-content-center">
                        
                        <div className="col-md-6 text-center">
                            <h4 className="my-4 h4">Additional information</h4>
                            <p>The backpack in the form of a tote bag combines style and functionality in a compact design. It offers a convenient size, with dimensions suitable for everyday use. The bag comes in various colors to suit different preferences. Its versatility allows for easy transition from a tote bag to a backpack, making it ideal for different occasions. Its sleek design and practical features make it a must-have accessory for those who value both fashion and utility.</p>
                        </div>
                        
                    </div>
                    <div className="row img">
                        <div className="col-lg-4 col-md-12 mb-4 ">
                            <img src={Back2} className="img-fluid" alt="head1" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mt-md-5">
                            <img src={Back1} className="img-fluid" alt="head2" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4  ">
                            <img src={Back3} className="img-fluid" alt="head3" />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default SingleCard4
