import './App.css';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        
        {/* Email input */}
        <label htmlFor="email"><b>Email</b></label>
        <input 
          type="email" 
          placeholder="Enter Email" 
          name="email" 
          id="email" 
          required 
        />

        {/* Password input */}
        <label htmlFor="psw"><b>Password</b></label>
        <input 
          type="password" 
          placeholder="Enter Password" 
          name="psw" 
          id="psw" 
          required 
        />

        {/* Submit button */}
        <button type="submit" className="registerbtn">OK</button>
      </div>
      
      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
