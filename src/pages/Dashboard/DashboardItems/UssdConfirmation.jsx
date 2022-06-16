import React, { useState } from "react";
import {
  Text,
  Image,
  Select,
  FormLabel,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import "./payment.css";
import Logomark from "../../../assets/Logomark.svg";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

function PayWithCard() {
  const history = useNavigate();
  const initialValues = {
    bank: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    bank: Yup.string().required("Please Choose a Bank"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="payment">
      <div className="payment-holder">
        <div className="payment-logo">
          <Image src={Logomark} alt="logo" />
        </div>

        <div className="payment-center">
          <Text className="payment-select">Pay with USSD</Text>
          <Text
            className="payment-change"
            onClick={() => ("/choose-payment")}
          >
            Change payment method
          </Text>
          <div className="payment-divider">
            <div className="payment-divider-left">
              <Text className="payment-name">Name</Text>
              <Text className="payment-amt">Oreofe Ventures</Text>
            </div>
            <div className="payment-divider-right">
              <Text className="payment-name">Amount</Text>
              <Text className="payment-amt">#100,000,000</Text>
            </div>
          </div>
          <div className="payment-bottom">
            <Text className="dial">
              Dial the code below on your mobile phone to complete the payment
            </Text>
            <Text className="ussd">*737*000*9643#</Text>
          </div>
          <Text
            className="change-bank"
            onClick={() => history("/pay-with-ussd")}
          >
            Change Bank
          </Text>
          <div className="ussd-btn">
            <Button
              mt={4}
              mb={10}
              bg="yellow.500"
              width="100%"
              h="68px"
              borderRadius="0px 11px 11px 11px"
              type="submit"
              color="white"
              _hover={{ bg: "#1A202C" }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayWithCard;
