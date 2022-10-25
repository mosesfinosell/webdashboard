import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductSection } from "./productInput.styles";
import { CustomSelect } from "../../../Form/Select/Select";
import { CustomFormInput } from "../../../Form/Input";
import { SmallButton } from "./productInput.styles";

export const ProductInput = ({ products, handleChange, index }) => {
  const navigate = useNavigate();
  const [max, setMax] = useState(0);
  const [product, setProduct] = useState({
    product_id: "",
    quantity: 0,
    product_name: "",
    price: 0,
  });

  useEffect(() => {
    handleChange(index, product);
  }, [product]);

  const handleProduct = (e) => {
    const productName = e.target.value;
    const selectedProduct = products.find((a) => a.title === productName);

    setProduct({
      ...product,
      product_id: selectedProduct.productID,
      product_name: selectedProduct.title,
      price: parseInt(selectedProduct.price),
    });
  };

  const handleAmount = (e) => {
    const val = e.target.value;

    //if (!val || val <= -1) return;

    setProduct((s) => ({
      ...product,
      quantity: parseInt(e.target.value) || 0,
    }));
  };

  return (
    <ProductSection>
      <CustomSelect
        label="Select Product"
        items={products && products.map((pro) => pro.title)}
        name="product_name"
        onChange={(e) => handleProduct(e)}
        end={
          <SmallButton
            type="button"
            onClick={() => navigate("/business-dashboard/store-inventory/add")}
          >
            <span>Add Product</span>
          </SmallButton>
        }
      />
      <div className="flex-container">
        <CustomFormInput
          label="Price"
          placeholder="No of products"
          type="number"
          onChange={(e) => handleAmount(e)}
          val={product.price}
          disabled={true}
        />
        <CustomFormInput
          label="Amount"
          placeholder="No of products"
          type="number"
          onChange={(e) => handleAmount(e)}
        />
      </div>
    </ProductSection>
  );
};
