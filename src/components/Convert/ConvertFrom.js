import React from 'react';

class ConvertFrom extends React.Component {
  state = {
    amount: 1,
    base: this.props.base
  };

  componentDidMount() {
    //Todo
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    this.props.handleInput(this.state.amount)
  }

  handleSelect = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    this.props.handleSelect("base", this.state.base)
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
                    value={this.state.base}
                    onChange={this.handleSelect}
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
                    value={this.state.amount}
                    onChange={this.handleInput}
                />
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default ConvertFrom;