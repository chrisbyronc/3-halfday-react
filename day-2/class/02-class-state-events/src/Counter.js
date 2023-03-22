import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.count ? props.count : 0,
      initialCount: props.count ? props.count : 0
    }
  }

  incrementHandler = () => {
    if (this.state.count < 20) {
      this.setState((state) => {
        return { count: state.count + 1}
      })
    }
  }

  decrementHandler = () => {
    if (this.state.count > 0) {
      this.setState((state) => {
        return { count: state.count - 1}
      })
    }
  }

  handleReset = () => {
    this.setState((state) => {
      return { count: state.initialCount }
    })
  }

  render() {
    let color = 'black'
    let resetDisplay = 'none'
    if (this.state.count >= 10) {
      color = 'red'
    }
    if (this.state.count !== this.state.initialCount) {
      resetDisplay = ''
    }
      return (
        <div>
          <div style={{color: color}}>{this.state.count}</div>
          <button onClick={this.incrementHandler}>Increment (+)</button>
          <button onClick={this.decrementHandler}>Decrement (-)</button>
          <button style={{ display: resetDisplay}} onClick={this.handleReset}>Reset</button>
        </div>
      );
  }
}

export default Counter