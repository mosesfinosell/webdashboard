import {
  Grid,
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  Input,
  Checkbox,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightAddon,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { createStoreLink } from "../../../../ReduxContianer/BussinessRedux/BusinessAction";
import BusinessLayout from "../../../../components/Layout/BusinessLayout";
import { useHistory } from "react-router-dom";
import "../../../Dashboard/Dash.css";
export default function AddUrlPage() {
  const history = useHistory();
  const yellowbtn = useColorModeValue("yellow.500");
  const dispatch = useDispatch();

  const businessInfo = useSelector(
    (state) => state.businessReducer.businessUserInfo
  );
  // const { user } = businessSignIn;
  // const { businessDetails } = user;
  // const { message } = businessDetails;

  const [userId] = useState(businessInfo.user_id);
  const [storeName, setStoreName] = useState("");

  function handleSubmit(e) {
    console.log("PPPEEE");
    e.preventDefault();
    dispatch(createStoreLink(storeName, userId));
    setStoreName("");
  }

  return (
    <BusinessLayout>
      <div className="url-dash">
        <Heading fontSize="38px" className="add-url">Add Url</Heading>
        <div className="url-form">
          <div className="store-form">
            <InputGroup>
              <InputLeftAddon width="20%" h="60px">
                http://
              </InputLeftAddon>
              <Input
                type="name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                width="40%"
                h="60px"
                placeholder="Input your Store Name"
                style={{backgroundColor:'#FAFAFA'}}
              />
              <InputRightAddon className="right-addon" width="22%" h="60px">
                finosell.com
              </InputRightAddon>
            </InputGroup>
          </div>
          <Button
          onClick={()=>history.push('/business/store-page')}
          className="add-store"
            mt={4}
            bg={yellowbtn}
            width="82%"
            h="60px"
            borderRadius="0px 11px 11px 11px"
            type="submit"
            color="white"
            _hover={{ bg: "#1A202C" }}
          >
            Add
          </Button>
        </div>
      </div>
    </BusinessLayout>
  );
}
