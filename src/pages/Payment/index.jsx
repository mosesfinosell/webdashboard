import { Text, Image } from "@chakra-ui/react";
import {FaAngleRight} from "react-icons/fa"
import "../Dashboard/DashboardItems/payment.css";
import card from "../../assets/card.svg";
import transfer from "../../assets/transfer.svg";
import ussd from "../../assets/ussd.svg";
import bank from "../../assets/bank.svg";
import Logomark from "../../assets/Logomark.svg";
import { useNavigate, Link, useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import {InfoContainer, Info, Title, OptionsContainer, Option} from "./styles"

import PayStack from "./Paystack"


function PaymentPage() {

  const {id} = useParams()
  const history = useNavigate();
  const shoppingCart = useSelector((state)=>state.shoppingCart)
  const checkout = shoppingCart.checkout
  const total = shoppingCart.cart.filter((item)=>item.businessID === checkout.id)
                .reduce((acc, i)=>{
                    return acc + (i.price * i.amount)
                }, 0)
                console.log(total)

  const config ={
    reference: (new Date()).getTime().toString(),
    email: checkout.businessEmail,
    amount: total * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  }
  return (
        <>
          <Title>Select a Payment Method</Title>
          <InfoContainer>
            <Info>
              <span className="info-title">Name</span>
              <span className="info-content">{checkout.storeName.trim()}</span>
            </Info>
            <Info>
              <span className="info-title">Amount</span>
              <span className="info-content">₦{total.toLocaleString()}</span>
            </Info>
          </InfoContainer>
          <OptionsContainer>
            <PayStack config={config}>
            <Option
            >
              <div className="left">
                <Image src={card} alt="card" />
                <Text className="paid">Pay with Card</Text>
              </div>
              <FaAngleRight />
            </Option>
            </PayStack>
            <Link to="bank-transfer">
              <Option>
                <div className="left">
                  <Image src={transfer} alt="transfer" />
                  <Text className="paid">Pay with Bank Transfer</Text>
                </div>
                <FaAngleRight />
              </Option>
            </Link>
          </OptionsContainer>
        </>
  );
}

export default PaymentPage;
