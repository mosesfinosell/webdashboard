import React from "react";
import { Text, Image, Button } from "@chakra-ui/react";
import "./payment.css";
import Logomark from "../../../assets/Logomark.svg";
import { useHistory } from "react-router-dom";
function PaymentPage() {
  const history = useHistory();
  return (
    <div className="payment">
      <div className="payment-holder">
        <div className="payment-logo">
          <Image src={Logomark} alt="logo" />
        </div>

        <div className="payment-center">
          <Text className="payment-select">Pay with Bank Transfer</Text>
          <Text
            className="payment-change"
            onClick={() => history.push("/choose-payment")}
          >
            Change payment method
          </Text>

          <div className="payment-base">
            <div className="pay-div">
              {" "}
              <Text className="payment-name">Name</Text>
              <Text className="bank-right">Oreofe Ventures</Text>
            </div>
            <div className="pay-div">
              <Text className="payment-name">Amount</Text>
              <Text className="bank-right">#100,000.00</Text>
            </div>
            <div className="pay-div">
              <Text className="payment-name">Account Number</Text>
              <Text className="bank-right">0123456789</Text>
            </div>
            <div className="pay-div">
              <Text className="payment-name">Bank Name</Text>
              <Text className="bank-right">Access Bank</Text>
            </div>
            <div className="pay-div">
              <Text className="payment-name">Beneficiary Name</Text>
              <Text className="bank-right">Amala Skye</Text>
            </div>
          </div>
          <div className="ussd-btn">
            <Button
              onClick={() => history.push("/bank-payment")}
              mt={5}
              mb={12}
              bg="yellow.500"
              width="100%"
              h="75px"
              borderRadius="0px 11px 11px 11px"
              type="submit"
              color="white"
              _hover={{ bg: "#1A202C" }}
            >
              I have made this bank transfer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
