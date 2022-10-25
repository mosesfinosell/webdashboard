import { useState } from "react";
import { FaTimes, FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
  DetailsContainer,
  ImageContainer,
  Details,
  Edit,
} from "./productDetails.styles";
import { deleteProduct } from "../../../../../../network/store";
import { CustomButton } from "../../../../../../components/Button/button.styles";
import toast from "react-hot-toast";

export const ProductDetails = ({ details, handleModal, refetch }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    imageurl,
    description,
    title,
    price,
    quantity,
    size,
    color,
    productID,
  } = details;

  const handleDelete = async () => {
    try {
      setLoading(true);
      const res = await deleteProduct(productID);
      handleModal();
      refetch();
    } catch (err) {
      toast.error("Couldn't delete product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DetailsContainer>
      <FaTimes className="x" onClick={() => handleModal()} />
      <ImageContainer>
        <img src={imageurl} alt={description} />
      </ImageContainer>
      <Details>
        <div className="values">
          <p>
            <span className="values__name">Name</span>
            <span className="values__value">{title}</span>
          </p>
          <p>
            <span className="values__name">Price</span>
            <span className="values__value">
              ₦{parseInt(price).toLocaleString()}
            </span>
          </p>
          <p>
            <span className="values__name">Quantity</span>
            <span className="values__value">{quantity} Pcs</span>
          </p>
          <p>
            <span className="values__name">Sizes</span>
            <span className="values__value">{size}</span>
          </p>
          <p>
            <span className="values__name">Colors</span>
            <span className="values__value">{color}</span>
          </p>
          <p>
            <span className="values__name">Product ID</span>
            <span className="values__value">{productID}</span>
          </p>
          <p>
            <span className="values__name">Status</span>
            <span
              className={`values__value ${
                parseInt(quantity) ? "available" : "unavailable"
              }`}
            >
              {parseInt(quantity) ? "Available" : "Unavailable"}
            </span>
          </p>
        </div>
        <div className="buttons">
          <Edit onClick={() => navigate(`edit/${productID}`)}>
            <span className="button-content">
              <FaPen />
              Edit Product
            </span>
          </Edit>
          <CustomButton disabled={loading} onClick={() => handleDelete()}>
            <span className="button-content">
              <FaTimes />
              Remove Product
            </span>
          </CustomButton>
        </div>
      </Details>
    </DetailsContainer>
  );
};
