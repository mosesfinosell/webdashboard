import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getSingleProduct } from "../../../../../network/store";
import { CustomFormInput } from "../../../../../components/Form";
import { CustomTextArea } from "../../../../../components/Form/TextArea/TextArea";
import { CustomSelect } from "../../../../../components/Form";
import { CustomButton } from "../../../../../components/Button/button.styles";
import { updateProduct } from "../../../../../network/store";
import {
  SpinnerContainer,
  Spinner,
} from "../../../../../components/Spinner/style";

import { Container, Form } from "./editProduct.styles";

export const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useQuery(["single-product", id], () =>
    getSingleProduct(id)
  );

  async function onSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const form = new FormData();
      form.append("title", e.target.title.value);
      form.append("price", e.target.price.value);
      form.append("quantity", e.target.quantity.value);
      form.append("description", e.target.description.value);
      form.append("category", e.target.category.value);
      form.append("size", e.target.size.value);
      form.append("color", e.target.color.value);
      //   form.append(
      //     "businessid",
      //     JSON.parse(localStorage.getItem("user")).message.business_id
      //   );
      //value.product_img = upload;
      //console.log(upload, value);
      const data = await updateProduct(id, form);
      
      navigate("/business-dashboard/store-inventory");
    } catch (err) {
      console.log(err.response);
      toast.error("Couldn't update. Please fill required fields.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <h1>Edit Product</h1>
      {!isLoading ? (
        <Form onSubmit={onSubmit}>
          <CustomFormInput
            required={true}
            label="Product Name"
            placeholder="Product Name"
            id="title"
            val={data.title}
          />
          <div className="flex-container">
            <CustomFormInput
              required={true}
              label="Price"
              placeholder="₦0.00"
              type="number"
              id="price"
              val={parseInt(data.price)}
            />
            <CustomFormInput
              required={true}
              label="Quantity"
              placeholder="1000"
              id="quantity"
              type="number"
              val={parseInt(data.quantity)}
            />
          </div>
          <CustomTextArea
            required={true}
            label="Product Description"
            placeholder="Add a description"
            id="description"
            type="string"
            val={data.description}
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
            val={data.category}
          />
          <div className="flex-container">
            <CustomFormInput
              label="Available Sizes"
              placeholder="Select available sizes"
              id="size"
              val={data.size}
            />
            <CustomFormInput
              label="Available Colors"
              placeholder="Select available colors"
              id="color"
              val={data.color}
            />
          </div>
          <CustomButton height="8rem" type="submit" disabled={loading}>
            <span>Update Product</span>
          </CustomButton>
        </Form>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Container>
  );
};
