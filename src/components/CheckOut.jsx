import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import { HashLink  } from 'react-router-hash-link';
import '../style/Checkout.scss'
import Payment from './Payment';


const CheckOut = ({ cart, handleRemove }) => {


    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const Subtotal = cart.reduce((total, item) => total + item.price * item.amount, 0);



        const handleSubmit = (event) => {
            event.preventDefault();
            const isFormValid = validateForm();
            if (isFormValid) {
            sendEmail(event);
            setSubmitted(true);
            } else {
            setValidated(true);
        
            // Reset the validated state after 3 seconds
            setTimeout(() => {
                setValidated(false);
            }, 3000);
            }
        };
        
        const validateForm = () => {
            const elements = form.current.elements;
            for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.type !== 'submit' && element.value.trim() === '') {
                return false;
            }
            }
            return true;
        };

    //Emaul.js
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5ytssrh', 'template_2mjy1qe', form.current, 'hRup-sIT23B3-qVjY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleFormSubmit = (event) => {
        handleSubmit(event);
        sendEmail(event);
    };

    return (
        <>
            {submitted ? (
            <Payment cart={cart}/>
            ) : (
            <div className="maincontainer pt-5" >
                <div className="container-fluid">
                    <div className="py-5 text-center">
                        <h2 className='title_Check ' id='Checkout'>Checkout form</h2>
                    </div>
                    <div className="row TOTAL">
                        <div className="col-lg-4 col-md-6 order-md-2 mb-4 Check_Cart">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="">Your cart</span>
                                <span className="badge badge-secondary badge-pill">Number of Items: {cart.length}</span>
                            </h4>
                            <div className='Check_Product'>
                                {!cart || cart.length === 0 ? (
                                    <p className='NO_ITEM'>No items in the cart.</p>
                                    ) : (
                                    <>
                                        {cart.map((item) => (
                                        <div key={item.id} className='CART'>
                                            <h6 onClick={() => handleRemove(item.id)}>
                                            <span class="material-symbols-outlined mx-auto">close</span></h6>
                                            <div className='Img_title d-flex'>
                                                <img src={item.img} alt="" className='' />
                                                <p>{item.title}</p>
                                            </div>
                                            <div>
                                                <button className='mx-auto Amount'>{item.amount}</button>
                                            </div>
                                            <p className='price_check mx-auto'>Price: {item.price}$</p>
                                            <hr />
                                        </div>
                                        ))}
                                    </>
                                    )}
                                <span className='Subtotal'>Subtotal: {Subtotal}$</span>
                            </div>
                            <form className="card p-2 mx-auto">
                                <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code"/>
                                <div className="input-group-append">
                                    <button type="button" className="btn bg-warning">Redeem</button>
                                </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-8 col-md-6 order-md-1 w-50 mx-auto Form">
                            <h4 className="mb-3">Billing address</h4>
                            <form className="needs-validation" ref={form} onSubmit={handleFormSubmit} noValidate>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="firstName"  className='pb-2'>First name</label>
                                        <input type="text"  name="firstName"  class="form-control border_Check" id="firstName" placeholder="firstName"  required />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="lastName" className='pb-2'>Last name</label>
                                            <input type="text" name="lastName" className="form-control border_Check" id="lastName" placeholder="lastName"  required />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                    </div>

                                    <div className="mb-3">
                                    <label for="username" className='pb-2'>Username</label>
                                    <div className="d-flex ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" name='username' className="form-control border_Check" id="username" placeholder="you@example.com" required />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                    </div>

                                    <div className="mb-3">
                                    <label for="address" className='pb-2'>Address</label>
                                    <input type="text" name='address1' className="form-control border_Check" id="address" placeholder="1234 Main St" required />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                    </div>

                                    <div className="pb-3">
                                        <label for="address2" className='pb-2'>Address 2 <span className="text-black">(Optional)</span></label>
                                        <input type="text" name='address2' className="form-control border_Check" id="address2" placeholder="Apartment or suite" />
                                    </div>

                                    <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="country">Country</label>
                                        <select className="custom-select d-block w-100" id="Country" name='Country' required>
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                        <option>EGYPT</option>
                                        <option>Italia</option>
                                        <option>Spania</option>
                                        <option>Morroco</option>
                                        <option>Libia</option>
                                        <option>Tunis</option>
                                        </select>
                                        <div className="invalid-feedback">
                                        Please select a valid country.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="state">State</label>
                                        <select className="custom-select d-block w-100" name='State' id="state" required>
                                        <option value="">Choose...</option>
                                        <option>Alexandria</option>
                                        <option>Cairo</option>
                                        <option>Matroh</option>
                                        <option>Benha</option>
                                        <option>Qalyubia</option>
                                        <option>Suez</option>
                                        <option>6th of October City</option>
                                        <option>Gizeh</option>
                                        <option>Shubra El-Kheima</option>
                                        <option>Marsa Matruh</option>
                                        <option>Port Said</option>
                                        <option>Luxor</option>
                                        <option>El-Mahalla El-Kubra</option>
                                        <option>al-Mansura</option>
                                        <option>Tanta</option>
                                        <option>Asyut</option>
                                        <option>Ismailia</option>
                                        <option>Fayyum</option>
                                        <option>Zagazig</option>
                                        <option>Aswan</option>
                                        <option>Damietta</option>
                                        <option>Damanhur</option>
                                        <option>al-Minya</option>
                                        <option>Qena</option>
                                        <option>Sohag</option>
                                        <option>Hurghada</option>
                                        <option>Shibin El Kom</option>
                                        <option>Kafr el-Sheikh</option>
                                        <option>Arish</option>
                                        <option>Mallawi</option>
                                        <option>Qalyub</option>
                                        </select>
                                        <div className="invalid-feedback">
                                        Please provide a valid state.
                                        </div>
                                    </div>
                                </div>
                                <button className="Check-btn mx-auto" type="submit">Continue to checkout</button>
                                {validated &&
                                    <div className='Notification_remove animate__animated  animate__backInRight '>
                                        <h3> <span class='material-symbols-outlined'>error</span> Please fill in all the required fields.</h3>
                                    </div> }                           
                            </form>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default CheckOut

