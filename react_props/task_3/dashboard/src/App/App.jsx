import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils/utils';
import './App.css';

function App() {

  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
  ];

  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications listNotifications={notificationsList} />
      </div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
