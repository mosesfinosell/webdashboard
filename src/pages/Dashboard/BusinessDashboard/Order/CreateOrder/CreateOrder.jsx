import React from "react";
import { useQuery } from "react-query";
import { Container } from "./createOrder.styles";
import { AddOrder } from "./AddOrder/AddOrder";
import { History } from "./History/History";


export const CreateOrder = () => {
  return (
    <Container>
      <AddOrder />
      <History />
    </Container>
  );
};
