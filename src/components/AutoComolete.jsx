import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import card1 from './img/card1.jpg'
import card2 from './img/card2.jpg'
import card3 from './img/card3.jpg'
import card4 from './img/card4.jpg'
import card5 from './img/card5.jpg'
import card6 from './img/card6.jpg'
import card7 from './img/card7.jpg'
import card8 from './img/card8.jpg'
import card9 from './img/card9.jpg'
import card65 from './img/card65.jpg'
import card22 from './img/card22.jpg'
import card20 from './img/card20.jpg'
import card38 from './img/card38.jpg'
import card33 from './img/card33.jpg'
import card31 from './img/card31.jpg'
import card30 from './img/card30.jpg'
import card52 from './img/card52.jpg'
import card23 from './img/card23.jpg'
import card63 from './img/card63.jpg'
import card62 from './img/card62.jpg'
import card67 from './img/card67.jpg'
import card82 from './img/card82.jpg'
import card57 from './img/card57.jpg'
import card58 from './img/card58.jpg'
import card59 from './img/card59.jpg'
import phone2 from './img/phone2.jpg'
import book1 from './img/book1.jpg'
import book2 from './img/book2.jpg'
import watch2 from './img/watch2.jpg'
import watch3 from './img/watch3.jpg'
import '../style/AutoSearch .scss'
import { HashLink } from 'react-router-hash-link';

export default function ComboBox() {

    return (
        <Autocomplete
            className='Autocomplete'
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search... " /> }
            renderOption={(props, option) => (
                <Card  className='card'>
                    <HashLink smooth to = {option.link}>
                    <   CardMedia className='img mx-auto img-fluid' component="img" style={option.style}   image={option.img} alt={option.label} />
                    </HashLink>
                    <CardContent>
                        <Typography className='' variant="body2">
                        <HashLink smooth to = {option.link} className='link'>{option.label}  </HashLink>  
                        </Typography>
                    </CardContent>
                </Card>
            )}
        />
    );
}

const top100Films = [
    { label: 'E-Book My First Book (AZ) (120.55$) ',  img  : `${card1}`,link: 'SingleCard1'}, //write alist from short 5 line about Edifier Speakers
    { label: 'Be A High Achiever (AZ) (110.55$) ',  img  : `${book1}`,link: 'SingleCard1'}, //write alist from short 5 line about Edifier Speakers
    { label: 'Budgeting 6E - 6th (AZ) (135.55$) ',  img  : `${book2}`,link: 'SingleCard1'}, //write alist from short 5 line about Edifier Speakers
    { label: 'Sound Intone 165 Earphoe (AZ) (222.99$) ',  img : `${card2}` ,link: 'SingleCard2'},
    { label: 'Korea Sofa(AZ) (1043.55$) ',  img : `${card3}` ,link: 'SingleCard3' },
    { label: 'Claure Austin Lover (AZ) (320.55$) ',  img : `${card58}` ,link: 'SingleCard3' },
    { label: 'Korea Fabric Chair(AZ) (443.99$) ',  img : `${card59}` ,link: 'SingleCard3' },
    { label: 'Military BackBag(AZ) (57.55$)',  img : `${card4}`,link: 'SingleCard4'},
    { label: 'MVMTH Watch (AZ) (150.22$)',  img : `${card5}`, link: 'SingleCard5' },
    { label: "Diesel Men's Mega (AZ) (358.99$)" ,  img : `${watch3}`, link: 'SingleCard5' },
    { label: 'Re16gio Mormaii Ana16gico (AZ) (249.55$)',  img : `${watch2}`, link: 'SingleCard5' },
    { label: "Wireless Speaker (AZ) (135.33$)'",  img : `${card6}`, link: 'SingleCard6'  },
    { label: 'LG Steam Washer (AZ) (1442.7$)',  img : `${card7}`, link: 'SingleCard7'},
    { label: 'Edifier Speakers (AZ) (189.5$)',  img : `${card8}`, link: 'SingleCard8'},
    { label: 'Security Camera (AZ) (550.99$)',  img : `${card9}`, link: 'SingleCard9'},
    { label: 'Gaming Mouse  (AZ) (86.5$)',  img : `${card20}`, link: 'SingleCard10'},
    { label: 'OPPO A78 (AZ) (7890.45$)',  img : `${card22}`, link: 'SingleCard11'},
    { label: 'XIAOMI Mi 11 Lite (AZ) (7890.9$)',  img : `${phone2}`, link: 'SingleCard11'},
    { label: 'Apple iPhone 14 Pro Max  (AZ) (30000.5$)',  img : `${card23}` , link: 'SingleCard12' },
    { label: 'Polo Ralph Lauren  (AZ) (145.55$)',  img : `${card38}` , link: 'SingleCard12' },
    { label: 'Tipped Polo Shirt  (AZ) (180.55$)',  img : `${card33}` , link: 'SingleCard12' },
    { label: 'Sports Fitness Clothing  (AZ) (127.55$)',  img : `${card31}` , link: 'SingleCard12' },
    { label: 'Marmot Camp Hauler (AZ) (457.55$)',  img : `${card30}` , link: 'SingleCard12' },
    { label: 'Pullover Hoodie  (AZ) (257.55$)',  img : `${card52}` , link: 'SingleCard12' },
    { label: 'Mixed Material  (AZ) (4880.45$)',  img : `${card65}` , link: 'SingleCard12' },
    { label: 'Blender/mixer  (AZ) (2599.9$)',  img : `${card63}` , link: 'SingleCard12' },
    { label: 'KENMORE ELITE  (AZ) (480.55$)',  img : `${card62}` , link: 'SingleCard12' },
    { label: 'Gallon Water Dispenser  (AZ) (880.9$)',  img : `${card67}` , link: 'SingleCard12' },
    { label: 'Ergonomic Computer  (AZ) (1880.5$)',  img : `${card82}` , link: 'SingleCard12' },
    { label: 'Mixed Material  (AZ) (4880.45$)',  img : `${card57}` , link: 'SingleCard12' },
    
];


// can tell me what is price of Wireless Speaker ?

// please I would like to buy a book today

// What is E-commerce

// I want to programming book

//please I would like to buy a book tommorow from BENHA

// I want to programming book

// Where i can find electric product 

// How Can I Login

// I want to cancel the JavaScript book

// How do I contact customer service?