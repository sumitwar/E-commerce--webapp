import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvoider';
import { auth } from './firebase';


function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user)
            {
               auth.signOut();
            }    
        }


  return (
    <div className='header'>
        <Link to='/'>
        <img className='header__logo' src = "https://pngshare.com/wp-content/uploads/2021/06/Amazon-Smile-Logo-Transparent-3.png" alt='logo'/>
        </Link>
        <div className='header__search'>
           <input className='header__searchInput' type='text'/>
           <SearchIcon 
           className="header__searchIcon"/>
        </div>

        <div className='header__nav'>
            <Link to = {!user &&'/login'}>
            <div  onClick = {handleAuthentication} className='header__option'>
                
                <span className='header__optionLineOne'>
                    Hello Guest !
                </span>
                <span className='header__optionLineTwo'>
                    {user ? 'Sign Out' : 'Sign In'} 
                </span>
            </div>
            </Link>

            <div className='header__option'>
            <span className='header__optionLineOne'>
                    Returns
                </span>
                <span className='header__optionLineTwo'>
                    & Orders
                </span>
                
            </div>

            <div className='header__option'>
            <span className='header__optionLineOne'>
                   Your
                </span>
                <span className='header__optionLineTwo'>
                    Prime
                </span>
            </div>

            <Link to='/checkout'>
            <div className="header__optionBasket">
            <AddShoppingCartIcon/>
            <span className="header__optionLineTwo,
             header__basketCount">{basket.length}</span>
            </div>
            </Link>
                
        </div>
    </div>
  )
}

export default Header