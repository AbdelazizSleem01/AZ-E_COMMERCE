import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import 'swiper/css/pagination';
import 'swiper/css';
import '../style/Cards.scss';
import { Col, Container } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const Cards = ({ handleClickfav, handleClick, handleCheck, item }) => {
    const { title, SASA, price, img, link, sold, progress, offer } = item;
    const [rating, setRating] = useState(() => {
        const savedRating = localStorage.getItem(`rating_${item.id}`);
        return savedRating ? parseFloat(savedRating) : 0;
    });

    useEffect(() => {
        localStorage.setItem(`rating_${item.id}`, rating);
    }, [rating, item.id]);

    return (
        <>
        <Container id='cards' className='cards_all pt-5' fluid>
            <div className='top_title_E'></div>
            {/* card-1 */}
            <Col className='SwiperSlide '>
            <div class='card__collection h-100 clear-fix'>
                <Col className='HEAD_PRODUCT mx-auto'md={12}>
                    <p>{SASA}</p>
                </Col>
                <div class='cards cards--three'>
                <div>
                    <span className='offer'> {offer}</span>
                </div>
                <HashLink smooth to={link}>
                    <img src={img} class='img_product mx-auto' alt='' />
                </HashLink>
                <span class='cards--three__circle'></span>
                <ul class='cards--three__list'>
                    <li onClick={() => handleClick(item)}>
                    <span class='material-symbols-outlined'>shopping_bag</span>
                    </li>
                    <li onClick={() => handleClickfav(item)}>
                    <span class='material-symbols-outlined'>favorite</span>
                    </li>
                    <li onClick={() => handleCheck(item)}>
                    <span class='material-symbols-outlined'>insert_chart</span>
                    </li>
                    <HashLink smooth to={`/${link}#top`}>
                    <li>
                        <span class='material-symbols-outlined'>visibility</span>
                    </li>
                    </HashLink>
                </ul>
                <div className='price'>
                    <p>Price: {price} $</p>
                </div>
                <div className='lower_card'>
                    <HashLink to={link} style={{ textDecoration: 'none' }}>
                    <p className='title-card'>{title}</p>
                    </HashLink>
                </div>
                <span className='rate '>
                    <span className='Rating'>
                    <Rating
                        className='Stars_Rate'
                        name={`rating_${item.id}`}
                        value={rating}
                        onChange={(event, newValue) => {
                        setRating(newValue);
                        }}
                        precision={0.5}
                        size='large'
                    />
                    </span>
                    <progress
                    className='progress mx-auto'
                    value={progress}
                    max='100'
                    >
                    50%
                    </progress>
                    <p className='sold'>Sold: {sold}</p>
                </span>
                </div>
            </div>
            </Col>
        </Container>
        </>
    );
};

export default Cards;