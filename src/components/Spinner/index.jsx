import {Spinner,SpinnerContainer} from "./style"

const Index = ({ size = 8, border = 1, color = "#D6AA1B" }) => {
  return (
    // <SpinnerContainer>
    <Spinner size={size} color={color} border={border}></Spinner>
    //</SpinnerContainer>
  );
};

export default Index