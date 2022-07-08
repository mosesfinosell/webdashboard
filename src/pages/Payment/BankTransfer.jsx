import {Title, Method, Option, OptionsContainer, Left, Right} from "./styles"
import styled from "styled-components"
import {Link} from "react-router-dom"

const BankTransfer = () => {
  return (
    <>
        <Top>
            <Title>Pay with Bank Transfer</Title>
            <Link to="/payment">
                <Method>Change payment method</Method>
            </Link>
            
        </Top>
        <OptionsContainer>
            <Option>
                <Left>Amount</Left>
                <Right>₦</Right>
            </Option>
            <Option>
                <Left>Account Number</Left>
                <Right></Right>
            </Option>
            <Option>
                <Left>Bank Name</Left>
                <Right></Right>
            </Option>
            <Option>
                <Left>Beneficiary Name</Left>
                <Right></Right>
            </Option>
        </OptionsContainer>
    </>
  )
}

export default BankTransfer

const Top = styled.div`
    text-align : center;
    margin-bottom: ${63 * 0.063}rem;

    ${Title}{
        margin-bottom: ${17 * 0.063}rem;
    }
`