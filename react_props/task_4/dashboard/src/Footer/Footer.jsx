import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <footer>
        <div className='App-footer'><p>Copyright {getCurrentYear()} - {getFooterCopy()}</p></div>
    </footer>
  );

}
export default Footer;