import React from 'react'
import {Card, Img, Product, Price} from "./styles"

const Index = ({item}) => {
    const {img, product, price} = item
  return (
    <Card>
        <Img src={img} />
        <Product>{product}</Product>
        <Price>₦{price}</Price>
    </Card>
  )
}

export default Index