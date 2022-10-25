import {
  PaymentContainer,
  Container,
  Transactions,
} from "./businessPayment.styles";

import { PaymentForm } from "./PaymentForm/PaymentForm";
import { PaymentHistory } from "./PaymentHistory/PaymentHistory";

export const BusinessPayment = () => {
  return (
    <>
      <PaymentContainer>
        <h1>Payment</h1>
        <Container>
          <PaymentForm />
          <PaymentHistory />
        </Container>
      </PaymentContainer>
    </>
  );
};
