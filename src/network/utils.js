import axios from "axios";
import { baseRequest } from "./axios";
import { fetchCustomers } from "./customer";
import { getStoreInventory } from "./store";
import { getOrders } from "./order";
import { getAllPayments, getPaymentByStatus } from "./payment";
import toast from "react-hot-toast";

export const getOrderInfo = async () => {
  // const customers = await fetchCustomers();
  // const products = await getStoreInventory();
  const res = await Promise.all([fetchCustomers(), getStoreInventory()]);

  //return { customers, products };
  return res;
};

export const collectEmail = async (data) => {
  baseRequest
    .post(`/email`, data)
    .then((res) => {
      toast.success("Email saved.");
    })
    .catch((err) => {
      toast.error("Error while saving email.");
    });
};

export const getPaymentData = async () => {
  const res = await Promise.all([
    getAllPayments(),
    getPaymentByStatus(2),
    getPaymentByStatus(1),
  ]);

  return res;
};
