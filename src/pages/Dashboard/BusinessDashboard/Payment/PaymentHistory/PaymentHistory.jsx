import { useState } from "react";
import { useQuery } from "react-query";
import { ContentContainer } from "./paymentHistory.styles";
import { Item } from "./Item/Item";
import { Modal } from "../../../../../components/Modal/Modal";
import { PaymentDetailsModal } from "./PaymentDetailsModal/PaymentDetailsModal";
import { getPaymentData } from "../../../../../network/utils";

export const PaymentHistory = () => {
  const [tab, setTab] = useState("tab1");
  const [modal, setModal] = useState({ isOpen: false, data: undefined });

  const { data, isLoading } = useQuery("payment-data", () => getPaymentData());

  const handleModal = (data) => {
    console.log(data);
    if (data) {
      return setModal({ isOpen: true, data });
    }
    return setModal({ isOpen: false, data: undefined });
  };

  return (
    <>
      <div>
        <ContentContainer>
          <ul>
            <li
              className={`tab ${tab === "tab1" ? "active" : undefined}`}
              onClick={() => setTab("tab1")}
            >
              <p>All</p>
            </li>
            <li
              className={`tab ${tab === "tab2" ? "active" : undefined}`}
              onClick={() => setTab("tab2")}
            >
              <p>Debt</p>
            </li>
            <li
              className={`tab ${tab === "tab3" ? "active" : undefined}`}
              onClick={() => setTab("tab3")}
            >
              <p>Paid</p>
            </li>
          </ul>
          <div className="content">
            {tab === "tab1" &&
              data &&
              data[0].map((info, i) => (
                <Item
                  payment={info}
                  key={i}
                  handleModal={() => handleModal(info)}
                />
              ))}
            {tab === "tab2" &&
              data &&
              data[1].map((info, i) => (
                <Item
                  payment={info}
                  key={i}
                  handleModal={() => handleModal(info)}
                />
              ))}
            {tab === "tab3" &&
              data &&
              data[2].map((info, i) => (
                <Item
                  payment={info}
                  key={i}
                  handleModal={() => handleModal(info)}
                />
              ))}
          </div>
        </ContentContainer>
        {modal.data && (
          <Modal
            className="payment-details"
            isOpen={modal.isOpen}
            onClose={() => handleModal()}
          >
            <PaymentDetailsModal
              payment={modal.data}
              handleModal={() => handleModal()}
            />
          </Modal>
        )}
      </div>
    </>
  );
};
