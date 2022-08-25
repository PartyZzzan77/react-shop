import React from 'react';

const Header = () => {
  return (
    <nav className='blue-grey darken-2'>
      <div className='nav-wrapper'>
        <a
          href='https://reactjs.org/'
          className='brand-logo'
          target='_blank'
          rel='noreferrer'
        >
          React shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/PartyZzzan77'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
