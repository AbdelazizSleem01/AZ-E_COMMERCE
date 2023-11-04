import React, {useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../style/Compare.scss';
import '../style/amazon.scss';


const Compare = ({check, setCheck, handleClick}) => {
    const [cart , setCart] = useState([]);

    useEffect(() => {
			const storedCart = JSON.parse(localStorage.getItem('cart'));
			if (storedCart) setCart(storedCart);
		}, []);

    useEffect(() => {
        localStorage.setItem('check', JSON.stringify(check));
    }, [check]);

    const handleChangeCheck = (item, amount) => {
        const newCheck = check.map((i) =>
        i.id === item.id ? { ...i, amount: i.amount + amount } : i
        );
        setCheck(newCheck);
    };

    const handleRemove = (id) => {
        const newCheck = check.filter((item) => item.id !== id);
        setCheck(newCheck);
    };

    const handleClearCart = () => {
        setCheck([]);
        localStorage.removeItem('check');
    };

    const checkIsEmpty = check.length === 0;
    const price = check.reduce(
        (total, item) => total + item.price * item.amount,
        0
    );

    const [warning, setWarning] = useState(false);
    const handleRemov2 = (id) => {
        const hasItem = check.some((product) => product.id === id);
        if (hasItem) {
        setWarning(true);
        setTimeout(() => {
            setWarning(false);
        }, 4000);
        return;
        }
    };

    const handleRemoveBoth= (id) =>{
        handleRemove(id);
        handleRemov2(id);
    } 


        return (
            <>
            <div className="Compare_title" id="Compare">
                <h3>Compare Product</h3>
            </div>
            {checkIsEmpty ? (
                <div className="Empty_compare">
                    <h3 className="mx-auto text-center">The Cart Is Empty</h3>
                    <a className="HashLink" href="cards">
                        <Button className="mx-auto">
                            <strong>Shop Now!</strong>{" "}
                            <span className="material-symbols-outlined">arrow_circle_right</span>
                        </Button>
                    </a>
                </div>
            ) : (
                <div className="Compare mx-auto">
                <Table striped hover responsive >
                    <tbody>
                    <tr >
                        <td className='pro_title'><h5 className='text-center'>Product</h5></td>
                        {check.map((item) => (
                        <td key={item.id} className='Items'>
                            <button className='Remove' onClick={() => handleRemoveBoth(item.id)}>Remove</button>
                            <div className="product-details">
                                <img src={item.img} alt={item.title} className="product-image mx-auto" />
                                <p className="mx-auto text-center">{item.title}</p>
                            </div>
                        </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="Head_side">Rating</td>
                        {check.map((item) => (
                        <td key={item.id}>
                            <Stack className="stars">
                            <Rating
                                className="stars mx-auto"
                                name="half-rating-read"
                                defaultValue={5}
                                precision={3}
                                readOnly
                            />
                            </Stack>
                        </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="Head_side">Price</td>
                        {check.map((item) => (
                        <td key={item.id} className="text-center Value">
                            {item.price}$
                        </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="Head_side">Category</td>
                        {check.map((item) => (
                        <td key={item.id} className="text-center Value">
                            {item.SASA}
                        </td>
                        ))}
                    </tr>
                    <tr>
                    <td className="Head_side">ADD</td>
                        {check.map((item) => (
                        <td key={item.id} >
                            <div>
                                <button className='ADD_BUTTON mx-auto' onClick={()=>handleClick(item)}>
                                    Add To Cart
                                </button>
                            </div>
                        </td>
                        ))}
                    </tr>
                    </tbody>
                </Table>
        
                <Container>
                    <Row>
                    <Col>
                        <button className="clear_btn mx-auto" onClick={handleClearCart}>
                        Clear Cart
                        </button>
                    </Col>
                    </Row>
                </Container>
                </div>
            )}
        
            {warning && (
                <div className="Notification_remove animate__animated  animate__backInRight ">
                <h3>
                    <span className="material-symbols-outlined">error</span> You Removed product From Compare
                </h3>
                </div>
            )}
            </>
        );
}

export default Compare
