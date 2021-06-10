import React from 'react'

const Navigation = () => {
  return (
    <>
      <section className="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-1 fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand text-white fs-1"><b>muvy</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#movies" className="nav-link">Movies</a>
                </li>
                <li className="nav-item">
                  <a href="#series" className="nav-link">Series</a>
                </li>
                <li className="nav-item">
                  <a href="#people" className="nav-link">People</a>
                </li>
                <li className="nav-item">
                  <a href="#account" className="nav-link">Account</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navigation
