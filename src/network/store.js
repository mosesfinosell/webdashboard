import { baseRequest } from "./axios";
import { getUser } from "../utils/helper";

export const createStoreMetrics = async (id) => {
  const response = await baseRequest.post(`/storemetrics/${id}`);

  return response.data;
};

export const checkDomainAvailability = async (subdomain) => {
  const response = await baseRequest.post("/storelink/check", { subdomain });

  return response.data;
};

export const createStoreLink = async (subdomain) => {
  const busID = getUser("business_id");

  const response = await baseRequest.post("/subdomain/create", {
    sub: subdomain,
    user: busID,
  });

  return response.data;
};

export const checkForStorelink = async () => {
  const userid = JSON.parse(localStorage.getItem("user"))?.message.business_id;

  const res = await baseRequest.post("/storelink/get_store_link", { userid });

  return res.data;
};

export const getStoreInventory = async () => {
  const busID = getUser("business_id");
  const res = await baseRequest(`/products/all?businessid=${busID}`);

  return res.data.products;
};

export const uploadProduct = async (data) => {
  const res = await baseRequest.post("/products/create", data);

  return res.data;
};

export const updateProduct = async (id, data) => {
  const res = await baseRequest.patch(`/products/?productID=${id}`, data);

  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await baseRequest.delete(`/products/${id}`);

  return res.data;
};

export const searchProduct = async (data) => {
  const busID = getUser("business_id");

  const res = await baseRequest.get(
    `/products/search?businessid=${busID}&keyword=${data}`
  );

  return res.data;
};

export const getSingleProduct = async (productID) => {
  const res = await baseRequest.get(`/products/${productID}`);

  return res.data.product;
};

export const getStoreMetrics = async () => {
  const id = getUser("business_id");
  const response = await baseRequest.get(`/storemetrics/${id}`);

  return response.data.data.storeMetric;
};