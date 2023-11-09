import { BrowserRouter, Routes,Route } from 'react-router-dom';
import React , {useState,useEffect,} from 'react';
import { HashLink } from 'react-router-hash-link';
import PropagateLoader from "react-spinners/PropagateLoader";
import Alogo from '../src/components/img/letter-a-load.png'
import Zlogo from '../src/components/img/letter-z.png'
import Home from './components/Home';
import SingleCard1 from './components/SingleCard1';
import SingleCard2 from './components/SingleCard2';
import SingleCard3 from './components/SingleCard3';
import SingleCard4 from './components/SingleCard4';
import SingleCard5 from './components/SingleCard5';
import SingleCard6 from './components/SingleCard6';
import SingleCard7 from './components/SingleCard7';
import SingleCard8 from './components/SingleCard8';
import SingleCard9 from './components/SingleCard9';
import SingleCard10 from './components/SingleCard10';
import SingleCard11 from './components/SingleCard11';
import SingleCard12 from './components/SingleCard12';
import SingleCard13 from './components/SingleCard13';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Amazon from './components/Amazon';
import Favor from './components/Favor';
import AfterCards from './components/AfterCards'
import Footer from './components/Footer.jsx';
import Contact from './components/Contact';
import Login from './components/Login';
import SignIn from './components/SignIn';
import ForgetPass from './components/ForgetPass';
import Chatbot from './components/Chatbot';
import Chat from './components/Chat.jsx';
import CheckOut from './components/CheckOut';
import Compare from './components/Compare';
import Payment from './components/Payment';
import  SmallPage from './components/SmallPage';
import './App.scss'
import 'animate.css';
import './style/amazon.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
	
		const [show, setShow] = useState(true);
		const [cart , setCart] = useState([]);
		const [fav , setFav] = useState([]);
		const [check , setCheck] = useState([]);
		const [warning, setWarning] = useState(false);
		const [warningfav, setWarningfav] = useState(false);
		const [warningcheck, setWarningcheck] = useState(false);
		const [firstName, setFirstName] = useState('');
		const [lastName, setLastName] = useState('');

		// loading
		const[loading , setloading] = useState(false);
			useEffect(()=>{
			setloading(true);
			setTimeout(()=>{
			setloading(false)
			},0)
		},[])

		// localstorage

		useEffect(() => {
			const savedFirstName = localStorage.getItem('firstName');
			const savedLastName = localStorage.getItem('lastName');
		
			if (savedFirstName && savedLastName) {
				setFirstName(savedFirstName);
				setLastName(savedLastName);
				}
			});

		useEffect(() => {
			const storedCart = JSON.parse(localStorage.getItem('cart'));
			if (storedCart) setCart(storedCart);
		}, []);

		useEffect(() => {
			const storedfav = JSON.parse(localStorage.getItem('fav'));
			if (storedfav) setFav(storedfav);
		}, []);

		useEffect(() => {
			const storedCheck = JSON.parse(localStorage.getItem('check'));
			if (storedCheck) setCheck(storedCheck);
		}, []);

		//Click

//handleClick

		const handleClick = (item) => {
			let isPresent = false;
			cart.forEach((product) => {
				if (item.id === product.id)
					isPresent = true;
			})
			if (isPresent) {
				setWarning(true);
				setTimeout(() => {
					setWarning(false);
				}, 4000);
				return;
			}
			setCart([...cart, item]);
			localStorage.setItem('cart', JSON.stringify(cart));
		};

//handleCheck
		const handleCheck = (item) => {
			let isPresentcheck = false;
			check.forEach((product) => {
				if (item.id === product.id)
				isPresentcheck = true;
			})
			if (isPresentcheck) {
				setWarningcheck(true);
				setTimeout(() => {
					setWarningcheck(false);
				}, 4000);
				return;
			}
			setCheck([...check, item]);
			localStorage.setItem('check', JSON.stringify(check));
		};
//handleClickfav
		const handleClickfav = (item) => {
			let isPresentfav = false;
			fav.forEach((product) => {
				if (item.id === product.id)
				isPresentfav = true;
			})
			if (isPresentfav) {
				setWarningfav(true);
				setTimeout(() => {
					setWarningfav(false);
				}, 4000);
				return;
			}
			setFav([...fav, item]);
			localStorage.setItem('fav', JSON.stringify(fav));
		};

//Change


//handleChange
		const handleChange = (item, d) => {
			let ind = 0;
			cart.forEach((data, index) => {
				if (data.id === item.id)
					ind = index;
			});
			const tempArr = cart;
			tempArr[ind].amount += d;
			if (tempArr[ind].amount === 0)
				tempArr[ind].amount = 1;
			setCart([...tempArr]);
			localStorage.setItem('cart', JSON.stringify(cart));
		}

