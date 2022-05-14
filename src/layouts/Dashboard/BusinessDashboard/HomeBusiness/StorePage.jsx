import React, { useEffect } from "react";
import "./store.css";
import { Text, Image } from "@chakra-ui/react";
import chop from "../../../../assets/chop.svg";
import ofada from "../../../../assets/ofada.svg";
import spag from "../../../../assets/spag.svg";
import asun from "../../../../assets/asun.svg";
import dodo from "../../../../assets/dodo.svg";
import yam from "../../../../assets/yam.svg";
import coconut from "../../../../assets/coconut.svg";
import Logomark from "../../../../assets/Logomark.svg";
import bag from "../../../../assets/bag.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProduct,
  getBusinessStat,
} from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import { Spinner } from "@chakra-ui/react";
function StorePage() {
  let businessId = `1a15f398-89dd-4e02-90c3-a7fe4ca2f806`;
  let seller = `2349044373868`;
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getProduct(businessId));
    dispatch(getBusinessStat(seller));
  }, [businessId, dispatch]);
  const products = useSelector((state) => state.businessReducer.products);
  const loading = useSelector((state) => state.businessReducer.isFetching);
  const businessStat = useSelector(
    (state) => state.businessReducer.businessStat
  );
  return (
    <React.Fragment>
      <div className="store-page">
        <div className="top-store">
          {businessStat?.map((stat) => (
            <div className="chop-left">
              <div>
                <img
                className="business-logo"
                  src={`https://finosell.link/${stat?.imageurl}`}
                  alt="business-logo"
                />
              </div>
              <div className="chop-right">
                {" "}
                <Text className="chef">{stat?.name}</Text>
                <Text color="gray">Location: {stat?.address}</Text>
              </div>
            </div>
          ))}

          <div>
            <input
              type="text"
              name="search"
              placeholder="What are you a shopping for?"
            />
          </div>
          <div className="extreme">
            <div
              style={{
                backgroundColor: "#FDF9ED",
                borderRadius: "0px 11px 11px 11px",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                height: "2rem",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div
              style={{
                backgroundColor: "#FDF9ED",
                borderRadius: "0px 11px 11px 11px",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                height: "2rem",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  background: "#FDF9ED",
                  borderRadius: "0px 11px 11px 11px",
                }}
              />
            </div>
            <div
              style={{
                backgroundColor: "#FDF9ED",
                borderRadius: "0px 11px 11px 11px",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                height: "2rem",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{
                  background: "#FDF9ED",
                  borderRadius: "0px 11px 11px 11px",
                }}
              />
            </div>
            <div className="cart" style={{ cursor: "pointer" }}>
              <Image src={bag} alt="bag" />
              <Text className="cart-text">Cart</Text>
            </div>
          </div>
        </div>
        <div className="prod-section">
          {loading ? (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
              }}
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="yellow.200"
                color="yellow.500"
                size="xl"
              />
            </div>
          ) : products.length === 0 ? (
            <div>
              <h1
                style={{
                  textAlign: "center",
                  paddingTop: "18px",
                  color: "#D6AA1B",
                  fontWeight: "700",
                  paddingBottom: "18px",
                }}
              >
                There are no products
              </h1>
            </div>
          ) : (
            products?.map((product) => (
              <div
                key={product?._id}
                className="food-desc"
                onClick={() => history.push("/business/store-page/cart")}
              >
                {" "}
                <img
                  src={`https://finosell.link/${product?.imageurl}`}
                  alt={product?.title}
                  className="food-img"
                />
                <Text color="gray">{product?.title}</Text>
                <Text className="funds">₦{product?.price}</Text>
              </div>
            ))
          )}

          {/* <div className="food-desc">
            {" "}
            <img src={spag} alt="food" />
            <Text color="gray">Spaghetti Stirfry</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={asun} alt="food" />
            <Text color="gray">Asun</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={yam} alt="food" />
            <Text color="gray">Fried Yam</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={coconut} alt="food" />
            <Text color="gray">Coconut Rice</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>

          <div className="food-desc">
            {" "}
            <img src={ofada} alt="food" />
            <Text color="gray">Ofada Rice and Sauce</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={spag} alt="food" />
            <Text color="gray">Spaghetti Stirfry</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={asun} alt="food" />
            <Text color="gray">Asun</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={dodo} alt="food" />
            <Text color="gray">Jollof Beans</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={yam} alt="food" />
            <Text color="gray">Fried Yam</Text>
            <Text className="funds">₦2,700.00</Text>
          </div>
          <div className="food-desc">
            {" "}
            <img src={coconut} alt="food" />
            <Text color="gray">Coconut Rice</Text>
            <Text className="funds">₦2,700.00</Text>
          </div> */}
        </div>
        <div className="store-base">
          <Image src={Logomark} alt="logo" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default StorePage;
