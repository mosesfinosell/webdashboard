import {useState, useEffect} from "react"
import { Text, Image } from "@chakra-ui/react";
import {FaAngleRight} from "react-icons/fa"
import {useQuery} from "react-query"
import Spinner from "../../components/Spinner"
import {SpinnerContainer} from "../../components/Spinner/style"
import "../Dashboard/DashboardItems/payment.css";
import card from "../../assets/card.svg";
// import transfer from "../../assets/transfer.svg";
// import ussd from "../../assets/ussd.svg";
// import bank from "../../assets/bank.svg";
// import Logomark from "../../assets/Logomark.svg";
import { useNavigate, Link, useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {InfoContainer, Info, Title, OptionsContainer, Option} from "./styles"
import {Payment} from "../../utils/API"
import {setStore} from "../../ReduxContianer/shoppingCart/shoppingCartActions" 

import PayStack from "./Paystack"


function PaymentPage() {
  const dispatch = useDispatch()
  const [business, setBusiness] = useState();
  const testID = "gLxsftfIf8"
  const {id} = useParams()
  const history = useNavigate();
  const pay = new Payment()

  const {isLoading, isData, isError, error, data} = useQuery(["payment", id], ()=>pay.getPaymentLinkInfo(id))
  // const shoppingCart = useSelector((state)=>state.shoppingCart)
  // const checkout = shoppingCart.checkout
  // const total = shoppingCart.cart.filter((item)=>item.businessID === checkout.id)
  //               .reduce((acc, i)=>{
  //                   return acc + (i.price * i.amount)
  //               }, 0)
  //               console.log(total)

  useEffect(()=>{
    if(data){
      setBusiness({
        reference: (new Date()).getTime().toString(),
        email: data.businessmail,
        amount: parseInt(data.amount) * 100,
        publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      })
      setStore(dispatch, data)
    }
    // console.log("Business", data)
  }, [data])


  
  return (
        <>
        {!isLoading && business ?
          <>
          <Title>Select a Payment Method</Title>
          <InfoContainer>
            <Info>
              <span className="info-title">Name</span>
              <span className="info-content">{data.subdomain}</span>
            </Info>
            <Info>
              <span className="info-title">Amount</span>
              <span className="info-content">₦{data.amount}</span>
            </Info>
          </InfoContainer>
          <OptionsContainer>
            <PayStack config={business}>
            <Option
            >
              <div className="left">
                <Image src={card} alt="card" />
                <Text className="paid">Pay now</Text>
              </div>
              <FaAngleRight />
            </Option>
            </PayStack>
            {/* <Link aria-disabled to={`bank-transfer/${data.businessid}`}>
              <Option>
                <div className="left">
                  <Image src={transfer} alt="transfer" />
                  <Text className="paid">Pay with Bank Transfer</Text>
                </div>
              <FaAngleRight />
            </Option>
          </Link> */}
          </OptionsContainer>
          </>
          :
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
          }
        </>
  );
}

export default PaymentPage;
