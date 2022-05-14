import { Modal } from "react-bootstrap";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBusinessModal } from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import { Text, Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import "./store.css";
function CartModal(props) {
  const yellowbtn = useColorModeValue("yellow.500");
  const dispatch = useDispatch();
  const modalDisplay = useSelector(
    (state) => state.businessReducer.modalStatus
  );
  const handleClose = () => {
    dispatch(setBusinessModal(false));
  };
  return (
    <Modal
      className="cartModal"
      show={modalDisplay}
      onHide={handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div closeButton></div>
      <Text className="cart-middle">Cart</Text>
      {/* <Text className="modal-left-base">Cart</Text> */}
      <div className="cart-div">
        <div className="modal-divider">
          <div className="modal-inner">
            <Text className="modal-left">Ofada Rice and Sauce</Text>
            <Text className="modal-left-base">₦2,700.00</Text>
          </div>
          <div className="count">
            <div className="ctrl">-</div>
            <div className="ctrl">1</div>
            <div className="ctrl">+</div>
          </div>
        </div>
        <div className="modal-divider">
          <div className="modal-inner">
            <Text className="modal-left">Ofada Rice and Sauce</Text>
            <Text className="modal-left-base">₦2,700.00</Text>
          </div>
          <div className="count">
            <div className="ctrl">-</div>
            <div className="ctrl">1</div>
            <div className="ctrl">+</div>
          </div>
        </div>
        <div className="modal-divider">
          <div className="modal-inner">
            <Text className="modal-left">Ofada Rice and Sauce</Text>
            <Text className="modal-left-base">₦2,700.00</Text>
          </div>
          <div className="count">
            <div className="ctrl">-</div>
            <div className="ctrl">1</div>
            <div className="ctrl">+</div>
          </div>
        </div>
        
        <div className="modal-divider">
          <div className="modal-inner">
            <Text className="modal-left">Ofada Rice and Sauce</Text>
            <Text className="modal-left-base">₦2,700.00</Text>
          </div>
          <div className="count">
            <div className="ctrl">-</div>
            <div className="ctrl">1</div>
            <div className="ctrl">+</div>
          </div>
        </div>
        <div className="modal-divider">
          <div className="modal-inner">
            <Text className="modal-left">Ofada Rice and Sauce</Text>
            <Text className="modal-left-base">₦2,700.00</Text>
          </div>
          <div className="count">
            <div className="ctrl">-</div>
            <div className="ctrl">1</div>
            <div className="ctrl">+</div>
          </div>
        </div>
        <div className="modal-divider">
          <div className="modal-inner">
            <Text className="modal-left">Ofada Rice and Sauce</Text>
            <Text className="modal-left-base">₦2,700.00</Text>
          </div>
          <div className="count">
            <div className="ctrl">-</div>
            <div className="ctrl">1</div>
            <div className="ctrl">+</div>
          </div>
        </div>
      </div>
      <div className="modal-desc">
        <div className="modal-sep">
          <Text className="modal-items">Items</Text>
          <Text className="modal-items">₦7200.00</Text>
        </div>
        <div className="modal-sep">
          <Text className="modal-items">Delivery</Text>
          <Text className="modal-items">₦500</Text>
        </div>
        <div className="modal-sep">
          <Text className="modal-items-total">Total</Text>
          <Text className="modal-items-total">₦7200.00</Text>
        </div>
      </div>

      <Button
        className="cart-btn"
        onClick={handleClose}
        mt={4}
        mb={7}
        bg={yellowbtn}
        width="80%"
        h="60px"
        borderRadius="0px 11px 11px 11px"
        type="submit"
        color="white"
        _hover={{ bg: "#1A202C" }}
      >
        Finish
      </Button>
      {/* </Modal.Footer> */}
    </Modal>
  );
}

export default CartModal;
