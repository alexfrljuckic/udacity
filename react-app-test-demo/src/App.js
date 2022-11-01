import logo from './logo.svg';
import './App.css';

// App.js

function App() {
  return (
    <div>
      <form>
        <label for="fname">First name:</label>
        <br />
        <input type="text" name="fname" data-testid='first-name-input' />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" name="lname" data-testid='last-name-input' />
        <br />
        <input type="submit" value ='Submit'/>
      </form>
    </div>
  );
}

export default App;
