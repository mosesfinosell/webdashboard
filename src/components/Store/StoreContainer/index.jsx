import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {useQuery} from "react-query"
import {Outlet} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setStore} from "../../../ReduxContianer/shoppingCart/shoppingCartActions"
import Header from "../Header"
import Footer from "../Footer"
import ShoppingCart from "../ShoppingCart"
import Spinner from "../../Spinner"
import {Container, SpinnerContainer, Error} from "./styles"
import {Store, handleError} from "../../../utils/API"

const StoreLinkContainer = () => {
  const {businessID} = useParams()
  const dispatch = useDispatch()
  
  const [cart, setCart] = useState(false)
  const seller = new Store(businessID)
  const {data, error, isLoading, isData, isError} = useQuery(["store", businessID], ()=>seller.getStoreInfo())

  useEffect(()=>{
    if(error){
      handleError(error)
    }
  }, [error])
//reset checkout
  useEffect(()=>{
    setStore(dispatch, {
      storeName:"",
      id:"",
      businessEmail:"",
      name:"",
      email:"",
      tel:"",
      address:"",
      note:""
  })
  }, [])

  if(error){
    return (
      <Error>
        <p>Couldn't get store. Try again later.</p>
      </Error>
    )
  }

  return (
    <>
    {/* <Header setCart={setCart} />
      <Container>
        <Outlet />
        <ShoppingCart visible={cart} setVisible={setCart} />
      </Container>
    <Footer /> */}
    {!isLoading && !isError ?
    <>
      <Header setCart={setCart} data={data} />
      <Container>
        <Outlet />
        <ShoppingCart visible={cart} setVisible={setCart} />
      </Container>
      <Footer />
    </>
    :
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
    }
    </>
  )
}

export default StoreLinkContainer