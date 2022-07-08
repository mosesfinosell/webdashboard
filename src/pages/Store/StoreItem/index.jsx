import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import {useQuery} from "react-query"
import {useSelector, useDispatch} from "react-redux"
import {Store, handleError} from "../../../utils/API"
import { addToCart, setCartUI } from "../../../ReduxContianer/shoppingCart/shoppingCartActions"
import {Path, Image, Container, Content, Button} from "./styles"
import Quantity from "../../../components/Quantity"
import Spinner from "../../../components/Spinner"
import {SpinnerContainer} from "../../../components/Spinner/style"

import image from "../../../assets/food.png"
import toast from "react-hot-toast"


const StoreItem = () => {
  const product = new Store()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartInfo = useSelector((store)=>store.shoppingCart)
  const cart = cartInfo.cart
  const cartUI = cartInfo.cartUI
  const {businessID, productID} = useParams()
  const {isLoading, isError, data, error} = useQuery("product", ()=>product.getProduct(productID))
  const [add, setAdd] = useState(false)
  const counter = useState(0)

  useEffect(()=>{
    console.log("Single product", data)
  }, [error, data])

  const handleAddToCart = () =>{
    const storeCart = cart.filter((store)=> store.businessID === businessID)
    
    if(counter[0] > 0){
      
      if(storeCart && storeCart.find((item)=>item.productID === productID)){
        console.log(storeCart)
        toast.error("Item already added to cart.")
      }else{
        const item = {
          businessID,
          title: data.title,
          amount: counter[0],
          price: parseFloat(data.price),
          productID,
        } 
        addToCart(dispatch, item)
        setAdd(true)
      }
      
    }else{
      toast.error("Add item")
    }
    
  }
  const handleCheckout = () =>{
    const data = {
      visible: true,
      checkout: true,
    }
    setCartUI(dispatch, data)
  }
  return (
    <>
    {isLoading || isError ?
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    :
    <>
      <Path>Home / {data.title}</Path>
      <Container>
        <Image src={`${process.env.REACT_APP_IMG_URI}${data.imageurl}`} alt={data.title} />
        <Content>
          <h1 className="name">{data.title}</h1>
          <h3 className="price">₦{parseInt(data.price).toFixed(2)}</h3>
          <h3 className="quantity">Quantity</h3>
          <Quantity counter={counter} />
          <p className="desc">
          {data.description}
          </p>
          {!add ? 
            <Button onClick={()=>handleAddToCart()}>Add to Cart</Button>
            :
            <>
              <Button onClick={()=>navigate(-1)}>Continue Shopping</Button>
              <Button className="color" onClick={()=>handleCheckout()}>Go to Check Out</Button>
            </>
          }
        </Content>

      </Container>
    </>
    }
    </>
  )
}

export default StoreItem