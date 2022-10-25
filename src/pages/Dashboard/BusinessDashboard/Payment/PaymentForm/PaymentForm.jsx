import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "react-query";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PaymentFormStyles } from "./paymentForm.styles";
import { PaymentSmallButton } from "../businessPayment.styles";
import { Modal } from "../../../../../components/Modal/Modal";
import { AddCustomerModal } from "../../../../../components/Layout/AddCustomerModal/AddCustomerModal";
import { fetchCustomers } from "../../../../../network/customer";
import { CustomFormInput } from "../../../../../components/Form";
import { CustomTextArea } from "../../../../../components/Form/TextArea/TextArea";
import { CustomButton } from "../../../../../components/Button/button.styles";
import { CustomSelect } from "../../../../../components/Form/Select/Select";
import { AddProduct } from "../../../../../components/Layout/AddProduct/AddProduct";
import { recordPayment } from "../../../../../network/payment";

export const PaymentForm = () => {
  const queryClient = useQueryClient();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState();
  const [cart, setCart] = useState([
    { product_id: "", quantity: 0, product_name: "", price: 0 },
  ]);
  const formRef = useRef(null);

  const { data, refetch } = useQuery("customers", () => fetchCustomers());

  const validationSchema = Yup.object().shape({
    customer: Yup.string().required("Please select a customer."),
    Itemtype: Yup.string().required("Please enter title."),
    details: Yup.string().required("Please enter payment description."),
    transtype: Yup.string().required("Please Select transaction type"),
    amount: Yup.number().required("Please provide transaction amount."),
    payment_status: Yup.string().required("Please select payment status."),
  });

  const initialValues = {
    customer: "",
    Itemtype: "",
    details: "",
    transtype: "",
    amount: "",
    payment_status: "",
  };

  const onSubmit = async (values) => {
    const products = JSON.parse(JSON.stringify(cart)).reduce((acc, prod) => {
      if (prod.quantity > 0 && prod.product_id) {
        delete prod.price;
        delete prod.product_name;
        return [...acc, prod];
      }
      return acc;
    }, []);
    if (products.length < 1) return toast.error("Please select product.");
    delete values.customer;
    values.payment_status = values.payment_status === "half payment" ? 2 : 1;
    values.transtype = values.transtype === "debt" ? 9 : 7;
    values.customer_id = customer.customer_id;
    values.customer_name = customer.customer_name;
    values.customer_address = customer.customer_address;
    values.customer_email = customer.customer_email;
    values.customer_phone = customer.customer_phonenumber;
    values.payment_date = Date.now();
    values.payment_method = "offline";
    values.payment_ref = Math.random().toString(10).slice(2);
    values.transaction_id = Math.random().toString(8).slice(2);
    values.payment_id = `fint${Math.random(16).toString(4)}`;
    values.products = products;
    values.business_id = JSON.parse(
      localStorage.getItem("user")
    )?.message.business_id;
    console.log(values, cart, products);

    try {
      setLoading(true);
      const response = await recordPayment(values);
      console.log(response);
      formRef.current.reset();
      formik.resetForm();
      queryClient.invalidateQueries(["payment-data"]);
      setCart([{ product_id: "", quantity: 0, product_name: "", price: 0 }]);
    } catch (err) {
      console.log(err.response.data);
      toast.error("Couldn't record payment");
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

  const handleCustomer = (e) => {
    if (!data) return;
    const selected = data.find((cust) => cust.customer_name === e.target.value);

    setCustomer(selected);
  };
  return (
    <>
      <PaymentFormStyles ref={formRef} onSubmit={formik.handleSubmit}>
        <h3>Add a transaction</h3>
        <CustomSelect
          required={true}
          label="Select Customer"
          id="customer"
          formik={formik}
          onChange={handleCustomer}
          items={data && data.map(({ customer_name }) => customer_name)}
          end={
            <PaymentSmallButton type="button" onClick={() => setModal(true)}>
              Add Customer
            </PaymentSmallButton>
          }
        />

        <CustomFormInput
          label="Customer email"
          placeholder="Customer's email"
          val={customer && customer.customer_email}
          disabled={true}
        />
        <CustomFormInput
          label="Customer phone"
          placeholder="Customer's phone number"
          val={customer && customer.customer_phonenumber}
          disabled={true}
        />
        <CustomFormInput
          required={true}
          label="Transaction title"
          placeholder="Transaction title"
          id="Itemtype"
          formik={formik}
        />
        <CustomFormInput
          required={true}
          type="number"
          label="Transaction amount paid"
          placeholder="Enter transaction amount"
          id="amount"
          formik={formik}
        />
        <CustomTextArea
          required={true}
          label="Transaction description"
          placeholder="Add transaction description"
          id="details"
          formik={formik}
        />
        <CustomSelect
          required={true}
          label="Transaction type"
          id="transtype"
          formik={formik}
          items={["payment", "debt"]}
        />
        <CustomSelect
          required={true}
          label="Payment status"
          id="payment_status"
          formik={formik}
          items={["full payment", "half payment"]}
        />
        <AddProduct cart={cart} setCart={setCart} />
        <CustomButton type="submit" disabled={loading}>
          <span>Record Payment</span>
        </CustomButton>
      </PaymentFormStyles>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <AddCustomerModal
          handleModal={() => setModal(false)}
          refetch={refetch}
        />
      </Modal>
    </>
  );
};
