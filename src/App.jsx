import Navbar from "./component/Navbar";
import Counter from "./features/counter/Counter";

import CommentsMaster from "./features/comments/CommentsMaster";
import Todolist from "./features/todolist/Todolist";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="mybox">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
