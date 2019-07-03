import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ConvertFrom from './components/Convert/ConvertFrom';
import ConvertTo from './components/Convert/ConvertTo';

class App extends React.Component {

render() {
  return (
    <div className="App">
    <Header />
    <div className="convert-container">
    <ConvertFrom className/>
    <ConvertTo />
    </div>
    <Footer />
    </div>
  );
}

}

export default App;
