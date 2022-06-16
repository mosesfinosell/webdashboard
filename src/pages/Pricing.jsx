import { useState } from "react";

import "./home.css";

import { Text, } from "@chakra-ui/react";

function Pricing() {
  const [products, setProducts] = useState(false);
  return (
    <>
      <section className="terms">
        <div className="">
          {" "}
          <Text className="terms-text">Pricing</Text>
          <Text className="terms-para">
            We follow a transparent fee structure that allows us to provide the
            best service to our customers. When your monthly revenue is above
            100,000 Naira, we charge you the following fee:
          </Text>
        </div>
      </section>
      <table>
        <thead>
          <tr>
            <th scope="col">MONTHLY TURNOVER</th>
            <th scope="col">SERVICE CHARGE</th>
            <th scope="col">PERCENTAGE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Account" className="col-one">
              100k
            </td>
            <td data-label="Due Date" className="col-two">
              0
            </td>
            <td data-label="Amount" className="col-two">
              0%
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Account" className="col-one">
              100k - 500k
            </td>
            <td data-label="Due Date" className="col-two">
              3000 fixed
            </td>
            <td data-label="Amount" className="col-two">
              0.1 %
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Account" className="col-one">
              500k - 5m
            </td>
            <td data-label="Due Date" className="col-two">
              5000 fixed
            </td>
            <td data-label="Amount" className="col-two">
              0.1% (5m)
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount" className="col-one">
              5m - 10m
            </td>
            <td data-label="Due Date" className="col-two">
              10000
            </td>
            <td data-label="Amount" className="col-two">
              0.1% (10m)
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount" className="col-one">
              10m - 20m
            </td>
            <td data-label="Due Date" className="col-two">
              20000
            </td>
            <td data-label="Amount" className="col-two">
              0.1% (20m)
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Pricing;
