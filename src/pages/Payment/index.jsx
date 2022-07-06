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
function PaymentPage() {
  const history = useNavigate();
  const shoppingCart = useSelector((state)=>state.shoppingCart)
  const checkout = shoppingCart.checkout
  const total = shoppingCart.cart.filter((item)=>item.businessID === checkout.id)
                .reduce((acc, i)=>{
                    return acc + (i.item.price * i.item.amount)
                }, 0)
  console.log("Checkout", checkout, total)
  return (
    <div className="payment">
      <div className="payment-holder">
        <div className="payment-logo">
          <Image src={Logomark} alt="logo" />
        </div>

        <div className="payment-center">
          <Text className="payment-select">Select a Payment Method</Text>
          <div className="payment-divider">
            <div className="payment-divider-left">
              <Text className="payment-name">Name</Text>
              <Text className="payment-amt">{checkout.storeName}</Text>
            </div>
            <div className="payment-divider-right">
              <Text className="payment-name">Amount</Text>
              <Text className="payment-amt">#{total.toLocaleString()}</Text>
            </div>
          </div>
          <div className="payment-base">
            <div
              className="paid-div"
              onClick={() => history("/pay-with-card")}
            >
              <Image src={card} alt="card" />
              <Text className="paid">Pay with Card</Text>
            </div>
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
