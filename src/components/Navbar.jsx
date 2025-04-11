// Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const { currentUser } = useAuth();

  const logoutHandler = async () => {
    await signOut(auth);
  };

  const navlinkData = [
    { path: "/", text: "Home" },
    { path: "/booksnap-about", text: "About Us" },
    { path: "/booksnap-community", text: "Community" },
    { path: "/booksnap-snapstore", text: "Snapstore" },
    { path: "/booksnap-notes", text: "Notes" },
  ];

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">BOOKSNAP</h1>
      </Link>
      <ul className="navlinks">
        {navlinkData.map((ind, ex) => (
          <li key={ex}>
            <Link to={ind.path}>{ind.text}</Link>
          </li>
        ))}
      </ul>

      {currentUser ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <Link className="anav" to="/booksnap-authentication">
          Get Started
        </Link>
      )}
    </nav>
  );
};
