import React from 'react'
import {HeaderBox,LogoBox} from './Header.ts'
import Search from '../Search/Search'

const Header = () => {
  return (
    <HeaderBox>
      <LogoBox>
        <div>
            <img src={process.env.PUBLIC_URL + '/images/FoodyZone.svg'} alt='dices' />
         </div>              
      </LogoBox>
      <Search/>
    </HeaderBox>
  )
}

export default Header;