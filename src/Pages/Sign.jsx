import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/Logo.png";
import "../Components/Foot.js";
import "../styles/Sign.css";
alert("Welcome to JADOO");

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform authentication logic here (if needed)
    navigate("/NavBar"); // Redirect to the Home page after signing in .getElementById("contactForm")
  };
  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <img className="ima" src={Logo} alt="Logo" />
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <input
          id="contactform"
          type="Firstname"
          placeholder=" Firstname"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />{" "}
        <input
          type="Lastname"
          placeholder="Lastname"
          value={Lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <button id="btn" onClick={() => navigate("/newpage")}>
          Sign in
        </button>
      </form>{" "}
    </div>
  );
}

export default Sign;
