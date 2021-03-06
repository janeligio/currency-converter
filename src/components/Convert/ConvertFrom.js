import React from 'react';

class ConvertFrom extends React.Component {
  componentDidMount() {
    //Todo
  }

  render() {
    const style = {
      flex: '1',
      backgroundColor: '#DADADA',
      height: '300px'
    };
    const container = {
      border: '1px solid black',
      height: '100px',
      display: 'flex'
    };
    const containerChild = {
      border: '1px solid black',
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
        <div style={style}>
          <h1>From</h1>
          <div style={container}>
            <div style={containerChild}>
              <form>
                <select
                    name="base"
                    value={this.props.base}
                    onChange={this.props.handleSelect}
                >
                  {this.props.currencies.map(currency => (
                      <option key={currency} value={currency}>
                        {currency}
                        {this.props.countryName}
                      </option>
                  ))}
                </select>
              </form>
            </div>
            <div style={containerChild}>
              <img src={`https://www.countryflags.io/${this.props.base.slice(0,2)}/shiny/32.png`} alt="flag"/>
              <p>{this.props.currencySymbol}</p>
              <form>
                <input
                    name="amount"
                    value={this.props.amount}
                    onChange={this.props.handleInput}
                />
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default ConvertFrom;