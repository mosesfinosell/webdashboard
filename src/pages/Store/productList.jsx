import {useParams} from "react-router-dom"
import styled from "styled-components"
import Item from "../../components/Store/Item"
import image from "../../assets/food.png"
import {useQuery} from "react-query"
import {Store, handleError, getProducts} from "../../utils/API"
import Spinner from "../../components/Spinner"

const dummy = {
  imageurl:image,
  title:"Ofada Rice and Sauce",
  price:"2,700.00",
  productID:"item"
}
const ProductList = () => {
  const {businessID} = useParams()
  const getProducts = new Store()
  const {isLoading, isError, data, error} = useQuery("products", ()=>getProducts.products(businessID))
  const products = new Array(20).fill(dummy);

  // useEffect(()=>{
  //   if(isError){
  //     //handleError(error)
  //   }
  // }, [isError])
  if(isError){
    handleError(error)
  }
  
  return (
    <Products>
      {!isLoading && !isError ?
      data.products.map((product, i)=><Item key={i} item={product}  />)
    :
        <Spinner />
    }
    </Products>
  )
}

export default ProductList

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
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