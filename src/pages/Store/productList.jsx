import React from 'react'
import styled from "styled-components"
import Item from "../../components/Store/Item"
import image from "../../assets/food.png"

const data = {
  img:image,
  product:"Ofada Rice and Sauce",
  price:"2,700.00"
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly
  /* display: grid;
  grid-template: auto /1fr 1fr;
  gap: 0.8rem;
  justify-content: center;

  @media only screen and (min-width: 768px){
    grid-template: auto /1fr 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 768px){
    grid-template: auto / 1fr 1fr 1fr 1fr 1fr 1fr;
  } */
`