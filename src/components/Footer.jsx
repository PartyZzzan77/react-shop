import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer blue-grey darken-1'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()}Copyright
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/PartyZzzan77/react-shop'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
