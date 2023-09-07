import React, { useEffect } from 'react';
import '../components/Footer.css';

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector('.footer');
    window.addEventListener('scroll', () => {
      // Calculate how close the user is to the bottom of the page
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // Show the footer when the user is close to the bottom
      if (scrollHeight - scrollTop === clientHeight) {
        footer.style.display = 'block';
      } else {
        footer.style.display = 'none';
      }
    });
  }, []);

  return (
    <footer className='footer'>
      <div className='footer-2'>Copyright &copy; 2023. All rights reserved</div>
    </footer>
  );
};

export default Footer;
