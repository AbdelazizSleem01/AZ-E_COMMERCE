import React,{useEffect} from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import card1 from './img/card1.jpg'
import book1 from './img/book1.jpg'
import book2 from './img/book2.jpg'
import book4 from './img/book3..png'
import '../style/single.scss'
import { Link } from 'react-router-dom';

const SingleCard1 = ({size, setShow}) => {


    useEffect(() => {
        localStorage.setItem('size', JSON.stringify(size));
    }, [size]);
    

    return (
        <>
            <main className="pt-4 SingleCard" id='SingleCard1'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <img  src={card1} className="img-fluid m-5" alt="" />
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
                                        <del>$200</del>
                                    </span>
                                    <span className='des_price'>$120.55</span>
                                </p>
                                <strong><p  className='Des_title'>Description</p></strong>
                                <div className='mb-5 details'>
                                    <li>Unrestrained and portable active stereo speaker</li>
                                    <li>Free from the confines of wires and chords</li>
                                    <li>20 hours of portable capabilities</li>
                                    <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                                    <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                                </div>
                                <div className='rating' >
                                    <p>Rating: </p> 
                                    <Stack >
                                        <Rating className='stars' name="half-rating-read"  defaultValue={5} precision={3} readOnly />
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
                            <p>Reviews and ratings: Including customer reviews and ratings on the product listing can give potential buyers a sense of how others have enjoyed (or not enjoyed) the product.</p>
                        </div>
                        
                    </div>
                    <div className="row img">
                        <div className="col-lg-4 col-md-12 mb-4 mx-auto">
                            <img src={book1} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mx-auto">
                            <img src={book2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mx-auto">
                            <img src={book4} className="img-fluid" alt="" />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default SingleCard1
