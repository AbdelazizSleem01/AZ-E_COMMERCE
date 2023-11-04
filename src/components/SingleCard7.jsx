import React,{useEffect} from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import card7 from './img/card7.jpg'
import washer1 from './img/washer1.jpg'
import washer2 from './img/washer2.jpg'
import washer3 from './img/washer3.jpg'

import '../style/single.scss'
import { Link } from 'react-router-dom';

const SingleCard7 = ({size, setShow}) => {


    useEffect(() => {
        localStorage.setItem('size', JSON.stringify(size));
    }, [size]);
    

    return (
        <>
            <main className="pt-4 SingleCard" id='SingleCard7'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <img  src={card7} className="img-fluid m-5" alt="" />
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
                                        <del>$1800</del>
                                    </span>
                                    <span className='des_price'>$1442.7</span>
                                </p>
                                <strong><p  className='Des_title'>Description</p></strong>
                                <div className='mb-5 details'>
                                    <li>The LG Steam Washer is a high-performance washing machine</li>
                                    <li>This washer utilizes steam to penetrate deep into fabrics</li>
                                    <li>The LG Steam Washer offers a variety of wash cycles</li>
                                    <li>With its large capacity, the LG Steam Washer can handle sizable</li>
                                    <li>Additionally, this washer features advanced technologies like SmartThinQ</li>
                                    <li>Colro : Black - White  </li>
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
                            <p className='mb-5'>The LG Steam Washer is a high-performance washing machine that incorporates steam technology to provide enhanced cleaning and fabric care This washer utilizes steam to penetrate deep into fabrics, effectively removing stains, dirt, and allergens, while also reducing wrinkles and odors..</p>
                        </div>
                        
                    </div>
                    <div className="row img">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <img src={washer2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={washer1} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={washer3} className="img-fluid" alt="" />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default SingleCard7
