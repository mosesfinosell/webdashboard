import React from "react";
import { ItemContainer, Info, Price } from "./item.styles";
import { OrderBag } from "../../../../../../components/SVG/OrderBag";

export const Item = ({ payment, handleModal }) => {
  const { Itemtype, payment_status, transtype, createdAt } = payment;
  const date = new Date(createdAt).toDateString().split(" ");
  return (
    <ItemContainer onClick={() => handleModal()}>
      <Info>
        <div className="icon">
          <OrderBag />
        </div>
        <div className="name-container">
          <p className="name">{Itemtype}</p>
          <p className="status">
            {transtype === "7" ? "Full payment" : "Half payment"}
          </p>
        </div>
      </Info>
      <Price>
        <p className={`type ${payment_status === "1" ? "paid" : "debt"}`}>
          {payment_status === "1" ? "Paid" : "Debt"}
        </p>
        <p className="date">{`${date[1]} ${date[2]}, ${date[3]}`}</p>
      </Price>
    </ItemContainer>
  );
};
