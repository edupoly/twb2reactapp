import { useEffect } from "react";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { upadateUser } from "./features/user/userSlice";
function App() {
  var dispatch = useDispatch();
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      dispatch(
        upadateUser({
          token: window.localStorage.getItem("token"),
        }),
      );
    }
  }, []);
  return (
    <div className="mybox">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
