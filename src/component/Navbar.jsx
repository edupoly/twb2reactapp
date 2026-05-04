import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { upadateUser } from "../features/user/userSlice";

function Navbar() {
  var { user } = useSelector((state) => state.userR);
  var dispatch = useDispatch();
  var navigate = useNavigate();
  function logout() {
    window.localStorage.clear();
    dispatch(upadateUser({}));
    navigate("/login");
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Hi!!!,<b>{user.username}</b>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {user.token && (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/tasks">
                    Tasklist
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/photos">
                    Photos
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
            {!user.token && (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
