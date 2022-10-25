import React from "react";
import { ItemContainer, Info, Price } from "./item.styles";
import { OrderBag } from "../../../../../../../components/SVG/OrderBag";
import { date } from "yup";

export const Item = ({ order, handleModal }) => {
  const { title, order_status, amount, createdAt } = order;
  const date = new Date(createdAt).toDateString().split(" ");
  return (
    <ItemContainer onClick={() => handleModal()}>
      <Info>
        <div className="icon">
          <OrderBag />
        </div>
        <div className="name-container">
          <p className="name">{title}</p>
          <p className="status">{order_status}</p>
        </div>
      </Info>
      <Price>
        <p className="price">₦{parseInt(amount).toLocaleString()}</p>
        <p className="date">{`${date[1]} ${date[2]}, ${date[3]}`}</p>
      </Price>
    </ItemContainer>
  );
};
