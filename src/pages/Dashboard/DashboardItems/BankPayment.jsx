import React, { useState } from "react";
import { Text, Image, Button } from "@chakra-ui/react";
import "./payment.css";
import Logomark from "../../../assets/Logomark.svg";
import mono from "../../../assets/mono.svg";
import { useNavigate } from "react-router-dom";
import { MonoButton, useMono } from 'react-mono-js';
import { useFormik } from "formik";
import * as Yup from "yup";

function PayWithCard() {
    const config = {
        public_key: 'test_pk_UTSE2b9lxLYx7usd2mHn ',
        onClose: () => {},
        onSuccess: (response) => {
          console.log(response.code);
    
          /**
            response : { "code": "code_xyz" }
            you can send this code back to your server to get this
            authenticated account and start making requests.
          */
        },
      };
    
      const handleMono = useMono({ public_key: 'test_pk_UTSE2b9lxLYx7usd2mHn ' });
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
          <Text className="payment-select">Pay with Bank</Text>
          <Text
            className="payment-change"
            onClick={() => history("/choose-payment")}
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
              You will be redirected to Mono to complete this payment
            </Text>
            <div className="mono">
              <Image src={mono} alt="mono-logo" />
            </div>
          </div>

          <div className="ussd-btn">
            <Button
              mt={6}
              mb={10}
              bg="yellow.500"
              width="100%"
              h="68px"
              borderRadius="0px 11px 11px 11px"
              type="submit"
              color="white"
              _hover={{ bg: "#1A202C" }}
            >
              Proceed
            </Button>
            <MonoButton {...config} text="Connect bank with Mono!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayWithCard;
