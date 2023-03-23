import { Component } from 'react'

class Example extends Component {

  state = {
    name: 'Jasveer',
    error: {
      code: 9000,
      message: 'Uh oh'
    }
  }

  render() {
    
    // if (this.state.name.length > 4) {
    //   adjective = 'cool'
    // } else {
    //   adjective = 'awesome'
    // }

    return (
      <div>
        <h2>{this.state.name} is very {
        (this.state.name.length > 4) ? <span>cool!</span> : <span>awesome!</span>
        }</h2>
        {this.state.error.code && <h3>Error {this.state.error.code}: Theres a problem!</h3>}
      </div>
    )
  }
}

export default Example