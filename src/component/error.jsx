import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Page not fou   nd or an unexpected error occurred.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default ErrorPage;
