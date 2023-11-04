import React,{useEffect} from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import card9 from './img/card9.jpg'
import Camera1 from './img/Camera1.jpg'
import Camera2 from './img/Camera2.jpg'
import Camera3 from './img/Camera3.jpg'

import '../style/single.scss'
import { Link } from 'react-router-dom';

const SingleCard9 = ({size, setShow}) => {


    useEffect(() => {
        localStorage.setItem('size', JSON.stringify(size));
    }, [size]);
    

    return (
        <>
            <main className="pt-4 SingleCard" id='SingleCard9'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <img  src={card9} className="img-fluid m-5" alt="" />
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="p-4">
                                <div className="mb-3">
                                    <Link href="">
                                        <span className="badge bg-dark me-1">Category 2</span>
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
                                        <del>$650.99</del>
                                    </span>
                                    <span className='des_price'>$550.5 5</span>
                                </p>
                                <strong><p  className='Des_title'>Description</p></strong>
                                <div className='mb-5 details'>
                                <li>Security cameras are essential tools for surveillance and monitoring purposes</li>
                                    <li>They come in various types, including wired and wireless cameras</li>
                                    <li>Security cameras often include advanced features such as motion detection</li>
                                    <li>Many modern security cameras offer remote viewing capabilities</li>
                                    <li>With the advancements in technology, security cameras have become</li>
                                    <li>Colro : Black - White - Brown  </li>
                                </div>
                                <div className='rating' >
                                    <p>Rating: </p> 
                                    <Stack >
                                        <Rating className='stars' name="half-rating-read"  defaultValue={3.5} precision={0.5} readOnly />
                                    </Stack>
                                </div>
                                <form className="d-flex justify-content-left">
                                    <button className=" btn_fav ms-1" type="submit">
                                        Add to Fav
                                        <i className="fas fa-heart  ms-1"></i>
                                    </button>
                                    <button className=" btn_cart ms-1" type="submit">
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
                            <p className='mb-5'>Sound Quality: Edifier is well-regarded for its commitment to delivering exceptional sound quality. Their speakers are designed to produce clear, balanced, and immersive audio across various frequencies. Whether you're listening to music, watching movies, or gaming, Edifier Speakers strive to provide a captivating audio experience.</p>
                        </div>
                        
                    </div>
                    <div className="row img">
                        <div className="col-lg-4 col-md-6 mb-4 mx-auto ">
                            <img src={Camera1} className="img-fluid " alt="" />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-4 mx-auto ">
                            <img src={Camera2} className="img-fluid " alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mx-auto">
                            <img src={Camera3} className="img-fluid" alt="" />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    );
}

export default SingleCard9
