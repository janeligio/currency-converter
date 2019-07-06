import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ConvertFrom from './components/Convert/ConvertFrom';
import ConvertTo from './components/Convert/ConvertTo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      base: "USD",
      amount: 1,
      convertTo: "EUR",
      result: .89,
      currencies: ["USD", "EUR", "JPY", "THB"],
      currency: {
        USD: 1,
        EUR: .89,
        JPY: 107.82,
        THB : 30.66
      }
    }
  }

  // currently doesnt do anything with the maths
  handleSelect = (currencySelected, code) => {
    this.setState({currencySelected: code})
  }

  // too much math to hard code it, gone let the api do the work
  // this is just for now
  handleInput = (event) => {
    console.log(event.target);
    const exchangeRate = this.state.currency.EUR;
    const base = event.target.value;
    const convertedRate = exchangeRate * event.target.value;
    this.setState({amount: base});
    this.setState({result: convertedRate});
    // let newPrice = amount * .89;
    // this.setState({result: newPrice})
    // this.setState({amount: amount})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="convert-container">
          <ConvertFrom
              base={this.state.base}
              currencies={this.state.currencies}
              amount={this.state.amount}
              handleSelect={this.handleSelect}
              handleInput={this.handleInput}
          />
          <ConvertTo
              convertTo={this.state.convertTo}
              result={this.state.result}
              currencies={this.state.currencies}
              handleSelect={this.handleSelect}
          />
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
