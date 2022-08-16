import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
const Navbar = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then((res) => {
      setIsAuth(false);
      localStorage.clear();
      navigate("/login");
    });
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Blog App
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
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <NavLink to="/">
                  <a class="nav-link">Home</a>
                </NavLink>
              </li>
              <li class="nav-item">
                {isAuth && (
                  <NavLink to="/createpost">
                    <a class="nav-link">Create Post</a>
                  </NavLink>
                )}
              </li>
              {!isAuth ? (
                <li class="nav-item Navlink">
                  <NavLink to="/login">
                    <a class="nav-link">Login</a>
                  </NavLink>
                </li>
              ) : (
                <li class="nav-item Navlink">
                  <a class="nav-link" onClick={logout}>
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
