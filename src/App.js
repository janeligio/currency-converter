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
      amount: "",
      convertTo: "EUR",
      result: "",
      currencies: ["USD", "EUR", "JPY", "THB"],
      rates: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.exchangeratesapi.io/latest?base=USD')
      .then((response) => {
      const rates = response.data.rates
      const currencies = // retrieve list of currency codes
    })
    this.setState({rates, currencies})
  }
  
  // currently doesnt do anything with the maths
  handleSelect = (currencySelected, code) => {
    if (currencySelected === "base") {
      axios.get('https://api.exchangeratesapi.io/latest?base=' + 'currencySelected')
        .then((response) => {
        const rates = response.data.rates
        const currencies = // retrieve list of just the currency codes
      })
      this.setState({rates, currencies})
    }
    this.setState({currencySelected: code});
    //this.setState({[event.target.name: event.target.value]});
    this.calculate();
  }

  handleInput = (event) => {
    //console.log(event.target);
    //const exchangeRate = this.state.currency.EUR;
    //const base = event.target.value;
    //const convertedRate = exchangeRate * event.target.value;
    //this.setState({amount: base});
    //this.setState({result: convertedRate});
    this.setState({amount: event.target.value});
    this.calculate();
  }
  
  calculate = () => {
    const result = this.state.amount * this.state.rates[this.state.convertTo];
    this.setState({result})
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
