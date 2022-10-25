import { baseRequest } from "./axios";
import { getUser } from "../utils/helper";

export async function getPaymentLinkInfo(id) {
  const data = await baseRequest.get(
    `/paylink/fetchlink?payment_link_id=${id}`
  );
  //api response can be better
  const payments = data.data.paymentdata;

  const business = data.data.business;

  return { ...business, amount: payments.amount };
}

export async function getStoreInfo(businessID) {
  const data = await baseRequest.get(
    `/seller/fetchstore?businessid=${businessID}`
  );

  return data.data;
}

export async function getBusinessSubAccount(businessID) {
  const data = await baseRequest.get(
    `/fincra/subaccount?businessid=${businessID}`
  );

  //response to be improved

  const account = data.data.data.account.find(
    (acct) => acct.businessid === businessID
  );

  return account;
}

export async function paymentConfirmation(orderID, businessID, amount) {
  const data = await baseRequest.get(
    `/payment/notify-business?order_id=${orderID}&businessid=${businessID}&amount=${amount}`
  );

  return data.data;
}

export const recordPayment = async (data) => {
  const res = await baseRequest.post("/payment/createpayment", data);

  return res.data;
};

export const getAllPayments = async () => {
  const id = getUser("business_id");
  const res = await baseRequest.get(`/payment/getpayments?business_id=${id}`);

  return res.data.payments;
};

export const getPaymentByStatus = async (status) => {
  const id = getUser("business_id");
  const res = await baseRequest.get(
    `/payment/getpayments_status?business_id=${id}&payment_status=${status}`
  );

  return res.data.payments;
};

export const generateReceipt = async (id) => {
  const res = await baseRequest.post(`/receipt?payment_id=${id}`);

  return res.data.receipt;
};

export const createPaylink = async (values) => {
  const business_id = getUser("business_id");
  const response = await baseRequest.post(`/paylink/create`, {
    business_id,
    ...values,
  });

  return response.data;
};