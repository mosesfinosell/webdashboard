import { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useQuery } from "react-query";
import { FaPen } from "react-icons/fa";
import { Form, ImgContainer } from "./storeProfile.styles";
import { CustomFormInput } from "../../../../../components/Form";
import { updateProfileImage } from "../../../../../network/profile";
import { getUser, setUser } from "../../../../../utils/helper";
import { Spinner } from "../../../../../components/Spinner/style";
import { CustomTextArea } from "../../../../../components/Form/TextArea/TextArea";
import { CustomSelect } from "../../../../../components/Form";
import { useAddress } from "../../../../../hooks/useAddress";
import { CustomButton } from "../../../../../components/Button/button.styles";
import { getProfile, updateProfile } from "../../../../../network/profile";

export const StoreProfile = () => {
  const [img, setImg] = useState(getUser("business_image"));
  const [imgLoading, setImgLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data } = useQuery("business-profile", () => getProfile());

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email("Please enter a valid email address"),
    industry: Yup.string(),
    desc: Yup.string(),
    address: Yup.string().test(
      "dropdown_selection",
      "Please select address from the dropdown",
      function (value) {
        const { path, createError } = this;
        if (!value) return true;

        return !!suggestion;
      }
    ),
  });

  const initialValues = {
    name: "",
    email: "",
    industry: "",
    desc: "",
    address: "",
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
    validateOnChange: false,
    validateOnBlur: false,
  });

  const handleImg = async (e) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      console.log("Loaded");
      setImg(fileReader.result);
    };

    try {
      setImgLoading(true);
      const res = await updateProfileImage(e.target.files[0]);
      console.log(res);
      setUser({ business_image: res.url });
      fileReader.readAsDataURL(e.target.files[0]);
      toast.success("Profile image updated.");
    } catch (err) {
      console.log(err, err.response);
      toast.error("Couldn't update image.");
    } finally {
      setImgLoading(false);
    }
  };

  const suggestion = useAddress("address", formik);

  async function onSubmit(values, tools) {
    if (suggestion) values = { ...values, ...suggestion };

    const payload = JSON.parse(JSON.stringify(values));
    Object.keys(values).map((key) => {
      if (!values[key]) {
        delete payload[key];
      }
    });
    console.log(values, payload);
    try {
      setLoading(true);
      const res = await updateProfile(payload);
      console.log(res);
      tools.resetForm();
    } catch (err) {
      console.log(err.response);
      toast.error("An error occurred while updating profile.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="row">
        <p className="info">
          <span className="info__title">Change Profile Picture</span>
          <span className="info__desc"></span>
        </p>
        <div>
          <ImgContainer>
            <div className="img">
              <img alt="store image" src={img} />
            </div>
            <label htmlFor="image">
              {imgLoading ? <Spinner size={2.5} border={0.3} /> : <FaPen />}
            </label>
            <input
              id="image"
              type="file"
              disabled={imgLoading}
              onChange={handleImg}
            />
          </ImgContainer>
        </div>
      </div>
      <div className="row">
        <p className="info">
          <span className="info__title">Business Name</span>
          <span className="info__desc"></span>
        </p>
        <div className="fields">
          <CustomFormInput
            label="Name"
            placeholder="Enter your business name"
            id="name"
            formik={formik}
          />
        </div>
      </div>
      <div className="row">
        <p className="info">
          <span className="info__title">Business Email</span>
          <span className="info__desc"></span>
        </p>
        <div className="fields">
          <CustomFormInput
            label="Email"
            placeholder="Please enter your business email"
            id="email"
            formik={formik}
          />
        </div>
      </div>

      <div className="row">
        <p className="info">
          <span className="info__title">Industry</span>
          <span className="info__desc"></span>
        </p>
        <div className="fields">
          <CustomSelect
            label="Industry"
            items={[
              "food",
              "wears",
              "electronics",
              "beauty products",
              "women accessories",
              "food and beverage",
              "kids",
              "others",
            ]}
            id="industry"
            formik={formik}
          />
        </div>
      </div>
      <div className="row">
        <p className="info">
          <span className="info__title">Business description</span>
          <span className="info__desc"></span>
        </p>
        <div className="fields">
          <CustomTextArea
            label="Description"
            placeholder="Update business description."
            id="desc"
            formik={formik}
          />
        </div>
      </div>
      <div className="row">
        <p className="info">
          <span className="info__title">Business Address</span>
          <span className="info__desc"></span>
        </p>
        <div className="fields">
          <CustomFormInput
            type="address"
            label="Address"
            placeholder="Enter your business address"
            id="address"
            formik={formik}
          />
        </div>
      </div>
      <CustomButton type="submit" disabled={loading}>
        <span>Update Profile</span>
      </CustomButton>
      {/* <div className="row">
        <p className="info">
          <span className="info__title">Social Media</span>
          <span className="info__desc"></span>
        </p>
        <div className="fields">
          <CustomFormInput label="Whatsapp" />
          <CustomFormInput label="Twitter" />
          <CustomFormInput label="Instagram" />
        </div>
      </div> */}
    </Form>
  );
};
