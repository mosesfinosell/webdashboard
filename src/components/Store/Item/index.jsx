import React from 'react'
import {Link} from "react-router-dom"
import {Card, Img, Product, Price} from "./styles"

const Index = ({item}) => {
    const {img, product, price, link} = item
  return (
    <Link to={link}>
      <Card>
          <Img src={img} />
          <Product>{product}</Product>
          <Price>₦{price}</Price>
      </Card>
    </Link>
  )
}

export default Index