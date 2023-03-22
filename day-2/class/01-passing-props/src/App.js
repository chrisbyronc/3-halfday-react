import ToDoApp from './ToDoApp'
import './App.css';

function App() {

  const weather = {
    currentCity: "Delhi",
    description: "Cloudy",
    temperature: 21
  }

  const todos = [
    "learn React",
    "eat",
    "sleep",
    "practice React",
    "watch React Pluralsight videos",
    "practice JavaScript",
  ]

  return (
    <div className="App">
      <ToDoApp 
        name="Inika" 
        weather={weather}
        todos={todos}
      />
    </div>
  );
}

export default App;
