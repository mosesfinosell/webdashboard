import {useEffect} from "react"
import {useParams} from "react-router-dom"
import styled from "styled-components"
import Item from "../../components/Store/Item"
import image from "../../assets/food.png"
import {useQuery, useInfiniteQuery} from "react-query"
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
  const {isLoading, isError, data, error} = useInfiniteQuery("products", ()=>getProducts.products(businessID))
  const products = new Array(20).fill(dummy);


  console.log("products", data)
  useEffect(()=>{
    const options  = {
      root:null,
      rootMargin: "0px",
      threshold:0.3
    }

    const callBack = (entry, observer) => {
     if(entry[0].isIntersecting){
      console.log(observer)
     }
      
    }

    const target = document.querySelector("#more")

    const observer = new IntersectionObserver(callBack, options)
    if(target){
      observer.observe(target)
      return ()=>observer.unobserve(target)
    }
    
  }, [])

  useEffect(()=>{
    if(error){
      handleError(error)
    }
  }, [error])
  
  if(isError){
    
    return(
      <Error>
        <p>Could not fetch products.</p>
      </Error>
    )
  }
  
  return (
    <Products>
      {!isLoading && !isError ? 
      <>
      {data.pages[0].products.map((product, i) => <Item key={i} item={product}  />)}
      <LoadMore id="more">
        <Spinner size={30} border={7} />
      </LoadMore>
      </>
    :
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    }

    </Products>
  )
}

export default ProductList

const SpinnerContainer = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  min-height: 60vh;
`

const LoadMore = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;  

`

const Error = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;

  p{
    color: #8C8C8C;
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
  }
`