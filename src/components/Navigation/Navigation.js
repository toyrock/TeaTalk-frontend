import { Link } from "react-router-dom";

// component for navigation
export function Navigation() {
  return (
    <nav>
      {/* Link is how we navigate with react router */}
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
