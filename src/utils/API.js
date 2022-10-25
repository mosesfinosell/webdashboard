import axios from "axios";
import toast from "react-hot-toast";

const finosellClient = axios.create({
  baseURL: "https://finosell.link/api/v2",
});

export const handleError = (error) => {
  if (typeof error === "string") {
    toast.error(error);
  } else {
    toast.error("An error ocurred");
  }
  // } else if ("data" in error) {
  //     toast.error()
  // }
};

export class Blog {
  constructor(_id) {
    this.id = _id;
  }
  async blogPage() {
    const data = await finosellClient.get("/blog");
    // console.log('Blog page', data.data);
    // alert("data loaded 1")
    return data.data;
  }

  async SingleBlogPage() {
    const data = await finosellClient.get(`/blog/_id`);
    console.log("Single Blog page", data.data);
    // alert("data loaded 1")
    return data.data;
  }
}

export class Store {
  constructor(businessID) {
    this.businessID = businessID;
  }

  async getStoreInfo() {
    const data = await finosellClient.get(
      `/seller/fetchstore?businessid=${this.businessID}`
    );

    return data.data;
  }

  async getProducts(pageParam) {
    const data = await finosellClient.get(
      `/products/all?businessid=${this.businessID}&page=${pageParam}`
    );
    console.log("Product", data.data);
    return data.data;
  }

  async getProduct(productID) {
    const data = await finosellClient.get(`/products/${productID}`);

    return data.data.product;
  }

  async search(search) {
    const data = await finosellClient.get(
      `/products/search?businessid=${this.businessID}&keyword=${search}`
    );

    return data.data;
  }

  async getBusinessSubAccount() {
    const data = await finosellClient.get(
      `/fincra/subaccount?businessid=${this.businessID}`
    );
    //response to be improved

    const account = data.data.data.account.find(
      (acct) => acct.businessid === this.businessID
    );
    console.log("Business sub account", account);
    return account;
  }
}

export class Payment {
  async getPaymentLinkInfo(id) {
    const data = await finosellClient.get(
      `/paylink/fetchlink?payment_link_id=${id}`
    );
    //api response can be better
    const payments = data.data.paymentdata;

    const business = data.data.business;

    console.log("Business", business, payments);
    return { ...business, amount: payments.amount };
  }
}

// export class SmsVerification {
// 	async sendSms(user) {
// 		const data = await finosellClient.post(`sms/sendsms`,{user});
// 		//api response can be better

// 		console.log(data, 'sent');

// 	}
// }

export const generatePaymentLink = async (id, amount) => {
  const data = await finosellClient.post(`/paylink/create`, {
    business_id: id,
    amount,
    title: "Payment",
  });
  console.log("generate payment", data.data.link);
  return data.data.link;
};
