import { useFormik } from "formik";
import { useLoginMutation } from "../../services/userApi";
import { useDispatch } from "react-redux";
import { upadateUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  var [loginFn] = useLoginMutation();
  var dispatch = useDispatch();
  var navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      loginFn(values).then((res) => {
        dispatch(upadateUser(res.data));
        navigate("/");
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("username", res.data.username);
      });
    },
  });
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={loginForm.handleSubmit}>
        <input type="text" {...loginForm.getFieldProps("username")} />
        <br />
        <input type="password" {...loginForm.getFieldProps("password")} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
