import {useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import {useQuery} from "react-query"
import {useSelector, useDispatch} from "react-redux"
import {Store, handleError} from "../../../utils/API"
import { addToCart } from "../../../ReduxContianer/shoppingCart/shoppingCartActions"
import {Path, Image, Container, Content, Button} from "./styles"
import Quantity from "../../../components/Quantity"

import image from "../../../assets/food.png"
import toast from "react-hot-toast"

const StoreItem = () => {
  const product = new Store()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector((store)=>store.shoppingCart)
  const {businessID, productID} = useParams()
  const {isLoading, isError, data, error} = useQuery("product", ()=>product.getProduct)
  const [add, setAdd] = useState(false)
  const counter = useState(0)


  const handleAddToCart = () =>{
    const storeCart = cart.filter((store)=> store.businessID === businessID)

    if(counter[0] > 0){
      
      if(storeCart && storeCart.find((item)=>item.productID)){
        toast.error("Item already added to cart.")
      }else{
        const item = {
          businessID,
          item:{
            title: "Ofada rice and sauce",
            amount: counter[0],
            price: 2500,
            productID,
          }
        } 
        addToCart(dispatch, item)
        setAdd(true)
      }
      
    }else{
      toast.error("Add item")
    }
    
  }
  return (
    <>
      <Path>Home / Ofada Rice and Sauce</Path>
      <Container>
        <Image src={image} alt="Ofada rice and sauce" />
        <Content>
          <h1 className="name">Ofada rice and sauce</h1>
          <h3 className="price">₦2,700.00</h3>
          <h3 className="quantity">Quantity</h3>
          <Quantity counter={counter} />
          <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in molestie enim. Sed eu urna tortor. Suspendisse vel arcu vel massa tempor interdum. Nulla id dolor volutpat, viverra purus non, egestas ante.
          </p>
          {!add ? 
            <Button onClick={()=>handleAddToCart()}>Add to Cart</Button>
            :
            <>
              <Button onClick={()=>navigate(-1)}>Continue Shopping</Button>
              <Button className="color" onClick={()=>navigate("/choose-payment")}>Go to Check Out</Button>
            </>
          }
        </Content>

      </Container>
    </>
  )
}

export default StoreItem