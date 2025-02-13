import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <footer>
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
    </footer>
  );

}
export default Footer;