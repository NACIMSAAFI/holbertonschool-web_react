import React from 'react';
import closeIcon from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


function Notifications({ listNotifications = [] }) {
  return (
    <div className="notifications" data-testid="notifications">
      <p>Here is the list of notifications</p>
      <button
        aria-label="Close"
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => {
          console.log('Close button has been clicked');
        }}
        type="button"
      >
        <img
          src={closeIcon}
          alt="close button"
          style={{ width: '10px', height: '10px' }}
        />
      </button>
      <ul>
        {listNotifications.map((notification) => (
          <NotificationItem
          key={notification.id}
          type={notification.type}
          value={notification.value}
          html={notification.html}
          />
        ))}
      </ul>
    </div>
  );
}

Notifications.prototype = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.shape,
      html: PropTypes.shape({__html: PropTypes.string })
    })
  )
};

export default Notifications;