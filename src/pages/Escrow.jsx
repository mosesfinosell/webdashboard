import React from 'react'
import { Text } from '@chakra-ui/react';
import './escrow.css';
// import './privacy.css'

export default function Escrow() {
  return (
		<article>
			<h3 className='escrow-text__h1 '>Escrow service</h3>
			<Text className='term__para'>
				The goal of FINOSELL ESCROW SERVICE is to reduce fraud, “What I ordered
				VS What I got” by acting as a trusted third-party that, through an
				escrow agreement, collects, holds, and distributes funds only when both
				Buyers and Sellers are satisfied with the service delivered and
				rendered.
				<br />{' '}
				<Text className='term__para'>
					Finosell Escrow Service operates as follows:
				</Text>
			</Text>
			<ul className='list'>
				<li className='ease'>
					<span>Buyer initiates a transaction:</span> The buyer searches for a
					vendor on the Finosell App, initiates transaction using the Finosell
					Escrow service feature.
				</li>
				<li className='ease'>
					<span>Seller and Buyer agree to terms:</span> Either party can set the
					terms of agreements including the delivery date and time. However,
					both required parties must agree to the terms of the transaction
					before payment is made.
				</li>
				<li className='ease'>
					<span>Buyer pays Finosell:</span> The Buyer makes payment using any of
					the approved payment options. Finosell verifies the payment, the
					Seller and buyer is notified that funds have been secured 'In Escrow'.
				</li>
				<li className='ease'>
					<span>The Seller delivers the product to the Buyer:</span> Upon
					payment verification, the Seller is authorised to send the product and
					submit delivery details.
				</li>
				<li className='ease'>
					<span>Buyer receives product:</span> After receiving the merchandise,
					the Buyer has 24hours to examine the product and decide whether to
					accept or reject it.{' '}
				</li>
				<li className='ease'>
					<span>Seller receives payment from Finosell:</span> Finosell releases
					the funds from the Escrow account to the Seller. This completes the
					transaction safely and securely.
				</li>
				<li className='ease'>
					<span>Seller doesn't send delivery details:</span> If Finosell does
					not receive the notice of delivery or delivery details from Seller
					within…………….. calendar days of the purchase. Finosell refunds the
					Buyer's payment (excluding escrow charges fees).
				</li>
				<li className='ease'>
					<span>Buyer isn't satisfied with the product:</span> Upon receipt of
					the product, the Buyer is expected to accept or reject the product in
					24 hours. Upon rejection of the items, Buyer must notify Finosell of
					its rejection and reasons for rejecting the items. Returns must be
					made on the same day as the rejection notification.
				</li>
				<li className='ease'>
					<span>Seller is at fault:</span> sellers take responsibility for
					delivery when they are at fault and the item is sent to the seller for
					either a replacement, an adjustment or a refund.
				</li>
				<li className='ease'>
					<span>Buyer is at fault:</span> Buyers must take responsibility for
					deliveries when they are at fault. The seller is notified, and If
					Seller notifies Finosell of its non-acceptance of any returned items
					according to its return policy no refund is made to the buyer.{' '}
				</li>
			</ul>
			<Text className='terms-para'>
				Finosell retains the escrow funds pending resolution of the dispute or
				take other action as authorized.
			</Text>
		</article>
	);
}
