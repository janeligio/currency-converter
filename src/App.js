import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ConvertFrom from './components/Convert/ConvertFrom';
import ConvertTo from './components/Convert/ConvertTo';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      base: "USD",
      amount: "",
      convertTo: "EUR",
      result: "",
      currencies: [],
      rates: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.exchangeratesapi.io/latest?base=USD')
      .then((response) => {
      const rates = response.data.rates
      const currencies = Object.keys(rates);
      console.log(rates)
      console.log(currencies)
      this.setState({
        rates,
        currencies,
        amount: 1
      });
      this.calculate();
    })
  }

  handleSelect = (event) => {
    if (event.target.name === "base") {
      axios.get(`https://api.exchangeratesapi.io/latest?base=${event.target.value}`)
        .then((response) => {
        const rates = response.data.rates;
        this.setState({rates}, () => {this.calculate() })
      })
    }
    this.setState({
      [event.target.name]: event.target.value
    }, () => {this.calculate() });
  }

  handleInput = (event) => {
    this.setState({
      amount: event.target.value,
    }, () => {this.calculate() });
  }
  
  calculate = () => {
    const { amount, rates, convertTo } = this.state;
    if (amount === isNaN){
      return;
    } else {
      const result = (amount * rates[convertTo]).toFixed(3);
      console.log(result)
      this.setState({result});
      console.log("calculate")
      console.log(this.state.amount)
      console.log(this.state.result)   }

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
              amount={this.state.amount}
          />
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
