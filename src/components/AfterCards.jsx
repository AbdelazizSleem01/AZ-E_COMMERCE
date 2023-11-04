import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap'
import After from './img/After.jpeg'
import After1 from './img/After1.jpeg'
import A1 from './img/1.jpg'
import A2 from './img/2.jpg'
import A3 from './img/3.jpg'
import A4 from './img/4.jpg'
import A5 from './img/5.jpg'
import A6 from './img/6.jpg'
import A7 from './img/7.jpg'
import A8 from './img/8.jpg'


const AfterCards = () => {
    return (
        <>
            <Container fluid className='mx-auto mt-5' >
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <Image src={After} className='h-100 w-100 pb-sm-2 '  fluid/>
                    </Col>
                    <Col lg={4} md={6}  sm={12}>
                        <Image src={After1} className='h-75 w-100 mt-sm-5'  fluid/>
                    </Col>
                </Row>
                <Row className='mt-5 pt-5 d-flex justify-content-between '>
                    <Col className='pb-4 ' >
                        <Image src={A1}   />
                    </Col>
                    <Col className='pb-4 ' >
                        <Image src={A2}   />
                    </Col>
                    <Col className='pb-4 ' >
                        <Image src={A3}   />
                    </Col>
                    <Col className='pb-4 ' >
                        <Image src={A4}   />
                    </Col>
                    <Col className='pb-4 ' >
                        <Image src={A5}   />
                    </Col>
                    <Col className='pb-4 ' >
                        <Image src={A6}   />
                    </Col>
                    <Col className='pb-4 ' >
                        <Image src={A7}   />
                    </Col>
                    <Col className='pb-4 ' >
                        <Image src={A8}   />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AfterCards
