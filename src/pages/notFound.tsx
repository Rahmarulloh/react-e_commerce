import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="content">
        <h1>404</h1>
        <h3>Sorry, it seems this page does not exist.</h3>
        <NavLink to="/">Back Home</NavLink>
      </div>
    </div>
  );
}
