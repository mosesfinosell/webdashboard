import {Title, Method, Option, OptionsContainer, Left, Right, Error} from "./styles"
import styled from "styled-components"
import {Link} from "react-router-dom"
import {useQuery} from "react-query"
import {useSelector} from "react-redux"
import {Store} from "../../utils/API"
import Spinner from "../../components/Spinner"
import {SpinnerContainer} from "../../components/Spinner/style"

const BankTransfer = () => {
    const businessID = useSelector(state=>state.shoppingCart.checkout.id)
    const store = new Store(businessID)

    const {data, error, isLoading} = useQuery(["business-subaccount", businessID], ()=>store.getBusinessSubAccount())
    console.log("Data", data)
  return (
    <>
        <Top>
            <Title>Pay with Bank Transfer</Title>
            <Link to="/payment">
                <Method>Change payment method</Method>
            </Link>
            
        </Top>
        {isLoading ? 
            <SpinnerContainer>
                <Spinner />
            </SpinnerContainer>
            : 
            (data.data.account.length > 0 ?
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
            :
            <Error>
                <p>Couldn't find business account details.</p>
            </Error>)
        }
        
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