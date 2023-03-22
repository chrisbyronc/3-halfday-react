import React from 'react'

class Example extends React.Component {

  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state.firstName, this.state.lastName)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            name="firstName"
            placeholder='first name'
            value={this.state.firstName} 
            onChange={this.handleChange}
          />
          <input 
            name="lastName"
            placeholder='last name'
            value={this.state.lastName} 
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Example