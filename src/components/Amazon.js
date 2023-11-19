import React from 'react';
import list from '../data';
import '../style/amazon.scss';
import Cards from './Cards';

const Amazon = ({ handleClick, handleClickfav,handleCheck}) => {
    return (
        <>
            <section className='amazon'>
                {list.map((item) => (
                    <React.Fragment key={item.id}>
                        <Cards item={item} handleClick={handleClick} handleClickfav={handleClickfav}  handleCheck={handleCheck}/>
                    </React.Fragment>
                ))}
            </section>
            
        </>
    );
};

export default Amazon;