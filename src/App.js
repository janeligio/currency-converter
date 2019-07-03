import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {

render() {
  return (
    <div className="App">
    <Header />
    <Router>
    <div style={{height:'400px'}}>
      <p>hi</p>
    </div>
    <Navigation />
    </Router>
    </div>
  );
}

}

export default App;
