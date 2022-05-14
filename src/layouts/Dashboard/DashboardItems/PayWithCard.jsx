import React, { useState } from "react";
import {
  Text,
  Image,
  Input,
  InputLeftElement,
  FormLabel,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import "./payment.css";
import Logomark from "../../../assets/Logomark.svg";
import { useHistory } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
function PayWithCard() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const history = useHistory();
  const initialValues = {
    card_number: "",
    valid: "",
    cvv: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    card_number: Yup.string().required("Please enter card number"),
    valid: Yup.string().required("Please enter card validity"),
    cvv: Yup.string().required("Please enter card CVV"),
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
          <Text className="payment-select">Pay with Card</Text>
          <Text
            className="payment-change"
            onClick={() => history.push("/choose-payment")}
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
              <FormLabel htmlFor="card_number">Card Number</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  m="15px 1px"
                  fontSize="20px"
                  color="yellow.500"
                  children={<MdEmail />}
                />
                <Input
                  id="title"
                  name="title"
                  mb="20px"
                  value={formik.values.card_number}
                  onChange={formik.handleChange}
                  placeholder="0000 0000 000"
                  width="100%"
                  height="63px"
                  borderRadius="0px 11px 11px 11px"
                  bg="#fafafa"
                />
              </InputGroup>
              {formik.touched.card_number && formik.errors.card_number ? (
                <span>{formik.errors.card_number}</span>
              ) : null}
              <div className="form-split">
                <div className="form-split-base">
                  <FormLabel htmlFor="valid">Valid Till</FormLabel>
                  <InputGroup>
                    <Input
                      id="valid"
                      name="valid"
                      mb="20px"
                      value={formik.values.valid}
                      onChange={formik.handleChange}
                      placeholder="MM/YY"
                      width="100%"
                      height="60px"
                      borderRadius="0px 11px 11px 11px"
                      bg="#fafafa"
                    />
                  </InputGroup>
                  {formik.touched.valid && formik.errors.valid ? (
                    <span>{formik.errors.valid}</span>
                  ) : null}
                </div>
                <div className="form-split-base">
                  <FormLabel htmlFor="cvv">CVV</FormLabel>
                  <InputGroup>
                    <Input
                      id="cvv"
                      name="cvv"
                      mb="20px"
                      value={formik.values.cvv}
                      onChange={formik.handleChange}
                      placeholder="123"
                      width="100%"
                      height="60px"
                      borderRadius="0px 11px 11px 11px"
                      bg="#fafafa"
                    />
                  </InputGroup>
                  {formik.touched.cvv && formik.errors.cvv ? (
                    <span>{formik.errors.cvv}</span>
                  ) : null}
                </div>
              </div>
              <div className="card-save">
                <div>
                  <Text className="card-toggle">Save this card</Text>
                </div>

                <div onClick={handleClick} className="toggle-div">
                  {show ? <BsToggleOn /> : <BsToggleOff />}
                </div>
              </div>
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
                Pay
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayWithCard;
