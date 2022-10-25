import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { TableRow, Status, Download } from "./tableItem.styles";

export const TableItem = ({ invoice, handleModal }) => {
  const { buyer_name, order_id, createdAt, invoice_status, filePath } = invoice;
  const date = new Date(createdAt).toDateString().split(" ");
  return (
    <TableRow>
      <td className="name">{buyer_name}</td>
      <td className="price">{order_id}</td>
      <td className="date">{`${date[1]} ${date[2]}, ${date[3]}`}</td>
      <Status>{invoice_status}</Status>
      <td>
        <Download target="_blank" href={filePath}>
          Download Invoice
        </Download>
      </td>
    </TableRow>
  );
};
