import {useState} from "react"
import {useParams} from "react-router-dom"
import {useQuery} from "react-query"
import {Outlet} from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import ShoppingCart from "../ShoppingCart"
import Spinner from "../../Spinner"
import {Container, SpinnerContainer} from "./styles"
import {Store, handleError} from "../../../utils/API"

const StoreLinkContainer = () => {
  const {businessID} = useParams()
  console.log(businessID)
  const [cart, setCart] = useState(false)
  const seller = new Store()
  const {data, error, isLoading, isError} = useQuery(["store", businessID], ()=>seller.getStoreInfo(businessID))

  if(error){
    handleError(error)
  }

  return (
    <>
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