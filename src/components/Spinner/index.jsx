import {Spinner,SpinnerContainer} from "./style"

const Index = ({size=80, border=10, color="#D6AA1B"}) => {

    return (
			// <SpinnerContainer>
				<Spinner size={size} color={color} border={border}></Spinner>
			// </SpinnerContainer>
		);
}

export default Index