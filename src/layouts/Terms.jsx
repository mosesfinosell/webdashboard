
import { Text } from "@chakra-ui/react";
import "./home.css";

function Terms() {
  
  return (
      <section className="terms">
        <div className="terms-div">
          <Text className="terms-text">1. Terms and Conditions</Text>
          <Text className="terms-para">
            Please be aware that the Website Terms and Conditions contained on
            this webpage will apply to your access and use of every page on this
            website. By using this Website, you expressly agree to be bound by
            each and every one of these Terms.
            <br />{" "}
            <Text className="terms-paras">
              BEFORE AGREEING TO BE BOUND BY THE TERMS OF THE AGREEMENT, PLEASE
              CAREFULLY READ THE TERMS.
            </Text>
          </Text>
        </div>
        <div className="terms-2">
          <Text className="terms-text">
            2. Description of Finosell escrow service
          </Text>
          <Text className="terms-para">
            The goal of FINOSELL ESCROW SERVICE is to reduce fraud, “What I
            ordered VS What I got” by acting as a trusted third-party that,
            through an escrow agreement, collects, holds, and distributes funds
            only when both Buyers and Sellers are satisfied with the service
            delivered and rendered.
            <br />{" "}
            <Text className="terms-paras">
              Finosell Escrow Service operates as follows:
            </Text>
          </Text>
          <ul className="list">
            <li className="ease">
              <span>Buyer initiates a transaction:</span> The buyer searches for
              a vendor on the Finosell App, initiates transaction using the
              Finosell Escrow service feature.
            </li>
            <li className="ease">
              <span>Seller and Buyer agree to terms:</span> Either party can set
              the terms of agreements including the delivery date and time.
              However, both required parties must agree to the terms of the
              transaction before payment is made.
            </li>
            <li className="ease">
              <span>Buyer pays Finosell:</span> The Buyer makes payment using
              any of the approved payment options. Finosell verifies the
              payment, the Seller and buyer is notified that funds have been
              secured 'In Escrow'.
            </li>
            <li className="ease">
              <span>The Seller delivers the product to the Buyer:</span> Upon
              payment verification, the Seller is authorised to send the product
              and submit delivery details.
            </li>
            <li className="ease">
              <span>Buyer receives product:</span> After receiving the
              merchandise, the Buyer has 24hours to examine the product and
              decide whether to accept or reject it.{" "}
            </li>
            <li className="ease">
              <span>Seller receives payment from Finosell:</span> Finosell
              releases the funds from the Escrow account to the Seller. This
              completes the transaction safely and securely.
            </li>
            <li className="ease">
              <span>Seller doesn't send delivery details:</span> If Finosell
              does not receive the notice of delivery or delivery details from
              Seller within…………….. calendar days of the purchase. Finosell
              refunds the Buyer's payment (excluding escrow charges fees).
            </li>
            <li className="ease">
              <span>Buyer isn't satisfied with the product:</span> Upon receipt
              of the product, the Buyer is expected to accept or reject the
              product in 24 hours. Upon rejection of the items, Buyer must
              notify Finosell of its rejection and reasons for rejecting the
              items. Returns must be made on the same day as the rejection
              notification.
            </li>
            <li className="ease">
              <span>Seller is at fault:</span> sellers take responsibility for
              delivery when they are at fault and the item is sent to the seller
              for either a replacement, an adjustment or a refund.
            </li>
            <li className="ease">
              <span>Buyer is at fault:</span> Buyers must take responsibility
              for deliveries when they are at fault. The seller is notified, and
              If Seller notifies Finosell of its non-acceptance of any returned
              items according to its return policy no refund is made to the
              buyer.{" "}
            </li>
          </ul>
          <Text className="terms-para">
            Finosell retains the escrow funds pending resolution of the dispute
            or take other action as authorized.
          </Text>
        </div>
        <div className="terms-2">
          <Text className="terms-text">3. Sellers' obligations</Text>

          <ul className="list">
            <li className="ease">
              Sellers must specify the account payments for Transactions are to
              be paid.
            </li>
            <li className="ease">
              Sellers are required to deliver exactly the same items displayed
              on its Finosell website page directly to the respective Buyer (or
              Buyers), at the address specified by the Buyer using the Finosell
              App, and on the terms and conditions set forth in the terms of
              agreement.
            </li>
            <li className="ease">
              eller shall send Finosell a notice when item has been sent.
            </li>
            <li className="ease">
              Refund policies must be included during the terms of agreement
              with buyers
            </li>
          </ul>
        </div>
        <div className="terms-2">
          <Text className="terms-text">4. Buyers' obligations</Text>

          <ul className="list">
            <li className="ease">
              Buyer must make payment via any of the payment options listed on
              the Finosell App
            </li>
            <li className="ease">
              Buyers are always advised to read the terms of agreement including
              refund policy before initiating transaction
            </li>
            <li className="ease">
              Buyers are required to give concise delivery details
            </li>
            <li className="ease">
              Buyer is expected to accept or reject the product within 24 hours
              of receiving the product. In the event of rejection, the buyer is
              to send FinoSell a rejection notice, reason and item on the day of
              notification.
            </li>
          </ul>
        </div>
        <div className="terms-2">
          <Text className="terms-text">5. How are disputes resolved?</Text>
          <Text className="terms-para">
            During the process of initiating a transaction on the Finosell App,
            users are prompted to determine how disputes or misunderstandings
            will be resolved during the transaction. When a dispute is initiated
            during a transaction, the funds will remain in the Finosell escrow
            account until the parties are able to resolve the dispute. Finosell
            users have access to the following dispute resolution methods:
          </Text>
          <ul className="list">
            <li className="resolution">A Mutual resolution</li>
          </ul>
          <Text className="terms-para">
            If the user selects this option when initiating a transaction, in
            the case of dispute, the transaction is considered "In Dispute" and
            funds are locked until both parties agree and mark the transaction
            as completed. If both parties agree to cancel the transaction, the
            buyer gets paid (excluding escrow fee).
          </Text>
          <ul className="list">
            <li className="resolution">Finosell Mediator</li>
          </ul>
          <Text className="terms-para">
            Third party alternative dispute resolution procedures may be
            required for certain transactions. However, this option may be made
            available (at the discretion of Finosell) only for transactions
            above a stated value threshold.
          </Text>
          <Text className="terms-para">
            If users agree to this option when initiating a transaction, should
            the event of a dispute arise, if the transaction is in the “In
            Dispute” state, the details of the transaction will be forwarded to
            a neutral third party recommended or selected by Finosell. Such
            neutral third parties include alternate dispute resolution
            officials, licensed by a professional body in Nigeria such as LCA
            and the Institute of Chartered Mediators. The fees payable to
            mediators would depend on several factors, including the complexity
            and technicality of the dispute, the time involved in settling the
            dispute as well as the number of mediators with the level of
            experience to handle the dispute in relation to that subject matter
            within the relevant jurisdiction. Mediator’s fees will be borne by
            the transacting parties and are negotiated between the parties and
            mediator at their discretion. Once an agreement has been reached by
            the parties, the Terms of Settlement are reduced into writing and
            this constitutes a binding and enforceable contract. Once this is
            achieved, the transaction funds are released according to this
            decision, after which the transaction is closed.
          </Text>
          <Text className="terms-para">
            While the transaction is in the “In Dispute” state, the transaction
            funds will remain securely held in the transactional escrow account.
          </Text>
        </div>
        <div className="terms-2">
          <Text className="terms-text">6. Cancelling an order</Text>
          <Text className="terms-para">
            Finosell may cancel an order if any user fails to agree on the
            terms, or if the seller does not deliver after 3 days from the due
            delivery date.
          </Text>
          <Text className="terms-pard">
            Buyers can't cancel an order after agreeing to the terms and
            conditions of a sale and payments have been made OR Buyers can only
            get 70% of payment made after cancelling an order.
          </Text>
        </div>
        <div className="terms-2" style={{ paddingBottom: "9rem" }}>
          <Text className="terms-text">7. Transaction Chain</Text>
          <ul className="list">
            <li className="resolution">STATUS is PENDING</li>
          </ul>
          <Text className="terms-para">Buyer can still cancel transaction</Text>
          <Text className="terms-para">
            {" "}
            The money leaves the account of the buyer
          </Text>
          <ul className="list">
            <li className="resolution"> STATUS becomes - TAKEN</li>
          </ul>
          <Text className="terms-para">
            {" "}
            Seller to accept the escrow transaction(seller views the
            transaction)
          </Text>
          <Text className="terms-para"> No one can cancel the transaction</Text>

          <ul className="list">
            <li className="resolution"> STATUS becomes -DECLINED/CANCELLED</li>
          </ul>
          <Text className="terms-para">
            {" "}
            The money return money to the account of the buyer
          </Text>

          <ul className="list">
            <li className="resolution"> STATUS is SENT</li>
          </ul>
          <Text className="terms-para"> Upload images of the product</Text>
          <Text className="terms-para">
            {" "}
            Finosell Agent will be assigned to this transaction
          </Text>
          <Text className="terms-para"> No one can cancel the transaction</Text>

          <ul className="list">
            <li className="resolution"> STATUS is In-Transit</li>
          </ul>
          <Text className="terms-para">
            Finosell Agent will call to confirm from the delivery agent
          </Text>
          <Text className="terms-para">
            {" "}
            Seller will update delivery status
          </Text>
          <Text className="terms-para"> No one will be paid</Text>

          <ul className="list">
            <li className="resolution">Finosell Agent: Delivered</li>
          </ul>
          <Text className="terms-para">24 hours countdown</Text>
          <Text className="terms-para">
            {" "}
            The system will get notification for auto-accept
          </Text>

          <ul className="list">
            <li className="resolution"> STATUS is ACCEPTED</li>
          </ul>
          <Text className="terms-para">
            The money will be released to the seller
          </Text>

          <ul className="list">
            <li className="resolution"> REJECTED</li>
          </ul>
          <Text className="terms-para">
            The buyer will to upload proof of delivered product
          </Text>
          <Text className="terms-para">
            {" "}
            Finosell Agent then verifies and if true, seller will pick the
            product
          </Text>
          <Text className="terms-para">
            Provide pick up PIN, guarantee that the product has been picked up
          </Text>
          <Text className="terms-para">Pick PIN from the SELLER</Text>

          <ul className="list">
            <li className="resolution">COMPLETED</li>
          </ul>
          <Text className="terms-para">Once you input the PIN</Text>
          <Text className="terms-para"> Money goes back to the buyer</Text>

          <ul className="list">
            <li className="resolution">STATUS is RECEIVED</li>
          </ul>
          <Text className="terms-para">Buyer receives product</Text>

          <ul className="list">
            <li className="resolution">STATUS is DELIVERED</li>
          </ul>
          <Text className="terms-para">
            Agent will confirm from the delivery agent
          </Text>
          <Text className="terms-para">Seller delivers product</Text>
        </div>
      </section>
  );
}

export default Terms;
