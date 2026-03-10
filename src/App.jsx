import Navbar from "./component/Navbar";
import Counter from "./features/Counter";
import Todolist from "./features/Todolist";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Hello App</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
