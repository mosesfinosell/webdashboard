import {useState, useCallback} from "react"
import {useDispatch} from "react-redux"
import {setCartUI} from "../../../ReduxContianer/shoppingCart/shoppingCartActions"
import {useLocation, useNavigate, matchRoutes} from "react-router-dom"
import {FaInstagram, FaPhone, FaWhatsapp, FaSearch} from "react-icons/fa"
import {setSearch} from "../../../ReduxContianer/shoppingCart/shoppingCartActions"
import {Head, Logo, FlexContainer, Top, Socials, Social, Search, SearchInput, Cart} from "./styles"
import logo from "../../../assets/storelinkLogo.png"
import CartLogo from "../../SVG/CartLogo"
import debounce from "lodash/debounce"



const Header = ({data}) => {
  const [input, setInput] = useState("")
  const paths = [{path:"/store/:id/search"}]
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {name, address, imageurl, instagram, registrar, businessid} = data.details
  let match = matchRoutes(paths, location.pathname)

  const handleCart = () => {
    const data = {
      visible:true,
      checkout:false,
    }
    console.log(data)
    setCartUI(dispatch, data)
  }
  const handleDebounce = (e)=>{
    
    setSearch(dispatch, e.target.value)
    if(!match){
      navigate(`/store/${businessid}/search`)
    }
  } 

  let debouncer = useCallback(debounce(handleDebounce, 1200), [])
  

  return (
    <Head>
      <Top>
        <Logo>
          <img src={`${process.env.REACT_APP_IMG_URI}${imageurl}`} alt="logo" />
          
          <div className="info">
            <h3 className="info__name">{name}</h3>
            <p className="info__location">Location: {address}</p>
          </div>
        </Logo>
        <CartLogo onClick={()=>handleCart()} />
      </Top>
      <FlexContainer>
        <Socials>
          <Social href={instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </Social>
          <Social href={`tel:${registrar}`}>
            <FaPhone />
          </Social>
          <Social>
            <FaWhatsapp />
          </Social>
          <Cart onClick={()=>handleCart()}>
            <CartLogo />
            <span>Cart</span>
          </Cart>
        </Socials>
        <Search>
          <FaSearch />
          <SearchInput onChange={(e)=>{debouncer(e)}} placeholder="What are you shopping for?" />
        </Search>
      </FlexContainer>
    </Head>
  )
}

export default Header