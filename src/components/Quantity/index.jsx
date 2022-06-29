import {useState} from "react"
import {Container, Minus, Count, Add} from "./styles"


const Index = ({width=216, height=72}) => {
  const [count, setCount] = useState(1);

  
  return (
    <Container className="quantity-controller" width={width} height={height}>
        <Minus onClick={()=>count > 1 ? setCount(count - 1) : null}>-</Minus>
        <Count>{count}</Count>
        <Add onClick={()=>setCount(count + 1)}>+</Add>
    </Container>
  )
}

export default Index