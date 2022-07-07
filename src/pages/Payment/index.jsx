import React from "react";
import { Text, Image } from "@chakra-ui/react";
import "../Dashboard/DashboardItems/payment.css";
import card from "../../assets/card.svg";
import transfer from "../../assets/transfer.svg";
import ussd from "../../assets/ussd.svg";
import bank from "../../assets/bank.svg";
import Logomark from "../../assets/Logomark.svg";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import {InfoContainer, Info, Title} from "./styles"

import PayStack from "./Paystack"


function PaymentPage() {

  const history = useNavigate();
  const shoppingCart = useSelector((state)=>state.shoppingCart)
  const checkout = shoppingCart.checkout
  const total = shoppingCart.cart.filter((item)=>item.businessID === checkout.id)
                .reduce((acc, i)=>{
                    return acc + (i.price * i.amount)
                }, 0)

  
  return (
    <div className="payment">
      <div className="payment-holder">
        <div className="payment-logo">
          <Image src={Logomark} alt="logo" />
        </div>

        <div className="payment-center">
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
          <div className="payment-base">
            <PayStack>
            <div
              className="paid-div"
            >
              <Image src={card} alt="card" />
              <Text className="paid">Pay with Card</Text>
            </div>
            </PayStack>
            <div
              className="paid-div"
              onClick={() => history("/pay-with-transfer")}
            >
              <Image src={transfer} alt="transfer" />
              <Text className="paid">Pay with Bank Transfer</Text>
            </div>
            {/* <div
              className="paid-div"
              onClick={() => history("/pay-with-ussd")}
            >
              <Image src={ussd} alt="ussd" />
              <Text className="paid">Pay with USSD</Text>
            </div>
            <div className="paid-div" style={{marginBottom:"4rem"}}>
              <Image src={bank} alt="bank" />
              <Text className="paid">Pay with Bank</Text>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
