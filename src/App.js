import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
