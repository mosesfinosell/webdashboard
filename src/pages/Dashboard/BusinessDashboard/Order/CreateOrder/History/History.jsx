import React, { useState } from "react";
import { useQuery } from "react-query";
import { Modal } from "../../../../../../components/Modal/Modal";
import { HistoryContainer, HistoryContent } from "./history.styles";
import { Item } from "./Item/Item";
import { getOrders } from "../../../../../../network/order";
import { OrderDetailsModal } from "./OrderDetailsModal/OrderDetailsModal";

export const History = () => {
  const [tab, setTab] = useState("tab1");
  const [modal, setModal] = useState({ isOpen: false, data: undefined });
  const { data, error, isLoading } = useQuery("orders", () => getOrders());

  const handleModal = (order) => {
    setModal({ isOpen: !modal.isOpen, data: order });
  };
  return (
    <>
      <HistoryContainer>
        <h4>Order History</h4>
        <HistoryContent>
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
              <p>Pending</p>
            </li>
            <li
              className={`tab ${tab === "tab3" ? "active" : undefined}`}
              onClick={() => setTab("tab3")}
            >
              <p>In Delivery</p>
            </li>
            <li
              className={`tab ${tab === "tab4" ? "active" : undefined}`}
              onClick={() => setTab("tab4")}
            >
              <p>Completed</p>
            </li>
            <li
              className={`tab ${tab === "tab5" ? "active" : undefined}`}
              onClick={() => setTab("tab5")}
            >
              <p>Cancelled</p>
            </li>
          </ul>
          <div className="content">
            {data && (
              <>
                {tab === "tab1" &&
                  data.map((order, i) => (
                    <Item
                      key={i}
                      order={order}
                      handleModal={() => handleModal(order)}
                    />
                  ))}
                {tab === "tab2" &&
                  data
                    .filter((order) => order.order_status === "pending")
                    .map((order, i) => (
                      <Item
                        key={i}
                        order={order}
                        handleModal={() => handleModal(order)}
                      />
                    ))}
                {tab === "tab3" &&
                  data
                    .filter((order) => order.order_status === "in-delivery")
                    .map((order, i) => (
                      <Item
                        key={i}
                        order={order}
                        handleModal={() => handleModal(order)}
                      />
                    ))}
                {tab === "tab4" &&
                  data
                    .filter((order) => order.order_status === "completed")
                    .map((order, i) => (
                      <Item
                        key={i}
                        order={order}
                        handleModal={() => handleModal(order)}
                      />
                    ))}
                {tab === "tab5" &&
                  data
                    .filter((order) => order.order_status === "cancelled")
                    .map((order, i) => (
                      <Item
                        key={i}
                        order={order}
                        handleModal={() => handleModal(order)}
                      />
                    ))}
              </>
            )}
          </div>
        </HistoryContent>
      </HistoryContainer>
      {modal.data && (
        <Modal isOpen={modal.isOpen} onClose={() => handleModal()}>
          <OrderDetailsModal
            order={modal.data}
            handleModal={() => handleModal()}
          />
        </Modal>
      )}
    </>
  );
};
