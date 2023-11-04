import React from 'react'
import afterSlideImg1  from  './img/after_slide1.jpeg'
import afterSlideImg2  from  './img/after_slide2.jpeg'
import afterSlideImg3  from  './img/after_slide3.jpeg'
import topImg1 from './img/Top1.png'
import topImg2 from './img/Top2.png'
import topImg3 from './img/Top3.png'
import topImg4 from './img/Top4.png'
import topImg5 from './img/Top5.png'
import { HashLink } from 'react-router-hash-link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import '../style/Cards.scss'
import { Container ,Col, Row ,Image } from 'react-bootstrap'
const CardsProduct = () => {

    return (
        <>
        <Container fluid>
            <Swiper
                slidesPerView={4}
                spaceBetween={300}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                    },
                    400: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                    },
                    500: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    },
                    700: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    },
                    
                    800: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                    },
                    992: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    },
                    1300: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                    {/* card-1 */}
                    <SwiperSlide className='SwiperSlide'>
                        
                    </SwiperSlide>
            </Swiper>
        </Container>
            {/* after_slide */}
            <Container >
                <Row className='after_slide'> 
                    <Col lg={4} md={6} sm={12}>
                        <img className='img-fluid mb-5 mt-5 mx-auto border border-success rounded ' src = {afterSlideImg1} />
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <img className='img-fluid mb-5 mt-5 mx-auto border border-success rounded ' src = {afterSlideImg2}/>
                    </Col>

                    <Col lg={4} md={12} sm={12}>
                        <img className='img-fluid mb-5 mt-5 ms-auto border border-success rounded '  src = {afterSlideImg3}/>
                    </Col>
                </Row>
            </Container>
            <Container >
                <Col className='top_title '>
                    <p>
                        Top Categories Of The Month
                    </p>
                </Col>
                <Row className='text-capitalize mx-auto'>
                    <Col className='top_card mx-auto ' lg={4} md={6} sm={12} >
                        <HashLink>
                            <Image className='Image' src={topImg1}  fluid/>
                        </HashLink>
                        <p>elctronic</p>
                    </Col>
                    <Col className='top_card mx-auto' lg={4} md={6} sm={12}>
                        <HashLink>
                            <Image className='Image' src={topImg2}  fluid/>
                        </HashLink>
                        <p>clothing</p>
                    </Col>
                    <Col className='top_card mx-auto' lg={4} md={6} sm={12}>
                        <HashLink>
                            <Image className='Image' src={topImg3}   fluid/>
                        </HashLink>                        
                        <p>computer</p>
                    </Col>
                    <Col className='top_card mx-auto' lg={4} md={6} sm={12}>
                        <HashLink>
                            <Image className='Image' src={topImg4}  fluid/>
                        </HashLink>
                        <p>home & Kitchen</p>
                    </Col>
                    <Col className='top_card mx-auto' lg={4} md={12} sm={12}>
                        <HashLink>
                            <Image className='Image' src={topImg5}  fluid/>
                        </HashLink>
                        <p>jewelry & Watch</p>
                    </Col>
                </Row>
            </Container>
        </>    
    )
}

export default CardsProduct
