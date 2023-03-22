function ToDoApp(props) {

  for(let i = 0; i < props.todos.length; i++) {
    console.log(props.todos[i])
  }

  return (
    <div>
      <h1>Welcome to {props.name}'s To-Do List</h1>
      <h2>The weather in {props.weather.currentCity} is {props.weather.description} with a temperature of {props.weather.temperature} degrees Celsius.</h2>
    </div>
  )
}

export default ToDoApp