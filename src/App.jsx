import Navbar from "./component/Navbar";
import Todolist from "./features/Todolist";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Hello App</h1>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
