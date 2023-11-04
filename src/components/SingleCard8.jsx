import React,{useEffect} from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import card8 from './img/card8.jpg'
import DG1 from './img/DG1.jpg'
import DG2 from './img/DG2.jpg'
import DG3 from './img/DG3.jpg'

import '../style/single.scss'
import { Link } from 'react-router-dom';

const SingleCard8 = ({size, setShow}) => {


    useEffect(() => {
        localStorage.setItem('size', JSON.stringify(size));
    }, [size]);
    

    return (
        <>
            <main className="pt-4 SingleCard" id='SingleCard8'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <img  src={card8} className="img-fluid m-5" alt="" />
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
                                        <del>$250.99</del>
                                    </span>
                                    <span className='des_price'>$189.5</span>
                                </p>
                                <strong><p  className='Des_title'>Description</p></strong>
                                <div className='mb-5 details'>
                                <li>Edifier Speakers are renowned for their exceptional audio .</li>
                                    <li>With a wide range of speaker models, Edifier offers options for various purposes </li>
                                    <li>Edifier Speakers incorporate advanced technologies such as Bluetooth .</li>
                                    <li>The speakers are built with high-quality materials, ensuring durability .</li>
                                    <li>Edifier is known for its attention to detail, delivering both aesthetic appeal</li>
                                    <li>Colro : Black - White - Brown  </li>
                                </div>
                                <div className='rating' >
                                    <p>Rating: </p> 
                                    <Stack >
                                        <Rating className='stars' name="half-rating-read"  defaultValue={2.5} precision={0.5} readOnly />
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
                        <div className="col-lg-4 col-md-12 mb-4">
                            <img src={DG2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={DG3} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={DG1} className="img-fluid" alt="" />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default SingleCard8
