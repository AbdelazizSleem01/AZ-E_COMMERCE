import React,{useEffect} from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import card6 from './img/card6.jpg'
import sub1 from './img/sub1.jpg'
import sub2 from './img/sub2.jpg'
import sub3 from './img/sub3.jpg'
import '../style/single.scss'
import { Link } from 'react-router-dom';

const SingleCard6 = ({size, setShow}) => {


    useEffect(() => {
        localStorage.setItem('size', JSON.stringify(size));
    }, [size]);
    

    return (
        <>
            <main className="pt-4 SingleCard pt-5" id='SingleCard6'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <img  src={card6} className="img-fluid m-5" alt="" />
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="">
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
                                    <span className='des_price'>$135.33</span>
                                </p>
                                <strong><p  className='Des_title'>Description</p></strong>
                                <div className='mb-5 details'>
                                    <li>Wireless speakers are portable audio devices that use wireless technology</li>
                                    <li>They provide the convenience of wire-free connectivity</li>
                                    <li>Wireless speakers come in various sizes and designs</li>
                                    <li>Many wireless speakers offer additional features like built-in rechargeable</li>
                                    <li>The sound quality of wireless speakers has significantly improved</li>
                                    <li>Colro : Black - Grey - White  </li>
                                </div>
                                <div className='rating' >
                                    <p>Rating: </p> 
                                    <Stack >
                                        <Rating className='stars' name="half-rating-read"  defaultValue={5} precision={1.5}  />
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
                            <h4 className="my-5 h4">Additional information</h4>
                            <p className='mb-5'>Wireless speakers are portable audio devices that use wireless technology, such as Bluetooth, to connect to audio sources like smartphones, tablets, or computers without the need for physical cables.</p>
                        </div>
                        
                    </div>
                    <div className="row img">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <img src={sub1} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={sub2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={sub3} className="img-fluid" alt="" />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default SingleCard6
