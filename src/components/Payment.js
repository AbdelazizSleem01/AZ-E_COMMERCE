import React, { useEffect } from 'react';
import ReactDOM from "react-dom"
import '../style/Payment.scss';
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Payment = ({cart}) => {

    const price = cart.reduce((total, item) => total + item.price * item.amount, 0);
    
    useEffect(()=>{
            const createOrder = (data, actions) => {
                return actions.order.create({
                purchase_units: [
                    {
                    amount: {
                        value: "100.00",
                    },
                    },
                ],
                });
            }
            const onApprove = (data, actions) => {
                alert('You have approved the payment!');
                return actions.order.capture();
            }
    }, [])

    return (
        <div className="Payment mx-auto" id="Payment">
            <div className="wrapper">
                <PayPalButton
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: price ,
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            alert('Transaction completed by ' + details.payer.name.given_name);
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default Payment;