//handleChangefav
		const handleChangefav = (item, d) => {
			let ind = 0;
			fav.forEach((data, index) => {
				if (data.id === item.id)
					ind = index;
			});
			const tempArr = fav;
			tempArr[ind].amount += d;
			if (tempArr[ind].amount === 0)
				tempArr[ind].amount = 1;
			setFav([...tempArr]);
			localStorage.setItem('fav', JSON.stringify(fav));
		}

//handleChangeCheck

const handleChangeCheck = (item, d) => {
	let ind = 0;
	check.forEach((data, index) => {
		if (data.id === item.id)
			ind = index;
	});
	const tempArr = check;
	tempArr[ind].amount += d;
	if (tempArr[ind].amount === 0)
		tempArr[ind].amount = 1;
		setCheck([...tempArr]);
	localStorage.setItem('check', JSON.stringify(check));
}

const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
	};

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
			{loading ?
				<div className='Loader'>
					<div className='Loader_Logo '>
						<img src={Alogo} alt='A LOGO' /> <img src={Zlogo} alt='Z LOGO' />
					</div>
					<PropagateLoader
					className='Prog'
						color="#046D38ED"
						cssOverride={{}}
						loading
						size={35}
						speedMultiplier={1}
						/>
				</div>:
				<div className='animate__animated  animate__fadeIn animate__delay-1s'>
					<BrowserRouter >
						<Navbar size={cart.length} setShow={setShow}  favor={fav.length} Comp={check.length} firstName={firstName} lastName={lastName}/>
							{/* <Chat/> */}
							<Chatbot/>
						<HashLink className='TOTOP' >
							<button className={`scroll-to-top  ${visible ? 'visible' : ''}`}  onClick={() => scrollToTop()}><i class="fa-solid fa-angles-up"></i></button>
						</HashLink>
						<Routes>
							<Route path='/' element = {<Home/>}/>
							<Route path='/Contact' element = {<Contact/>}/>
							<Route path='/Login' element = {<Login />}/>
							<Route path='/SignIn' element = {<SignIn setFirstName={setFirstName} setLastName={setLastName}/>}/>
							<Route path='/SmallPage' element = {<SmallPage firstName={firstName} lastName={lastName}/>}/>
							<Route path='/reset' element = {<ForgetPass/>}/>
							<Route path='/Checkout' element = {<CheckOut cart={cart} handleRemove={handleRemove}/>}/>
							<Route path='/Compare' element = {<Compare/>}/>
							<Route path='/Payment' element = {<Payment  cart={cart}/>}/>
							<Route path='/SingleCard1' element = {<SingleCard1/>}/>
							<Route path='/SingleCard2' element = {<SingleCard2/>}/>
							<Route path='/SingleCard3' element = {<SingleCard3/>}/>
							<Route path='/SingleCard4' element = {<SingleCard4/>}/>
							<Route path='/SingleCard5' element = {<SingleCard5/>}/>
							<Route path='/SingleCard6' element = {<SingleCard6/>}/>
							<Route path='/SingleCard7' element = {<SingleCard7/>}/>
							<Route path='/SingleCard8' element = {<SingleCard8/>}/>
							<Route path='/SingleCard9' element = {<SingleCard9/>}/>
							<Route path='/SingleCard10' element = {<SingleCard10/>}/>
							<Route path='/SingleCard11' element = {<SingleCard11/>}/>
							<Route path='/SingleCard12' element = {<SingleCard12/>}/>
							<Route path='/SingleCard13' element = {<SingleCard13/>}/>
						</Routes>
						{show ? (
							<Amazon  handleClick={handleClick}  handleClickfav={handleClickfav}  handleCheck={handleCheck} />
							) : (
								<>
									<div  id = 'Cart'>
										<Cart cart={cart}  setCart={setCart}  handleChange={handleChange} handleRemove={handleRemove}/>
									</div>
									<div id = 'Favor'>
										<Favor fav={fav} cart={cart} setFav={setFav} handleChangefav={handleChangefav} handleClick={handleClick} />
									</div>
									<div id = 'Check'>
										<Compare check={check} cart={cart}  setCheck={setCheck} handleClick={handleClick} handleChangeCheck={handleChangeCheck}/>
									</div>
								</>
								)}
							{warning &&  <div className='Notification animate__animated  animate__backInRight '>
											<h3> <span class="material-symbols-outlined">task_alt</span> Item is already added to cart</h3>
										</div>   
										}
							{warningfav &&  <div className='Notification animate__animated  animate__backInRight '>
											<h3> <span class="material-symbols-outlined">task_alt</span> Item is already added to Favourite</h3>
										</div>   
										}
							{warningcheck &&  <div className='Notification animate__animated  animate__backInRight '>
											<h3> <span class="material-symbols-outlined">task_alt</span> Item is already added to Compare</h3>
										</div>   
										}
						<Routes>
							<Route path='/' element={<AfterCards/>}/>
							<Route path='/Footer' element={<Footer/>}/>
						</Routes>
						<Footer/>
					</BrowserRouter>
				</div>
			}
		</>
	)
}

export default App
