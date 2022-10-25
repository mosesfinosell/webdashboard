import { baseRequest } from "./axios";

export const getOrders = async () => {
  const id = JSON.parse(localStorage.getItem("user"))?.message.business_id;
  const res = await baseRequest.get(`/order/getorders?bussiness_id=${id}`);

  return res.data.data.orders;
};

export const createOrder = async (data) => {
  const response = await baseRequest.post("/order/createorder", data);

  return response.data;
};
