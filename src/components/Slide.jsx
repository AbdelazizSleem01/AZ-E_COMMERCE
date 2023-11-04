import React from 'react'
import imgslide1 from './img/slide1.jpg'
import imgslide2 from './img/slide2.jpg'
import imgslide3 from './img/slide3.jpg'
import imgslide4 from './img/slide4.jpeg'
import imgslide5 from './img/slide5.jpg'
import imgslide6 from './img/slide6.jpg'
import imgslide7 from './img/slide7.jpg'
import imgslide8 from './img/imgslide8.jpg'
import minibanner1 from './img/mini-banner1.jpeg'
import minibanner2 from './img/mini-banner2.jpeg'
import '../style/Slide.scss'
import { Col, Container, Row , Image} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Slide = () => {
    return (
        <>
            <Container fluid className='coursole' >
                <Row>
                    <Col className='mx-auto'  lg={8} sm={12} >
                    <Swiper
                        pagination={{
                        dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide ><Image src={imgslide1} /> </SwiperSlide>
                        <SwiperSlide ><Image src={imgslide2} /> </SwiperSlide>
                        <SwiperSlide ><Image src={imgslide3} /> </SwiperSlide>
                        <SwiperSlide ><Image src={imgslide4} /> </SwiperSlide>
                        <SwiperSlide ><Image src={imgslide5} /> </SwiperSlide>
                        <SwiperSlide ><Image src={imgslide6} /> </SwiperSlide>
                        <SwiperSlide ><Image src={imgslide7} /> </SwiperSlide>
                        <SwiperSlide ><Image src={imgslide8} /> </SwiperSlide>
            
                    </Swiper>
                    </Col>
                    <Col lg={4} sm={12} className='mini_banner '>
                        <Row className='d-flex'>
                            <Col sm={6} lg={12}> 
                                <Image src={minibanner1} rounded fluid  />
                            </Col>
                            <Col sm={6} lg={12}>
                                <Image className='mini' src={minibanner2} rounded fluid  />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Slide
