import React from "react";
import { Button } from "@chakra-ui/react";
import { createOrders } from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
function StepThree() {
  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  const stepOne = useSelector((state) => state.businessReducer.stepOne);
  const stepTwo = useSelector((state) => state.businessReducer.stepTwo);
  const businessId = useState(businessInfo.business_id);
  const dispatch = useDispatch();
  const handleOrder = () => {
    console.log({ ...stepOne, ...stepTwo }, "GBA");
    let orderPayload = { ...stepOne, ...stepTwo };
    orderPayload.order_date = new Date(orderPayload.order_date).toISOString();
    orderPayload.products = [
      { product_id: orderPayload.productID, quantity: orderPayload.quantity },
    ];
    delete orderPayload.productID
    console.log(orderPayload, "ORDER PAYLOAD THREE");
    dispatch(createOrders({ orderPayload }));
  };
  return (
    <div>
      <h1>Ready to create order?</h1>
      <Button
        onClick={handleOrder}
        mt={4}
        bg="yellow.500"
        width="300px"
        h="60px"
        borderRadius="0px 11px 11px 11px"
        type="submit"
        color="white"
        _hover={{ bg: "#1A202C" }}
      >
        COMPLETE ORDER
      </Button>
    </div>
  );
}

export default StepThree;
