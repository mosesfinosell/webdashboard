import React from 'react'
import styled from "styled-components"
import Item from "../../components/Store/Item"
import image from "../../assets/food.png"

const data = {
  img:image,
  product:"",
  price:""
}
const productList = () => {
  const products = new Array(20).fill(data);
  return (
    <Products>
      {products.map((product)=><Item item={product}  />)}
    </Products>
  )
}

export default productList

const Products = styled.div`
  
  display: grid;
  grid-template: auto / 1fr 1fr;
`