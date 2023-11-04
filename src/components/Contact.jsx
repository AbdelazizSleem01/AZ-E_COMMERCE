import { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';
import '../style/Contact.scss'
import { Container } from 'react-bootstrap';
import GoogleMaps from './GoogleMaps';


function FormExample() {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        event.stopPropagation();
    }
    
    setValidated(true);
};

const form = useRef();
const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9evneuv', 'template_xu8pwnt', form.current, 'y9jyuQJ5gV82DaY9e')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    const handleFormSubmit = (event) => {
        handleSubmit(event);
        sendEmail(event);
    };


    
    return (
        <>
            <Form className='Contact mx-auto'  id='Contact' onSubmit={handleFormSubmit}  validated={validated} ref={form} >
                <Container className='Row'>
                    <Row className="mb-3 ">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label className='Form_label'>First name :</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name='First_name'
                        />
                        <Form.Control.Feedback className='Valid_true'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback className='Valid_err' type="invalid">
                            Please choose a First name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='Form_label'>Last name :</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                name='Last_name'
                            />
                            <Form.Control.Feedback className='Valid_true'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback className='Valid_err' type="invalid">
                                Please choose a Last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label className='Form_label'>Username :</Form.Label>
                        <InputGroup  hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"><i class="fa-solid fa-at"></i></InputGroup.Text>
                            <Form.Control
                            name='Email'
                            type="email"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                            />
                            <Form.Control.Feedback className='Valid_true'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback className='Valid_err' type="invalid">
                            Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label className='Form_label'>City :</Form.Label>
                            <Form.Control type="text" placeholder="City" name='City' required />
                            <Form.Control.Feedback className='Valid_true'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback className='Valid_err' type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                            <Form.Label className='Form_label'>Massage :</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="inputGroupPrepend"><i class="fa-regular fa-envelope"></i></InputGroup.Text>
                                <Form.Control type="text" placeholder="Massage" name='Massage' required />
                                <Form.Control.Feedback className='Valid_true'>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback className='Valid_err' type="invalid">
                                    Please provide a valid Massage.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check className='Valid_err'
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit" className='mx-auto Btn_Submit' >Submit </Button>
                </Container>
            </Form>
            <div className='Maps mx-auto'>
                <GoogleMaps />
            </div>
        </>
    );
}

export default FormExample;