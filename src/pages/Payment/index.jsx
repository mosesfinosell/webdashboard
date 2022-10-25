import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { Text, Image } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import { useQuery } from "react-query";
import Spinner from "../../components/Spinner";
import { SpinnerContainer } from "../../components/Spinner/style";
import "../Dashboard/DashboardItems/payment.css";
import card from "../../assets/card.svg";
import transfer from "../../assets/transfer.svg";
// import ussd from "../../assets/ussd.svg";
// import bank from "../../assets/bank.svg";
// import Logomark from "../../assets/Logomark.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { InfoContainer, Info, Title, OptionsContainer, Option } from "./styles";
import { getPaymentLinkInfo } from "../../network/payment";
import { setStore } from "../../ReduxContianer/shoppingCart/shoppingCartActions";

import PayStack from "./Paystack";

function PaymentPage() {
  const dispatch = useDispatch();
  const [business, setBusiness] = useState();
  const testID = "gLxsftfIf8";
  const { orderID } = useParams();
  const history = useNavigate();

  const live_pk = "pk_live_ca0cb1b68f5e47e57a259d7116a1985a68b8ddc5";
  const test_pk = "pk_test_d41c2bf87390ed60af6e8851ea104be0f7489e3c";

  const { isLoading, isData, isError, error, data } = useQuery(
    ["payment", orderID],
    () => getPaymentLinkInfo(orderID)
  );
  // const shoppingCart = useSelector((state)=>state.shoppingCart)
  // const checkout = shoppingCart.checkout
  // const total = shoppingCart.cart.filter((item)=>item.businessID === checkout.id)
  //               .reduce((acc, i)=>{
  //                   return acc + (i.price * i.amount)
  //               }, 0)
  //               console.log(total)

  useEffect(() => {
    if (data) {
      setBusiness({
        reference: new Date().getTime().toString(),
        email: data.businessmail.trim(),
        metadata: { businessid: data.businessid },
        amount: parseInt(data.amount) * 100,
        publicKey: live_pk,
      });
      setStore(dispatch, data);
    }
  }, [data]);

  return (
    <>
      {!isLoading && business ? (
        <>
          <Title>Select a Payment Method</Title>
          <InfoContainer>
            <Info>
              <span className="info-title">Name</span>
              <span className="info-content">{data.subdomain || ""}</span>
            </Info>
            <Info>
              <span className="info-title">Amount</span>
              <span className="info-content">₦{data.amount}</span>
            </Info>
          </InfoContainer>
          <OptionsContainer>
            <PayStack config={business}>
              <Option className="click">
                <div className="left">
                  <Image src={card} alt="card" />
                  <Text className="paid">Pay now</Text>
                </div>
                <FaAngleRight />
              </Option>
            </PayStack>
            {/* <Link
              aria-disabled
              to={`/paylink/${orderID}/bank-transfer/${data.businessid}`}
            >
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
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </>
  );
}

export default PaymentPage;
