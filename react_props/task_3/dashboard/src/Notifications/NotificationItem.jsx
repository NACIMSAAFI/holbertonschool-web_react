import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  return (
    <li 
      data-notification-type={type}
      style={{ color: type === 'urgent' ? 'red' : 'blue' }}
    >
      {html ? (
        <span dangerouslySetInnerHTML={html} />
      ) : (
        value
      )}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;