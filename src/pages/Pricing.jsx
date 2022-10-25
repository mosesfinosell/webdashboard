import "./home.css";
import {useState, useEffect} from "react"
import { Text, } from "@chakra-ui/react";
import {PrimarySection, borderRadius, PrimaryTitle, PrimaryParagraph} from "../Styles"
import styled from "styled-components"

function Pricing() {
  const [turnOver, setTurnOver] = useState(0);
  const [charge, setCharge] = useState(0)

  const handleChargeCalculation = (turnOver, setCharge)=>{
    if(turnOver.toString() === "NaN" || turnOver < 100000){
      setCharge(0)
    }else if(turnOver < 500000){
      setCharge(3000)
    }else if(turnOver < 5000000){
      setCharge(5000)
    }else if (turnOver < 10000000){
      setCharge(10000)
    }else if (turnOver < 20000000){
      setCharge(20000)
    }else{
      setCharge(parseFloat((turnOver * 0.001).toFixed(3)))
    }
  }

  useEffect(()=>{
    handleChargeCalculation(parseInt(turnOver), setCharge)

    
  }, [turnOver, setTurnOver])

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
      <Table>
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
      </Table>
      <CalculatorSection>
        <PrimaryTitle>Calculate our charges</PrimaryTitle>
        <Calculator>
          <PrimaryParagraph>
            Please enter your monthly turnover
          </PrimaryParagraph>
          <div className="turn-over">
            <p className="ngn">NGN</p>
            <input
              placeholder="0"
              min={0}
              value={turnOver}
              onChange={(e) => setTurnOver(e.target.value)}
              type="number"
            />
          </div>
          <p className="total">Total charges: NGN {charge.toLocaleString()}</p>
        </Calculator>
      </CalculatorSection>
    </>
  );
}

export default Pricing;

const CalculatorSection = styled(PrimarySection)`
  ${PrimaryTitle}{
    margin-bottom: ${20 * 0.063}rem;
    color: #273B4A;
    text-align: left;
    font-size: 2.2rem;
  }

  @media only screen and (min-width: 768px){
    ${PrimaryTitle}{
      margin-bottom: ${30 * 0.063}rem;
    }
  }
`

const Calculator = styled.div`
  border-radius: ${borderRadius};
  background: #d6aa1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.5rem 2.5rem;
  ${PrimaryParagraph} {
    color: #fff;
    margin-bottom: 3rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
  .turn-over {
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    padding: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #273b4a;
    width: 100%;

    @media only screen and (min-width: 800px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
  .ngn {
    margin-right: 1rem;
  }

  input {
    background: none;
    outline: none;
    border: none;
    width: 90%;
    &::placeholder {
      color: #505050;
    }
  }
  .total {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    padding: 4.5rem 3.5rem;
    margin-bottom: 9rem;
    .turn-over {
      width: unset;
    }

    input {
      width: unset;
    }
  }
`;
const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  width: 90%;
  table-layout: fixed;
  margin-top: 6rem;
  margin-bottom: 17rem;
  box-shadow: 0px 1px 15px -2px rgba(0, 0, 0, 20%);
  @media only screen and (min-width: 768px) {
    height: 50.3rem;
    margin: 0 auto;
    margin-top: 6rem;
    margin-bottom: 17rem;
  }

  thead {
    display: none;

    @media only screen and (min-width: 600px) {
      display: table-header-group;
    }
  }

  th {
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background-color: #273b4a;
    color: #fff;
    padding: 2rem 0;
    border-right: 4px solid #f5f5f5;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
  }

  th,
  td {
    padding: 1.8rem;
    text-align: center;
    border: 4px solid #f5f5f5;
  }
  /* @media only screen and (min-width: 600px) {
    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  } */
`;