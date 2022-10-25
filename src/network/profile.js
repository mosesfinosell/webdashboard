import { baseRequest } from "./axios";
import { getUser } from "../utils/helper";
import { Form } from "formik";

export const getBalance = async () => {
  const id = getUser("business_id");
  const response = await baseRequest.get(`/user/balance?user_id=${id}`);

  return response.data.details;
};

export const getProfile = async () => {
  const id = getUser("business_id");
  const response = await baseRequest.get(
    `/seller/fetchstore/?businessid=${id}`
  );

  return response.data.details;
};

export const updatePassword = async (data) => {
  const id = getUser("business_id");
  data.user_id = id;

  const response = await baseRequest.post(`/user/updatepassword`, data);

  return response.data;
};

export const updateProfileImage = async (data) => {
  const id = getUser("business_id");
  const formData = new FormData();
  formData.append("businessid", id);
  formData.append("imagefile", data);
  const response = await baseRequest.post(`/user/updateimg`, formData);

  return response.data;
};

export const updateProfile = async (data) => {
  const id = getUser("business_id");
  const response = await baseRequest.patch(
    `/seller/updatestore?businessid=${id}`
  );

  return response.data;
};
