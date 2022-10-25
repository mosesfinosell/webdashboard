import { HomeContainer } from "./businessHome.styles";
import { Actions } from "./Actions/Actions";
import { Metrics } from "./Metrics/Metrics";

export const BusinessHome = () => {
  return (
    <HomeContainer>
      <Actions />
      <Metrics />
    </HomeContainer>
  );
};
