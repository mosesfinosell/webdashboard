import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

import { useState } from "react";
import { FaPen } from "react-icons/fa";

import QrReaderPage from "../../../../Dashboard/BusinessDashboard/QRcode/QrReaderPage";
import { CustomFormInput } from "../../../../../components/Form/Input";
import { CustomTextArea } from "../../../../../components/Form/TextArea/TextArea";
import { CustomSelect } from "../../../../../components/Form/Select/Select";
import { CustomButton } from "../../../../../components/Button/button.styles";
import { Container, Form, Section, ImageContainer } from "./addProduct.styles";
import imgPlaceholder from "../../../../../assets/box.svg";
import { uploadProduct } from "../../../../../network/store";

export function AddProduct() {
  const navigate = useNavigate();
  const [img, setImg] = useState(imgPlaceholder);
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState();
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please enter the product's name."),
    price: Yup.number().required("Please enter the price."),
    quantity: Yup.number().required("Please enter the quantity"),
    description: Yup.string().required("Please describe the product."),
    category: Yup.string().required("Please select a category"),
    product_img: Yup.mixed().required("Please select product image."),
  });
  const initialValues = {
    title: "",
    price: "",
    quantity: "",
    description: "",
    category: "",
    size: "",
    color: "",
    product_img: "",
  };
  async function onSubmit(value, tool) {
    try {
      setLoading(true);
      const form = new FormData();
      form.append("title", value.title);
      form.append("price", value.price);
      form.append("quantity", value.quantity);
      form.append("description", value.description);
      form.append("category", value.category);
      form.append("size", value.size);
      form.append("color", value.color);
      form.append("product_img", upload);
      form.append(
        "businessid",
        JSON.parse(localStorage.getItem("user")).message.business_id
      );
      //value.product_img = upload;
      //console.log(upload, value);
      const data = await uploadProduct(form);
      navigate("/business-dashboard/store-inventory");
    } catch (err) {
      console.log(err.response);
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });

  function handleImg(e) {
    const fileReader = new FileReader();
    formik.handleChange(e);

    if (e.target.files[0]) {
      if (e.target.files[0].size / 1000 < 2048) {
        setUpload(e.target.files[0]);
        fileReader.onload = () => {
          setImg(fileReader.result);
        };
        fileReader.readAsDataURL(e.target.files[0]);
      } else {
        toast.error("Please choose an image less then 2mb");
      }
    }
  }

  return (
    <Container>
      <h1>Add Product</h1>

      <Form onSubmit={formik.handleSubmit}>
        <Section>
          <div className="left">
            <ImageContainer>
              <div className="container">
                <img src={img} alt="product image" />
              </div>

              <label htmlFor="img">
                <FaPen />
              </label>
              <input
                type="file"
                id="img"
                onChange={handleImg}
                name="product_img"
              />
              {formik &&
              formik.touched.product_img &&
              formik.errors.product_img ? (
                <p className="error-message">{formik.errors.product_img}</p>
              ) : null}
            </ImageContainer>
          </div>
          <div className="right">
            <CustomFormInput
              required={true}
              label="Product Name"
              placeholder="Product Name"
              id="title"
              formik={formik}
            />
            <div className="flex-container">
              <CustomFormInput
                required={true}
                label="Price"
                placeholder="₦0.00"
                type="number"
                id="price"
                formik={formik}
              />
              <CustomFormInput
                required={true}
                label="Quantity"
                placeholder="1000"
                id="quantity"
                type="number"
                formik={formik}
              />
            </div>
            <CustomTextArea
              required={true}
              label="Product Description"
              placeholder="Add a description"
              id="description"
              type="string"
              formik={formik}
            />
            <CustomSelect
              required={true}
              label="Product Category"
              placeholder="Select product category"
              items={[
                "food",
                "wears",
                "electronics",
                "beauty products",
                "women accessories",
                "food and bevereage",
                "kids",
                "others",
              ]}
              id="category"
              formik={formik}
            />
          </div>
        </Section>
        <Section>
          <div className="left">
            <h2>Product Specification</h2>
          </div>
          <div className="right">
            <div className="flex-container">
              <CustomFormInput
                label="Available Sizes"
                placeholder="Select available sizes"
                id="size"
                formik={formik}
              />
              <CustomFormInput
                label="Available Colors"
                placeholder="Select available colors"
                id="color"
                formik={formik}
              />
            </div>
            <CustomButton height="8rem" type="submit" disabled={loading}>
              <span>Add Product</span>
            </CustomButton>
          </div>
        </Section>
      </Form>
    </Container>
  );
}
