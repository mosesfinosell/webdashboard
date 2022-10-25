import React from "react";
import { useQuery } from "react-query";
import { FaPlus } from "react-icons/fa";
import { AddProductButton, Container } from "./addProduct.styles";
import { ProductInput } from "./ProductInput/ProductInput";
import { getStoreInventory } from "../../../network/store";

export const AddProduct = ({ cart, setCart, setTotal }) => {
  const { data, error, refetch } = useQuery("store-inventory", () =>
    getStoreInventory()
  );
  const handleProductChange = (i, product) => {
    cart[i] = product;
    let reduced = cart.reduce((acc, cur) => {
      if (cur.price && cur.quantity) {
        return acc + cur.quantity * cur.price;
      }
      return acc;
    }, 0);

    if (setTotal) setTotal(reduced);
  };

  return (
    <Container>
      <h4>Products</h4>
      {cart.map((a, i) => (
        <ProductInput
          key={i}
          products={data}
          handleChange={handleProductChange}
          index={i}
        />
      ))}
      <AddProductButton
        type="button"
        onClick={() =>
          setCart([
            ...cart,
            {
              product_id: "",
              quantity: 0,
              product_name: "",
              price: 0,
            },
          ])
        }
      >
        <FaPlus />
        <span>Add Product</span>
      </AddProductButton>
    </Container>
  );
};
