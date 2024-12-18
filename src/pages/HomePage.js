import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Automated Academic Research Journal Finder</h1>
      <div>
        <Link to="/login">
          <button style={{ margin: "10px" }}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={{ margin: "10px" }}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;


