import React from 'react'
import { Text } from '@chakra-ui/react';
import './escrow.css';
import styled from "styled-components";
// import './privacy.css'

export default function Escrow() {
  return (
    <Article>
      <h3 className="escrow-text__h1 ">Paysecure service</h3>
      <Text className="term__para">
        The goal of FINOSELL Paysecure SERVICE is to reduce fraud, “What I
        ordered VS What I got” by acting as a trusted third-party that, through
        an Paysecure agreement, collects, holds, and distributes funds only when
        both Buyers and Sellers are satisfied with the service delivered and
        rendered.
      </Text>
      <Text className="term__para">
        Finosell Paysecure Service operates as follows:
      </Text>
      <ul className="list">
        <li className="ease">
          <span>Buyer initiates a transaction:</span> The buyer searches for a
          vendor on the Finosell App, initiates transaction using the Finosell
          Paysecure service feature.
        </li>
        <li className="ease">
          <span>Seller and Buyer agree to terms:</span> Either party can set the
          terms of agreements including the delivery date and time. However,
          both required parties must agree to the terms of the transaction
          before payment is made.
        </li>
        <li className="ease">
          <span>Buyer pays Finosell:</span> The Buyer makes payment using any of
          the approved payment options. Finosell verifies the payment, the
          Seller and buyer is notified that funds have been secured 'In
          Paysecure'.
        </li>
        <li className="ease">
          <span>The Seller delivers the product to the Buyer:</span> Upon
          payment verification, the Seller is authorised to send the product and
          submit delivery details.
        </li>
        <li className="ease">
          <span>Buyer receives product:</span> After receiving the merchandise,
          the Buyer has 24hours to examine the product and decide whether to
          accept or reject it.{" "}
        </li>
        <li className="ease">
          <span>Seller receives payment from Finosell:</span> Finosell releases
          the funds from the Paysecure account to the Seller. This completes the
          transaction safely and securely.
        </li>
        <li className="ease">
          <span>Seller doesn't send delivery details:</span> If Finosell does
          not receive the notice of delivery or delivery details from Seller
          within…………….. calendar days of the purchase. Finosell refunds the
          Buyer's payment (excluding Paysecure charges fees).
        </li>
        <li className="ease">
          <span>Buyer isn't satisfied with the product:</span> Upon receipt of
          the product, the Buyer is expected to accept or reject the product in
          24 hours. Upon rejection of the items, Buyer must notify Finosell of
          its rejection and reasons for rejecting the items. Returns must be
          made on the same day as the rejection notification.
        </li>
        <li className="ease">
          <span>Seller is at fault:</span> sellers take responsibility for
          delivery when they are at fault and the item is sent to the seller for
          either a replacement, an adjustment or a refund.
        </li>
        <li className="ease">
          <span>Buyer is at fault:</span> Buyers must take responsibility for
          deliveries when they are at fault. The seller is notified, and If
          Seller notifies Finosell of its non-acceptance of any returned items
          according to its return policy no refund is made to the buyer.{" "}
        </li>
      </ul>
      <Text className="terms-para">
        Finosell retains the Paysecure funds pending resolution of the dispute
        or take other action as authorized.
      </Text>
    </Article>
  );
}

const Article = styled.article`
  .term__para {
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 500;
    color: var(--finosellGrayPrimary);
  }
`;
