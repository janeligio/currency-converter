import React from 'react';

class ConvertTo extends React.Component {
  state = {
    convertTo: this.props.convertTo
  };

  componentDidMount() {
    //Todo
  }

  handleSelect = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    this.props.handleSelect("convertTo", this.state.convertTo);
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
          To
          <div style={container}>
            <div style={containerChild}>
              <form>
                <select
                    name="convertTo"
                    value={this.state.convertTo}
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
              Result:<br/>
              {this.props.result}
            </div>
          </div>
        </div>
    );
  }
}

export default ConvertTo;