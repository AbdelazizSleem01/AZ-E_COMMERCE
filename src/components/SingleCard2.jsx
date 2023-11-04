import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import card2 from './img/card2.jpg'
import head1 from './img/head1.jpg'
import head2 from './img/head2.jpg'
import head3 from './img/head3.jpg'
import '../style/single.scss'
import { Link } from 'react-router-dom';

const SingleCard2 = () => {

    return (
        <>
            <main className="pt-4" id='SingleCard2'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <img  src={card2} className="img-fluid m-5" alt="" />
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
                                        <del>$300</del>
                                    </span>
                                    <span className='des_price'>$222.99</span>
                                </p>
                                <strong><p  className='Des_title'>Description</p></strong>
                                <div className='mb-5 details'>
                                    <li>Excellent sound quality: Headphones provide immersive audio </li>
                                    <li>Comfortable design: Headphones are designed to offer long</li>
                                    <li>Noise cancellation: Many headphones feature active noise</li>
                                    <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                                    <li>Versatility and functionality: Headphones are versatile</li>
                                </div>
                                <div className='rating' >
                                    <p>Rating: </p> 
                                    <Stack >
                                        <Rating className='stars' name="half-rating-read"  defaultValue={5} precision={4} readOnly />
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
                            <p>Types of headphones: There are various types of headphones available, including over-ear headphones, on-ear headphones, and in-ear headphones (earbuds). Each type offers a different fit and sound experience.</p>
                        </div>
                        
                    </div>
                    <div className="row img">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <img src={head1} className="img-fluid" alt="head1" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={head2} className="img-fluid" alt="head2" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={head3} className="img-fluid" alt="head3" />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default SingleCard2
