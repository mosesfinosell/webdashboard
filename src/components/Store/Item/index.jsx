import React from 'react'
import {Link} from "react-router-dom"
import {Card, Img, Product, Price} from "./styles"

const Index = ({item}) => {
    const {imageurl, title, price, productID} = item
  return (
    <Link to={`product/${productID}`}>
      <Card>
          <Img src={`${process.env.REACT_APP_IMG_URI}${imageurl}`} />
          <Product>{title}</Product>
          <Price>₦{price}</Price>
      </Card>
    </Link>
  )
}

export default Index