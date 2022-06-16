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
          <div className="payment-bases">
            <form>
              <FormLabel htmlFor="bank">Select Bank</FormLabel>
              <InputGroup>
                <Select
                  id="title"
                  name="title"
                  mb="20px"
                  value={formik.values.bank}
                  onChange={formik.handleChange}
                  placeholder="Select Bank"
                  width="100%"
                  height="63px"
                  borderRadius="0px 11px 11px 11px"
                  bg="#fafafa"
                >
                  <option value="gtb">GTB</option>
                  <option value="sterling">Sterling</option>
                </Select>
              </InputGroup>
              {formik.touched.bank && formik.errors.card_bank ? (
                <span>{formik.errors.bank}</span>
              ) : null}

              <Button
                onClick={() => history("/ussd-confirmation")}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayWithCard;
