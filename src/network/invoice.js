import { baseRequest } from "./axios";
import { getUser } from "../utils/helper";

export const getInvoices = async () => {
  const id = getUser().business_id;
  const res = await baseRequest.get(`/invoice/download_all?user_id=${id}`);

  return res.data.invoices;
};

export const generateInvoice = async (order_id) => {
  const response = await baseRequest.get(
    `/invoice/generate?order_id=${order_id}`
  );

  return response.data;
};