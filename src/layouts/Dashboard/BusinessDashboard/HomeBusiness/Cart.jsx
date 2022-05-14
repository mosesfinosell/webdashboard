import React, { useState } from "react";
import "./store.css";
import { Text, Image, Button } from "@chakra-ui/react";
import chop from "../../../../assets/chop.svg";
import cartfood from "../../../../assets/cartfood.svg";
import Logomark from "../../../../assets/Logomark.svg";
import bag from "../../../../assets/bag.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { setBusinessModal } from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import { useDispatch } from "react-redux";
import CartModal from "./CartModal";
function Cart() {
  const dispatch = useDispatch();
  const yellowbtn = useColorModeValue("yellow.500");
  let [countNum, setCount] = useState(0);

  let increaseValue = () => {
    // function to increase the value
    setCount((countNum += 1)); //increases the count by 1
  };
  let decreaseValue = () => {
    // function to decrease the value
    setCount((countNum -= 1)); //increases the count by 1
  };
  const displayCartModal = () => {
    dispatch(setBusinessModal(true));
  };
  return (
    <React.Fragment>
      <div className="store-page">
        <div className="top-store">
          <div className="chop-left">
            <div>
              <img src={chop} alt="chop" />
            </div>
            <div className="chop-right">
              {" "}
              <Text className="chef">Chef Food House</Text>
              <Text color="gray">Location: Iwo Road</Text>
            </div>
          </div>
          <div>
            <input
              type="text"
              name="search"
              placeholder="What are you a shopping for?"
            />
          </div>
          <div className="extreme">
            <div
              style={{
                backgroundColor: "#FDF9ED",
                borderRadius: "0px 11px 11px 11px",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                height: "2rem",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div
              style={{
                backgroundColor: "#FDF9ED",
                borderRadius: "0px 11px 11px 11px",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                height: "2rem",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  background: "#FDF9ED",
                  borderRadius: "0px 11px 11px 11px",
                }}
              />
            </div>
            <div
              style={{
                backgroundColor: "#FDF9ED",
                borderRadius: "0px 11px 11px 11px",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                height: "2rem",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{
                  background: "#FDF9ED",
                  borderRadius: "0px 11px 11px 11px",
                }}
              />
            </div>
            <div className="cart" style={{ cursor: "pointer" }}>
              <Image src={bag} alt="bag" />
              <Text className="cart-text">Cart</Text>
            </div>
          </div>
        </div>
        <div className="cart-section">
          <div className="cart-inner">
            <div className="cart-left">
              {" "}
              <Text className="food-type">Home / Ofada Rice and Sauce</Text>
              <div>
                <Image src={cartfood} alt="food" />
              </div>
            </div>
            <div className="cart-right">
              <Text className="food-name">Ofada Rice and Sauce</Text>
              <Text className="food-cost">₦2,700.00</Text>
              <Text className="food-quantity">Quantity</Text>
              <div className="counter">
                <div className="increment" onClick={decreaseValue}>
                  -
                </div>
                <div className="increment">{countNum}</div>
                <div className="increment" onClick={increaseValue}>
                  +
                </div>
              </div>
              <Text className="food-expl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                molestie enim. Sed eu urna tortor. Suspendisse vel arcu vel
                massa tempor interdum. Nulla id dolor volutpat, viverra purus
                non, egestas ante.
              </Text>
              <Button
                onClick={displayCartModal}
                className="add-store"
                mt={4}
                bg={yellowbtn}
                width="82%"
                h="60px"
                borderRadius="0px 11px 11px 11px"
                type="submit"
                color="white"
                _hover={{ bg: "#1A202C" }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div className="store-base">
          <Image src={Logomark} alt="logo" />
        </div>
      </div>
      <CartModal/>
    </React.Fragment>
  );
}

export default Cart;
