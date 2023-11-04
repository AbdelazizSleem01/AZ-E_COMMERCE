import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import card3 from './img/card3.jpg'
import sofa1 from './img/sofa1.jpg'
import sofa2 from './img/sofa2.jpg'
import sofa3 from './img/sofa3.jpg'
import '../style/single.scss'
import { Link } from 'react-router-dom';

const SingleCard3 = () => {

    return (
        <>
            <main className="pt-4" id='SingleCard3'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6  mb-4">
                            <img  src={card3} className="img-fluid m-5" alt="" />
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
                                        <del>$250</del>
                                    </span>
                                    <span className='des_price'>$1043.78</span>
                                </p>
                                <strong><p  className='Des_title'>Description</p></strong>
                                <div className='mb-5 details'>
                                    <li>Comfortable seating: A good couch provides comfortable</li>
                                    <li>Stylish design: Couches come in a variety of designs, from modern</li>
                                    <li>Versatile functionality: Couches often come with additional features</li>
                                    <li>Durable construction: High-quality couches are built to last</li>
                                    <li>Social gathering space: Couches serve as a central gathering</li>
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
                            <p>Upholstery materials: Couches can be upholstered in a range of materials, such as fabric, leather, or synthetic blends. Each material has its own unique look, feel, and maintenance requirements. Consider factors like comfort, durability, and ease of cleaning when choosing the upholstery material.</p>
                        </div>
                        
                    </div>
                    <div className="row img">
                        <div className="col-lg-4 col-md-12 mb-4 ">
                            <img src={sofa1} className="img-fluid" alt="head1" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mt-md-5">
                            <img src={sofa2} className="img-fluid" alt="head2" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mt-lg-5 mt-md-0 ">
                            <img src={sofa3} className="img-fluid" alt="head3" />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default SingleCard3
