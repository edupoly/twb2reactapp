import Navbar from "./component/Navbar";
import Counter from "./features/counter/Counter";

import CommentsMaster from "./features/comments/CommentsMaster";
import Todolist from "./features/todolist/Todolist";
function App() {
  return (
    <div className="mybox">
      <Navbar></Navbar>
      <h1>Hello App</h1>
      <Todolist></Todolist>
      {/* <Counter></Counter>
      <CommentsMaster></CommentsMaster> */}
    </div>
  );
}

export default App;
