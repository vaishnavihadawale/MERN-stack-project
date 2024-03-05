import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info bg-gradient">
        <div className="container-fluid">
          <a
            className="navbar-brand fst-italic fw-bold"
            onClick={() => navigate("/")}
          >
            GoFood
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" onClick={() => navigate("/login")}>
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
