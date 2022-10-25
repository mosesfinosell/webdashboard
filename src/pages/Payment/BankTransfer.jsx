import { useState } from "react";
import toast from "react-hot-toast";
import {
  Title,
  Method,
  Option,
  OptionsContainer,
  Left,
  Right,
  Error,
} from "./styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Spinner from "../../components/Spinner";
import { SpinnerContainer } from "../../components/Spinner/style";
import {
  getBusinessSubAccount,
  paymentConfirmation,
} from "../../network/payment";
import { CustomButton } from "../../components/Button/button.styles";

const BankTransfer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { orderID, businessID } = useParams();
  const checkout = useSelector((state) => state.shoppingCart.checkout);

  const { data, error, isLoading } = useQuery(
    ["business-subaccount", businessID],
    () => getBusinessSubAccount(businessID)
  );

  const handleConfirmation = async () => {
    try {
      setLoading(true);
      const res = await paymentConfirmation(
        orderID,
        businessID,
        checkout.amount
      );
      toast.success("Payment confirmation successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Couldn't complete payment confirmation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Top>
        <Title>Pay with Bank Transfer</Title>
        <div onClick={() => navigate(-1)}>
          <Method>Change payment method</Method>
        </div>
      </Top>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : data ? (
        <>
          <OptionsContainer>
            <Option>
              <Left>Amount</Left>
              <Right>₦{parseInt(checkout.amount).toLocaleString()}</Right>
            </Option>
            <Option>
              <Left>Account Number</Left>
              <Right>{data.virtualAccount.accountNumber}</Right>
            </Option>
            <Option>
              <Left>Bank Name</Left>
              <Right>{data.virtualAccount.bankName}</Right>
            </Option>
            <Option>
              <Left>Beneficiary Name</Left>
              <Right>{data.virtualAccount.accountName}</Right>
            </Option>
          </OptionsContainer>
          <CustomButton
            onClick={() => handleConfirmation()}
            disabled={loading}
            width="30rem"
          >
            <span>Confirm payment</span>
          </CustomButton>
        </>
      ) : (
        <Error>
          <p>Couldn't find business account details.</p>
        </Error>
      )}
    </>
  );
};

export default BankTransfer;

const Top = styled.div`
  text-align: center;
  margin-bottom: 6.3rem;

  ${Title} {
    margin-bottom: 1.7rem;
  }
`;
