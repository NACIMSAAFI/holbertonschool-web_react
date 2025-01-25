import React from 'react';
import closeIcon from './assets/close-button.png';
import { getLatestNotification } from './utils';
import './Notifications.css';

function Notifications() {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <button
  aria-label="Close"
  style={{
    display: "inline-block",
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer"
  }}
  onClick={() => {console.log("Close button has been clicked")}}
  type="button"
>
  <img 
    src={closeIcon} 
    alt="close button" 
    style={{ width: "10px", height: "10px" }}
  />
</button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li className='Latest-Notification' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
