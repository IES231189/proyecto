import React from 'react'
import Title from '../atomos/Title';
import image from './../../assets/image_Logo.jpg'


const Header = () => {
    
    return(
        <header className='navbar '>
        <div className='img-content'>
            <img src={image}  width={78} height={110}></img>
        </div>
        <div className='title-content'>
            <Title  /> 
        </div>            
</header> 
    );
}

export default Header;