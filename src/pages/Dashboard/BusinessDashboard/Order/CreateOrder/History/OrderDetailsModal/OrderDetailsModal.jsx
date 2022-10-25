import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ContentContainer, InvoiceButton } from "./orderDetailsModal.styles";
import { generateInvoice } from "../../../../../../../network/invoice";

export const OrderDetailsModal = ({ order, handleModal }) => {
  const [loading, setLoading] = useState(false);
  const [download, setDownload] = useState();
 

  const {
    buyer_name,
    buyer_phone,
    buyer_email,
    amount,
    payment_method,
    payment_status,
    sales_channel,
    shipping_address,
    products,
    order_id,
  } = order;

  const handleGenerateInvoice = async (orderId) => {
    try {
      setLoading(true);

      const res = await generateInvoice(orderId);

      setDownload(res.invoice.filePath);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <ContentContainer>
      <FaTimes className="close" onClick={() => handleModal()} />
      <h3>Order Details</h3>

      <div className="details">
        <div className="buyer-info info">
          <p>
            <span className="title">Buyer's name</span>
            <span className="value">{buyer_name}</span>
          </p>
          <p>
            <span className="title">Buyer's email</span>
            <span className="value">{buyer_email}</span>
          </p>
          <p>
            <span className="title">Buyer's phone</span>
            <span className="value">{buyer_phone}</span>
          </p>
          <p>
            <span className="title">Total Amount</span>
            <span className="value">₦ {parseInt(amount).toLocaleString()}</span>
          </p>
          <p>
            <span className="title">Order ID</span>
            <span className="value">{order_id}</span>
          </p>

          <p>
            <span className="title">Shipping address</span>
            <span className="value">{shipping_address}</span>
          </p>
        </div>
        <h4>Products</h4>

        {products.map((prod, i) => (
          <div key={i} className="info mb">
            <p>
              <span className="title">Product name</span>
              <span className="value">{prod.product_name}</span>
            </p>
            <p>
              <span className="title">Product amount</span>
              <span className="value">{prod.quantity}</span>
            </p>
          </div>
        ))}
      </div>
      {!download ? (
        <InvoiceButton
          onClick={() => handleGenerateInvoice(order_id)}
          disabled={loading}
        >
          <span>Generate Invoice</span>
        </InvoiceButton>
      ) : (
        <a href={download} target="_blank">
          <InvoiceButton>
            <span>Download Invoice</span>
          </InvoiceButton>
        </a>
      )}
    </ContentContainer>
  );
};
