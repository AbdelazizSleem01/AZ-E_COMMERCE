import React from 'react'
import { Container ,Row ,Col } from 'react-bootstrap'
import '../style/Whyus.scss'

const Whyus = () => {
    return (
        <div>
        <Container>
            <Row className='why_us'>
            <Col lg={2} md={3} sm={12} className='icons_why' >
                <span class="material-symbols-outlined">rocket_launch</span>
                <h3>Free Delivery</h3>
                <p>For all oders over $99</p>
            </Col>
            <Col lg={2} md={3} sm={12} className='icons_why' >
                <span class="material-symbols-outlined">recycling</span>
                <h3>90 Days Return</h3>
                <p>If good have problems</p>
            </Col>
            <Col lg={2} md={3} sm={12} className='icons_why' >
                <span class="material-symbols-outlined">credit_card</span>
                <h3>Secure Payment</h3>
                <p>100% secure payment</p>
            </Col>
            <Col lg={2} md={3} sm={12} className='icons_why' >
                <span class="material-symbols-outlined">mail</span>
                <h3>24/7 Support</h3>
                <p>Dedicated support</p>
            </Col>
            <Col lg={2} md={3} sm={12} className='icons_why' >
                <span class="material-symbols-outlined">redeem</span>
                <h3>Gift Service</h3>
                <p>Support gift service</p>
            </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Whyus
