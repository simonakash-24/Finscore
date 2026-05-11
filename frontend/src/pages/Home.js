import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional custom styling

function Home() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-white border-end p-3" style={{ width: '80px' }}>
        <nav className="nav flex-column text-center">
          <Link className="nav-link mb-4" to="/home" title="Home">
            <i className="bi bi-house-fill fs-4 text-primary"></i>
          </Link>
          <Link className="nav-link mb-4" to="/cibil" title="CIBIL">
            <i className="bi bi-graph-up fs-4 text-purple"></i>
          </Link>
          <Link className="nav-link mb-4" to="/dues" title="Dues">
            <i className="bi bi-bell-fill fs-4 text-warning"></i>
          </Link>
          <Link className="nav-link mb-4" to="/dashboard" title="Dashboard">
            <i className="bi bi-speedometer2 fs-4 text-success"></i>
          </Link>
          <Link className="nav-link mb-4" to="/wallet" title="Wallet">
            <i className="bi bi-wallet2 fs-4 text-info"></i>
          </Link>
          <Link className="nav-link" to="/brain" title="Brain">
            <i className="bi bi-brain fs-4 text-dark"></i>
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-4 bg-light">
        <h2 className="mb-4 text-primary">FinScore Home</h2>

        <section className="mb-5">
          <h4>News</h4>
          <div className="mb-3">
            <strong>Fed Expected to Leave Rates Unchanged</strong>
            <p className="text-muted">Analysts predict no rate hikes in the near term.</p>
          </div>
          <div>
            <strong>Unemployment Rate Falls to 4.5%</strong>
            <p className="text-muted">New report shows a decrease in jobless claims.</p>
          </div>
        </section>

        <section>
          <h4>Market Alerts</h4>
          <ul className="list-unstyled">
            <li className="text-success">
              <i className="bi bi-caret-up-fill me-2"></i> S&P 500 Hits Record High
            </li>
            <li className="text-danger">
              <i className="bi bi-caret-down-fill me-2"></i> Crude Oil Prices Decline 2%
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home