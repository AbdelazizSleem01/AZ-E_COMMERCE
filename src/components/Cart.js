import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../style/cart.scss';
import '../style/amazon.scss';
import { HashLink } from 'react-router-hash-link';

const Cart = ({ cart, setCart }) => {
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleChange = (item, amount) => {
        const newCart = cart.map((i) =>
        i.id === item.id ? { ...i, amount: i.amount + amount } : i
        );
        setCart(newCart);
    };

    const handleRemove = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const handleClearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const cartIsEmpty = cart.length === 0;
    const price = cart.reduce((total, item) => total + item.price * item.amount, 0);

    const [warning, setWarning] = useState(false);
    const handleRemov2 = (id) => {
        const hasItem = cart.some((product) => product.id === id);
        if (hasItem) {
        setWarning(true);
        setTimeout(() => {
            setWarning(false);
        }, 4000);
        return;
        }
    };

    const handleRemoveBoth = (id) => {
        handleRemove(id);
        handleRemov2(id);
    };

    return (
        <>
        <div className="Cart-title" id="Compare">
                <h3>Shopping Cart</h3>
            </div>
        {cartIsEmpty ? (
            <div className='Empty_cart'>
            <h3 className='mx-auto text-center'>The Cart Is Empty</h3>
            <a className='HashLink' href='cards'>
                <Button className='mx-auto'>
                <strong>Shop Now!</strong> <span className='material-symbols-outlined'>arrow_circle_right</span>
                </Button>
            </a>
            </div>
        ) : (
            <div>
                <article id='Cart'>
                    {cart.map((item) => (
                    <div className='cart_box' key={item.id}>
                        <div className='cart_img'>
                            <img src={item.img} className='' alt={item.title} />
                            <p className='my-auto'>{item.title}</p>
                        </div>
                        <div className='reducer'>
                            <button className='button mx-auto' onClick={() => handleChange(item, 1)}>+</button>
                            <button className='mx-auto'>{item.amount}</button>
                            <button onClick={() => handleChange(item, -1)}>-</button>
                        </div>
                        <div className='remove-btn'>
                        <span>{item.price}$</span>
                        <button onClick={() => handleRemoveBoth(item.id)}>Remove</button>
                        </div>
                    </div>
                    ))}
                    <div className='total'>
                        <span>Total Price</span>
                        <span>Subtotal: {price}$</span>
                    </div>
                </article>
                <Container>
                    <Row>
                    <Col md={6}>
                        <button className='clear_button mx-auto' onClick={handleClearCart}>
                        Clear Cart
                        </button>
                    </Col>
                    <Col md={6}>
                        <HashLink className='Hash' smooth to='/Checkout#top'>
                            <button className='clear_button mx-auto'>Check Out</button>
                        </HashLink>
                    </Col>
                    </Row>
                </Container>
            </div>
        )}
        {warning && (
            <div className='Notification_remove animate__animated  animate__backInRight '>
            <h3>
                {' '}
                <span class='material-symbols-outlined'>error</span> You Removed product From Cart{' '}
            </h3>
            </div>
        )}
        </>
    );
    };

export default Cart;










