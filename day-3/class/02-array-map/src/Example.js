import React from 'react'

class Example extends React.Component {
  state = {
    list: ['learn react', 'render components', 'have a good time', 'completing the survey']
  }

  render() {
    // const numArr = [4, 8, 15, 16, 23, 42]

    // const mappedArr = numArr.map((num) => {
    //   return num + 1 
    // })
  
    // console.log(mappedArr)

    return (
      <div>
        <ul>
          {this.state.list.map((task, index) => {
            return (<li name={"task-" + index} key={index}>{task}</li>)
          })}
        </ul>
      </div>
    )
  }
}

export default Example