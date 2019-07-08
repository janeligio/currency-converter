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
      flex: '1'
    };
    return (
        <div style={style}>
          From
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
                      </option>
                  ))}
                </select>
              </form>
            </div>
            <div style={containerChild}>
              Price:
              <form>
                <input
                    name="amount"
                    type="number"
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