import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              totam veniam voluptatibus nisi maiores adipisci corporis
              reprehenderit laboriosam at accusantium obcaecati asperiores
              dolorem sint voluptates excepturi repellendus earum tempora
              recusandae, error ea, commodi quisquam officiis doloribus.
              Deleniti dolorum rerum nam sed. Optio blanditiis praesentium esse
              sit excepturi ut, suscipit et?
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
