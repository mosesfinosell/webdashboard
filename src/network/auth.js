import { baseRequest } from "./axios";

export const businessAccountRegister = async (data) => {
  const response = await baseRequest.post("/auths/firststage", data);

  return response.data;
};

export const businessAccountLogin = async (data) => {
  const response = await baseRequest.post("/auths/login", data);

  return response.data;
};

export const phoneOTP = async (data) => {
  const response = await baseRequest.post("/sms/sendsms", data);

  return response.data;
};

export const confirmOTP = async (data) => {
  const response = await baseRequest.post("/sms/verifysms", data);

  return response.data;
};

export const passwordResetRequest = async (email) => {
  const response = await baseRequest.post(`/reset/vemail/`, { email });

  return response;
};

export const passwordReset = async (data) => {
  const response = await baseRequest.post("/reset/vcode", data);

  return response;
};
