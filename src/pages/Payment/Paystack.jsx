// import { usePaystackPayment } from "react-paystack"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../ReduxContianer/shoppingCart/shoppingCartActions";
import { usePaystackPayment } from "react-paystack";

const Paystack = ({ children, config }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const cart = shoppingCart.cart;
  const businessID = shoppingCart.checkout.id;
  // const config = {
  //   reference: new Date().getTime().toString(),
  //   email: "user@example.com",
  //   amount: 20000,
  //   publicKey: "pk_test_d41c2bf87390ed60af6e8851ea104be0f7489e3c",
  // };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    const newCart = cart.filter((item) => item.businessID !== businessID);
    updateCart(dispatch, newCart);

    toast.success("Your transaction was completed");
    navigate("/");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <div onClick={() => initializePayment(onSuccess, onClose)}>{children}</div>
  );
};

export default Paystack;
