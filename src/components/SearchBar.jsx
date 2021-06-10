import React from 'react'

const SearchBar = () => {
  return (
    <>
      <section className="p-lg-5 p-md-2 p-sm-1">
        <div className="container">
            <div className="input-group news-input">
              <input type="text" className="form-control form-control-sm" placeholder="Find movies, series and more" />
              <button className="btn btn-primary btn-sm" type="button">Search</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default SearchBar
