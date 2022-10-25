import { baseRequest } from "./axios";

export const addCustomer = async (data) => {
  const res = await baseRequest.post(`/customer/create`, data);

  return res.data;
};

export const fetchCustomers = async () => {
  const busID = JSON.parse(localStorage.getItem("user"))?.message.business_id;

  const res = await baseRequest.get(`/customer/fetchAll?business_id=${busID}`);

  return res.data.customers;
};
