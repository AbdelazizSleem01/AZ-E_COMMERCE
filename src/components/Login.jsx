import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import google from './img/google.png';
import Tooltip from '@mui/material/Tooltip';
import {auth} from './firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../style/Login.scss'



const Login = () => {

    const Navigation = useNavigate();
    const [login, setLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');



    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    // Google Auth
    const loginWithGoogle = () =>{
        const Provider = new GoogleAuthProvider();   
        signInWithPopup(auth, Provider)
        .then((re)=>{
            console.log(re)
        })
        .catch((err)=>{
            console.log(err)
        })
    };
    
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        event.stopPropagation();
        }
        setValidated(true);
    };
    
    const history = useNavigate();

    const Submit =(e,type) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(type == 'signin'){
            createUserWithEmailAndPassword(auth,email,password).then((data)=>{
                console.log(data,'hi user ')
                history("/Login");
            })
            .catch((err) => {
                alert(err.code);
                setLogin(true)
            });
        }
        else{
            signInWithEmailAndPassword(auth,email,password).then((data)=>{
                console.log(data,'hi user ')
            })
            .catch((err) => {
                alert(err.code);
            });
        }
    }
    const handleReset = ()=>{
        history("/reset");
        };
    
        return (
            <>
                <div className='title_log mx-auto'>
                    <h1 className="text-center">Log In </h1>
                </div>
                <Form className='Login mx-auto'  id='Contact'onClick={handleSubmit} handleSubmit onSubmit={ (e) => Submit(e,login)} validated={validated}  >
                    <Container>
                        <Row className="mb-3" >
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label className='Form_label'>Username :</Form.Label>
                                <InputGroup  hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i class="fa-solid fa-at"></i></InputGroup.Text>
                                    <Form.Control
                                        name='email'
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
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label className='Form_label'>Password :</Form.Label>
                                <InputGroup  hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i class="fa-solid fa-lock"></i></InputGroup.Text>
                                    <Form.Control
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handleChange}
                                        name='password'
                                        placeholder="Password"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Button className='show_hide' onClick={handleTogglePassword}>
                                        {showPassword ? 
                                        <Tooltip title={'Hide Pass'}>
                                            <i class="fa-solid fa-eye-slash"></i> 
                                        </Tooltip>
                                        : 
                                        <Tooltip title={'Show Pass'}>
                                            <i class="fa-solid fa-eye"></i>
                                        </Tooltip>
                                        }
                                    </Button>
                                    <Form.Control.Feedback className='Valid_true'>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback className='Valid_err' type="invalid">
                                        Please choose a Password.
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
                        <Button type="submit" className='mx-auto Btn_Submit' >LogIn</Button>
                        <p className='text-center forgetpass pt-4' onClick={handleReset}>Forgot Password?</p>
                        <h1 className='title_or text-center' >Or Sign Up With</h1>
                        <div className='Login_with'>
                            <img src={facebook} className='img-fluid' />
                            <img  src={google} onClick={loginWithGoogle} className='img-fluid' />
                            <img src={twitter} className='img-fluid' />
                        </div>
                    </Container>
                </Form>
            </>
        )
    }


export default Login
