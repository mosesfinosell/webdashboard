import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { createOrders } from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import { useDispatch, useSelector } from "react-redux";
import "../../../../pages/Dashboard/Dash.css";
function StepThree({
  orderFetching,
  currentPage,
  businessId,
  setActiveStep,
  page,
  setPage,
}) {
  const isLoading = useSelector((state) => state.businessReducer.isFetching);
  const stepOne = useSelector((state) => state.businessReducer.stepOne);
  const stepTwo = useSelector((state) => state.businessReducer.stepTwo);
  const dispatch = useDispatch();
  const handleOrder = () => {
    console.log(page, "PAGE");
    let orderPayload = { ...stepOne, ...stepTwo };
    orderPayload.order_date = new Date(orderPayload.order_date);
    orderPayload.products = [
      { product_id: orderPayload.productID, quantity: orderPayload.quantity },
    ];
    delete orderPayload.productID;
    dispatch(createOrders({ orderPayload }));

    setPage(1);
    orderFetching(businessId, 1);
    setTimeout(() => setActiveStep(0), 1000);
  };
  return (
    <div>
      <Text mt={5} color="gray" className="complete-text">
        Ready to complete order?
      </Text>
      <div className="complete-div">
        <Button
          onClick={handleOrder}
          mt={5}
          mb={5}
          bg="yellow.500"
          width="80%"
          h="60px"
          borderRadius="0px 11px 11px 11px"
          type="submit"
          color="white"
          _hover={{ bg: "#1A202C" }}
          isLoading={isLoading}
          loadingText="Creating order..."
          spinnerPlacement="end"
        >
          COMPLETE ORDER
        </Button>
      </div>
    </div>
  );
}

export default StepThree;
