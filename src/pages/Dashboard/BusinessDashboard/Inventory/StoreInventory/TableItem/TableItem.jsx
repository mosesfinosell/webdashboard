import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { TableRow, Status } from "./tableItem.styles";

export const TableItem = ({ product, handleModal }) => {
  const { imageurl, title, price, quantity, status } = product;
  return (
    <TableRow>
      <td className="name">
        <div>
          <img src={imageurl} alt="product image" />
          <span>{title}</span>
        </div>
      </td>
      <td className="price">₦{parseInt(price).toLocaleString()}</td>
      <td className="qty">{quantity} Pcs</td>
      <Status available={parseInt(quantity)}>
        {parseInt(quantity) ? "In Stock" : "Out of Stock"}
      </Status>
      <td>
        <button onClick={() => handleModal(product)}>
          <FaEllipsisV />
        </button>
      </td>
    </TableRow>
  );
};
