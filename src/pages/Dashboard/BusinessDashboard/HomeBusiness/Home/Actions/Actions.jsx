import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Tabs, Navigation } from "./actions.styles";
import { BsArrowDownLeftSquare, BsHouseDoor, BsPeople } from "react-icons/bs";
import { Modal } from "../../../../../../components/Modal/Modal";
import { RequestMoney } from "./RequestMoneyModal/RequestMoney";
import { getBalance } from "../../../../../../network/profile";
import { Spinner } from "../../../../../../components/Spinner/style";

export const Actions = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("total");
  const [modal, setModal] = useState(false);
  const { data, isLoading } = useQuery("balance", () => getBalance());

  return (
    <>
      <div>
        <Tabs>
          <div className="buttons">
            <button
              className={`${tab === "total" ? "active" : ""}`}
              onClick={() => setTab("total")}
            >
              Total Balance
            </button>
            <button
              className={`${tab === "settlement" ? "active" : ""}`}
              onClick={() => setTab("settlement")}
            >
              Settlement Balance
            </button>
          </div>
          <div className="balance">
            {tab === "total" &&
              (data ? (
                <p>
                  ₦<span>{data.total_Balance}</span>
                </p>
              ) : (
                <Spinner />
              ))}
            {tab === "settlement" &&
              (data ? (
                <p>
                  ₦<span>{data.settlement_Balance}</span>
                </p>
              ) : (
                <Spinner />
              ))}
          </div>
        </Tabs>
        <Navigation>
          <button onClick={() => setModal(true)}>
            <BsArrowDownLeftSquare />
            <p>Request Payment</p>
          </button>

          <button>
            <BsPeople />
            <p>Team Management</p>
          </button>
        </Navigation>
      </div>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <RequestMoney onClose={() => setModal(false)} />
      </Modal>
    </>
  );
};
