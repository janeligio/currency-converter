import React from 'react';

class ConvertTo extends React.Component {

  componentDidMount() {
    //Todo
  }

  render() {

    const style = {
      flex: '1',
      backgroundColor: '#DADADA',
      borderLeft: '1px solid black'
    }
    const container = {
      border: '1px solid black',
      height: '100px',
      display: 'flex'
    };
    const containerChild = {
      border: '1px solid black',
      flex: '1'
    };

    return (
        <div style={style}>
          <h1>To</h1>
          <div style={container}>
            <div style={containerChild}>
              <form>
                <select
                    name="convertTo"
                    value={this.props.convertTo}
                    onChange={this.props.handleSelect}
                >
                  {this.props.currencies.map(currency => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                  ))}
                </select>
              </form>
            </div>
            <div style={containerChild}>
              <img src={`https://www.countryflags.io/${this.props.convertTo.slice(0,2)}/shiny/32.png`} alt="flag"/>
              <form>
                <input
                  disabled={true}
                  value={this.props.currencySymbol + " " + this.props.result}
                />
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default ConvertTo;