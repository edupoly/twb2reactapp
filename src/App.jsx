import Navbar from "./component/Navbar";
import Counter from "./features/Counter";
import Products from "./features/Products";
function App() {
  return (
    <div className="border rounded border-danger p-3 m-3">
      <Navbar></Navbar>
      <h1>Hello App</h1>
      <Products></Products>
    </div>
  );
}

export default App;
