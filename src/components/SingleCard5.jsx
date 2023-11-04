import React,{useEffect} from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import card5 from './img/card5.jpg'
import watch1 from './img/watch1.jpg'
import watch2 from './img/watch2.jpg'
import watch3 from './img/watch3.jpg'
import '../style/single.scss'
import { Link } from 'react-router-dom';

const SingleCard5 = ({size, setShow}) => {


    useEffect(() => {
        localStorage.setItem('size', JSON.stringify(size));
    }, [size]);
    

    return (
        <>
            <main className="pt-4 SingleCard" id='SingleCard5'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <img  src={card5} className="img-fluid m-5" alt="" />
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
                                    <span className='des_price'>$150.22</span>
                                </p>
                                <strong><p  className='Des_title'>Description</p></strong>
                                <div className='mb-5 details'>
                                    <li>MVMTH Watch is a stylish and sophisticated timepiece</li>
                                    <li>The MVMTH Watch features a durable stainless steel case </li>
                                    <li>With its Swiss-made quartz movement, the MVMTH Watch</li>
                                    <li>The watch boasts a minimalist dial with luminous hands and hour </li>
                                    <li>MVMTH Watch offers a range of interchangeable straps</li>
                                    <li>Colro : Black  </li>
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
                            <p>The MVMTH Watch features a durable stainless steel case and a scratch-resistant sapphire crystal, ensuring long-lasting quality and protection.</p>
                        </div>
                        
                    </div>
                    <div className="row img">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <img src={watch2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={watch3} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <img src={watch1} className="img-fluid" alt="" />
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default SingleCard5
