import { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { FaSearch, FaPlus, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useQuery } from "react-query";
import { BsSortUp } from "react-icons/bs";
import { MdFilterAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Top,
  Field,
  TableContainer,
  TableHead,
  TableFoot,
  Table,
} from "./storeInventory.styles";
import { TableItem } from "./TableItem/TableItem";
import imageurl from "../../../../../assets/purse.png";
import { getStoreInventory, searchProduct } from "../../../../../network/store";
import { Modal } from "../../../../../components/Modal/Modal";
import { ProductDetails } from "./ProductDetails/productDetails";
//...

export function StoreInventory() {
  const navigate = useNavigate();
  const [modal, setModal] = useState({ open: false, data: undefined });
  const [search, setSearch] = useState();
  const { data, error, refetch } = useQuery("store-inventory", () =>
    getStoreInventory()
  );
  const handleModal = (data) => {
    setModal({
      ...modal,
      open: true,
      data,
    });
  };

  const handleSearch = async (e) => {
    if (!e.target.value) return setSearch(undefined);
    const data = await searchProduct(e.target.value);

    setSearch(data.data.products);
    console.log("Search", data.data.products);
  };

  const debouncedInput = useCallback(debounce(handleSearch, 1000), []);

  return (
    <>
      <Container>
        <Top>
          <h1>Store Inventory</h1>

          <div className="top-right">
            <Field>
              <FaSearch />
              <input onChange={(e) => debouncedInput(e)} />
            </Field>
            <button
              onClick={() =>
                navigate("/business-dashboard/store-inventory/add")
              }
            >
              <FaPlus />
              <span>Add</span>
            </button>
          </div>
        </Top>
        <TableContainer>
          <TableHead>
            <h2>All Products</h2>

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
                <th width="400px">Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(search ? search : data)?.map((product, i) => {
                return (
                  <TableItem
                    key={i}
                    product={product}
                    handleModal={handleModal}
                  />
                );
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
      {modal.data && (
        <Modal
          isOpen={modal.open}
          onClose={() => setModal({ ...modal, open: false })}
        >
          <ProductDetails
            details={modal.data}
            handleModal={() => setModal({ ...modal, open: false })}
            refetch={refetch}
          />
        </Modal>
      )}
    </>
  );
}
