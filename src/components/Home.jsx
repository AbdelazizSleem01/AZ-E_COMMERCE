import {React, useState, useEffect} from 'react';
import Slide from './Slide';
import Timer from './Timer';
import Whyus from './Why';
import CardsProduct from './CardsProduct'


const Home = () => {

    // to top
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const threshold = 50;
        if (scrolled > threshold) {
            setVisible(true);
            } else {
            setVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisible);

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
                });
            };

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', toggleVisible);
            }
        }, []);
        
    return (
        <>
            <Slide />
            <Whyus/>
			<CardsProduct/>
            <Timer/>
            <hr/>
        </>
    )
}

export default Home
