import { useState } from "react";
import { Tab, TabsContainer } from "./account.styles";
import { Password } from "./Password/Password";
import { StoreProfile } from "./StoreProfile/StoreProfile";

export const Account = () => {
  const [tab, setTab] = useState("profile");

  return (
    <div>
      <TabsContainer>
        <Tab onClick={() => setTab("profile")} clicked={tab === "profile"}>
          Profile
        </Tab>
        <Tab onClick={() => setTab("password")} clicked={tab === "password"}>
          Password
        </Tab>
      </TabsContainer>

      <div>
        {tab === "profile" && <StoreProfile />}
        {tab === "password" && <Password />}
      </div>
    </div>
  );
};
