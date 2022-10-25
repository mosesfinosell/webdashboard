import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ContentContainer, InvoiceButton } from "./paymentDetailsModal.styles";
import { generateReceipt } from "../../../../../../network/payment";

export const PaymentDetailsModal = ({ payment, handleModal }) => {
  const [loading, setLoading] = useState(false);
  const [download, setDownload] = useState();

  const {
    Itemtype,
    amount,

    transtype,
    payment_status,

    products,
    payment_id,
  } = payment;

  const handleGenerateReceipt = async (paymentId) => {
    try {
      setLoading(true);
      const response = await generateReceipt(paymentId);

      setDownload(response.filePath);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <ContentContainer>
      <FaTimes className="close" onClick={() => handleModal()} />
      <h3>Payment Details</h3>

      <div className="details">
        <div className="buyer-info info">
          <p>
            <span className="title">Payment title</span>
            <span className="value">{Itemtype}</span>
          </p>
          <p>
            <span className="title">Paid amount</span>
            <span className="value">₦ {parseInt(amount).toLocaleString()}</span>
          </p>
          <p>
            <span className="title">Payment status</span>
            <span className="value">
              {payment_status === "1" ? "Paid" : "Debt"}
            </span>
          </p>
          <p>
            <span className="title">Transaction type</span>
            <span className="value">
              {transtype === "7" ? "Full payment" : "Half payment"}
            </span>
          </p>
          <p>
            <span className="title">Payment ID</span>
            <span className="value">{payment_id}</span>
          </p>
        </div>
        <h4>Products</h4>

        {products?.map((prod, i) => (
          <div key={i} className="info mb">
            <p>
              <span className="title">Product id</span>
              <span className="value">{prod.product_id}</span>
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
          onClick={() => handleGenerateReceipt(payment_id)}
          disabled={loading}
        >
          <span>Generate Receipt</span>
        </InvoiceButton>
      ) : (
        <a href={download} target="_blank">
          <InvoiceButton>
            <span>Download Receipt</span>
          </InvoiceButton>
        </a>
      )}
    </ContentContainer>
  );
};
