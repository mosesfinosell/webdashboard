import { useState, useRef } from "react";
import toast from "react-hot-toast";

import { useQuery, useQueryClient } from "react-query";
import * as Yup from "yup";
import { useFormik } from "formik";

import { CustomSelect } from "../../../../../../components/Form";
import { CustomFormInput } from "../../../../../../components/Form";
import { CustomButton } from "../../../../../../components/Button/button.styles";

import {
  AddOrderContainer,
  AddOrderForm,
  OrderSmallButton,
} from "./addOrder.styles";
import { Modal } from "../../../../../../components/Modal/Modal";
import { AddCustomerModal } from "../../../../../../components/Layout/AddCustomerModal/AddCustomerModal";
import { CustomDate } from "../../../../../../components/Form/Date/Date";
import { useAddress } from "../../../../../../hooks/useAddress";

import { fetchCustomers } from "../../../../../../network/customer";
import { createOrder } from "../../../../../../network/order";

import { AddProduct } from "../../../../../../components/Layout/AddProduct/AddProduct";

export const AddOrder = () => {
  const queryClient = useQueryClient();
  const [modal, setModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState();
  const [cart, setCart] = useState([
    { product_id: "", quantity: 0, product_name: "", price: 0 },
  ]);
  const formRef = useRef(null);

  const { data, refetch } = useQuery("customers", () => fetchCustomers());

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please add order title."),
    buyer_name: Yup.string().required("Please provide buyer's name."),
    buyer_email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your buyer's email."),
    buyer_phone: Yup.number()
      .typeError("Please enter a valid phone number")
      .required("Please enter a valid phone number"),
    shipping_address: Yup.string().required("Please enter shipping address."),
    order_status: Yup.string().required("Please select order status."),
    sales_channel: Yup.string().required("Please select sale channel."),
    payment_status: Yup.string().required("Please select payment status."),
    payment_method: Yup.string().required("Please select payment method."),
  });

  const initialValues = {
    title: "",
    buyer_name: "",
    buyer_email: "",
    buyer_phone: "",
    shipping_address: "",
    order_status: "",
    sales_channel: "",
    payment_status: "",
    payment_method: "",
  };

  const onSubmit = async (values) => {
    const products = JSON.parse(JSON.stringify(cart)).reduce((acc, prod) => {
      if (prod.quantity > 0 && prod.product_id) {
        delete prod.price;
        return [...acc, prod];
      }
      return acc;
    }, []);
    if (products.length < 1) return toast.error("Please select product.");
    values.order_id = Math.random().toString(16).slice(2);
    values.order_date = Date.now();
    values.totalamount = total;
    values.business_id = JSON.parse(
      localStorage.getItem("user")
    )?.message.business_id;
    values.products = products;
      let response = await window.electron.saveOrder(values);
      return alert(response);
    try {
      setLoading(true);
      const res = await createOrder(values);
      console.log("response", res);
      formRef.current.reset();
      setTotal(0);
      queryClient.invalidateQueries(["orders"]);
    } catch (err) {
      toast.error("Couldn't place order.");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });

  useAddress("shipping_address", formik);

  const handleCustomer = (e) => {
    if (!data) return;
    const selected = data.find((cust) => cust.customer_name === e.target.value);

    setCustomer(selected);
  };

  return (
    <>
      <AddOrderContainer>
        <h4>Action</h4>
        <AddOrderForm ref={formRef} onSubmit={formik.handleSubmit}>
          <h3>Add an order</h3>
          <CustomSelect
            label="Select customer"
            items={data && data.map(({ customer_name }) => customer_name)}
            onChange={handleCustomer}
            end={
              <OrderSmallButton type="button" onClick={() => setModal(true)}>
                Add Customer
              </OrderSmallButton>
            }
          />
          <CustomFormInput
            label="Title"
            required={true}
            placeholder="Order title"
            id="title"
            formik={formik}
          />
          <CustomFormInput
            label="Name"
            required={true}
            placeholder="Buyer's name"
            id="buyer_name"
            formik={formik}
            val={customer && customer.customer_name}
          />
          <CustomFormInput
            type="email"
            label="Email"
            required={true}
            placeholder="Buyer's email address."
            id="buyer_email"
            formik={formik}
            val={customer && customer.customer_email}
          />
          <CustomFormInput
            label="Buyer's phone number"
            required={true}
            placeholder="0800 000 0000"
            id="buyer_phone"
            formik={formik}
            val={customer && customer.customer_phonenumber}
          />
          <CustomFormInput
            type="address"
            label="Customer's Address"
            placeholder="Address"
            required={true}
            id="shipping_address"
            formik={formik}
            val={customer && customer.customer_address}
          />
          <CustomFormInput
            label="Total Amount"
            placeholder="₦0.00"
            id="amount"
            val={`₦${total}`}
            disabled={true}
          />
          <CustomSelect
            required={true}
            label="Payment method"
            id="payment_method"
            formik={formik}
            items={["transfer", "paylink"]}
          />
          <CustomSelect
            required={true}
            label="Order status"
            id="order_status"
            formik={formik}
            items={["pending", "in-delivery", "completed"]}
          />
          <CustomSelect
            required={true}
            label="Sale channel"
            id="sales_channel"
            formik={formik}
            items={["offline", "online"]}
          />
          <CustomSelect
            required={true}
            label="Payment status"
            id="payment_status"
            formik={formik}
            items={["paid", "unpaid"]}
          />

          {/* <CustomDate label="Transaction Date" required={true} /> */}
          <div className="products">
            <AddProduct cart={cart} setCart={setCart} setTotal={setTotal} />
          </div>

          <CustomButton disabled={loading} type="submit">
            <span>Add Order</span>
          </CustomButton>
        </AddOrderForm>
      </AddOrderContainer>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <AddCustomerModal
          handleModal={() => setModal(false)}
          refetch={refetch}
        />
      </Modal>
    </>
  );
};
