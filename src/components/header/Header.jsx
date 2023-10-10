import './Header.css';
import { useEffect } from 'react';
import background1 from '../../imgs/background1.jpg';
import background2 from '../../imgs/background2.jpg';
import background3 from '../../imgs/background3.jpg';
import background4 from '../../imgs/background4.jpg';
import background5 from '../../imgs/background5.jpg';


const Header = () => {

    useEffect(() =>{

  setInterval(() => {
    let images = [background1 , background2 , background3 , background4 , background5 ];

    let randomNumber = Math.floor(Math.random() * images.length);

   document.querySelector(".header-img").src = `${images[randomNumber]}`
  }, 3000);

    } , [])


  return (
    <div className='header'>
      <img className='header-img' src={background1} alt="background" />
    </div>
  )
}

export default Header
