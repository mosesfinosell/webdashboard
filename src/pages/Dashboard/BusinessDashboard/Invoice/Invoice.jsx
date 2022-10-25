import React from "react";
import { useQuery } from "react-query";
import { getInvoices } from "../../../../network/invoice";
import { FaPlus, FaSearch } from "react-icons/fa";
import { BsSortUp } from "react-icons/bs";
import { MdFilterAlt } from "react-icons/md";
import {
  Container,
  Top,
  Field,
  TableContainer,
  TableHead,
  TableFoot,
  Table,
} from "./invoice.styles";
import { TableItem } from "./TableItem/TableItem";

export const Invoice = () => {
  const invoices = [
    {
      name: "Ridwan Egbeyemi",
      price: 16660,
      date: "Jan 3, 2022",
      status: "Pending",
    },
  ];
  const { data, error } = useQuery("all-invoices", () => getInvoices());

  
  return (
    <Container>
      <Top>
        <h1>Invoicing</h1>

        <div className="top-right">
          {/* <Field>
            <FaSearch />
            <input />
          </Field>
          <button onClick={() => null}>
            <FaPlus />
            <span>Generate Invoice</span>
          </button>
          <button>
            <span>Download Invoice</span>
          </button> */}
        </div>
      </Top>
      <TableContainer>
        <TableHead>
          <h2>All Invoices</h2>

          <div className="actions">
            <button>
              <BsSortUp />
              <span>Sort</span>
            </button>
            <button>
              <MdFilterAlt />
              <span>Filter</span>
            </button>
          </div>
        </TableHead>
        <Table>
          <thead>
            <tr>
              <th width="400px">Customer Name</th>
              <th>Order id</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((invoice, i) => {
                return <TableItem key={i} invoice={invoice} />;
              })}
          </tbody>
        </Table>
        <TableFoot>
          {/* <p className="rows">Rows per page: 7</p>
        <p className="item-count">1-8 of 1240</p>
        <div className="arrows">
          <FaAngleLeft />
          <FaAngleRight />
        </div> */}
        </TableFoot>
      </TableContainer>
    </Container>
  );
};
