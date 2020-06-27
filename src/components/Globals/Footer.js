import React from "react"

const Footer = () => {
  return (
    <footer className="py-3 footer">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 text-yellow text-center text-capitalize">
            <h3>
              all rights reserved &copy;Coffeeshop{" "}
              {new Date().getFullYear().toString()}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
