import React, {useEffect,useState } from 'react';
import { Button } from 'react-bootstrap';
import '../style/Favor.scss'
import '../style/amazon.scss'

const Favor = ({ fav, setFav,handleClick }) => {
    const [warning, setWarning] = useState(false);
    const [cart , setCart] = useState([]);

    useEffect(() => {
			const storedCart = JSON.parse(localStorage.getItem('cart'));
			if (storedCart) setCart(storedCart);
		}, []);


    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(fav));
    }, [fav]);

    const handleRemove = (id) => {
        const newfav = fav.filter((item) => item.id !== id);
        setFav(newfav);
    };

    const handleClearfav = () => {
        setFav([]);
        localStorage.removeItem('fav');
    };

    const favIsEmpty = fav.length === 0;
    const price = fav.reduce(
        (total, item) => total + item.price * item.amount,
        0
    );



    const handleRemov2 = (id) => {
        const hasItem = fav.some((product) => product.id === id);
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
        
        <div className='fav_title'>
            <h3 >
                Wishlist
            </h3>
        </div>
        {favIsEmpty ? (
            <div className='Favor_empty'>
            <h3 className='mx-auto text-center'>The Fav Is Empty</h3>
            <a className='HashLink'  href='cards'>
                <Button className='mx-auto'>
                <strong>Shop Now!</strong> <span className="material-symbols-outlined">arrow_circle_right</span>
                </Button>
            </a>
            </div>
        ) : (
            <div>
            <article className='Favor' id='Favor'>
                {fav.map((item) => (
                <div className='cart_box' key={item.id}>
                    <div className='cart_img'>
                        <img src={item.img} className='' alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                    <div className='reducer'>
                        <button onClick={()=>handleClick(item)}>
                            Add To Cart
                        </button>
                    </div>
                    <div className='remove-btn'>
                        <span>{item.price}$</span>
                        <button onClick={() => handleRemoveBoth(item.id)}>Remove</button>
                    </div>
                </div>
                ))}
            </article>
                <button className='clear_button_fav mx-auto' onClick={handleClearfav}>Clear Wishlist</button>
            </div>
        )}
        {warning &&  <div className='Notification_remove animate__animated  animate__backInRight '>
                        <h3> <span class="material-symbols-outlined">error</span> You Removed product from Wishlist</h3>
                    </div>   
                    }
        </>
    );
};

export default Favor;