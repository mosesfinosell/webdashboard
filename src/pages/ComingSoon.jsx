import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import styled from "styled-components"
import {AppContainer, borderRadius, PrimarySection, PrimaryTitle} from "../Styles"

const ComingSoon = () => {
  return (
    <>
        <Header />
        <AppContainer>
            <ComingSoonSection>
              <Info>
                <PrimaryTitle>We're coming soon.</PrimaryTitle>
              </Info>
              <CollectEmail>
              </CollectEmail>
            </ComingSoonSection>
        </AppContainer>
        <Footer />
    </>
  )
}

export default ComingSoon

const ComingSoonSection = styled(PrimarySection)`
  ${borderRadius};
  background: #d6aa1b;
  margin: auto;
  width: 100%;
  display: flex;
  padding: 3rem 1rem;

`

const Info = styled.div`

`
const CollectEmail = styled.div`

`