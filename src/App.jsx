import Navbar from "./component/Navbar";
import StudentForm from "./component/StudentForm";
import Counter from "./features/Counter";
function App() {
  return (
    <div className="mybox">
      <Navbar></Navbar>
      <h1>Hello App</h1>
      <StudentForm></StudentForm>
    </div>
  );
}

export default App;
