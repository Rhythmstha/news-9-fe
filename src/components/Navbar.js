const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" style={{fontFamily: 'Poppins', fontWeight: 700}} href="#">
            News<span style={{ fontWeight: 400 }}>9</span> Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bussiness
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tech
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sports
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fashion
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;