import {Container, Minus, Count, Add} from "./styles"


const Index = ({width=216, height=72}) => {
  return (
    <Container className="quantity-controller" width={width} height={height}>
        <Minus>-</Minus>
        <Count>1</Count>
        <Add>+</Add>
    </Container>
  )
}

export default Index