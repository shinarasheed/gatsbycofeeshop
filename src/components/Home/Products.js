import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { useStaticQuery, graphql } from "gatsby"

export const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
const Products = () => {
  const data = useStaticQuery(getProducts)
  const products = data.products.edges
  console.log(products)
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {products.map(({ node }) => (
            <Product key={node.id} product={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
