import React from "react";
import "./appbar.css";
import GetStartedbutton from "../GetStarted-button/GetStartedbutton";
import { Link } from "react-router-dom";

export default function Appbar() {
  return (
    <div className="nav-container">
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                className="logo"
                src={process.env.PUBLIC_URL + "./bnessZap.png"}
                alt="Business WhatsApp Logo"
              />
              Whatsapp Business
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <a id="white" className="nav-link" aria-current="page" href="/products">
                    Products
                  </a> */}
                  <Link to={"/products"} id="white" className="nav-link" aria-current="page">Products</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/resources">
                    Resources
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="developers">
                    Developers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/partners">
                    Partners
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
                    EN
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Partners
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
                <GetStartedbutton/>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
