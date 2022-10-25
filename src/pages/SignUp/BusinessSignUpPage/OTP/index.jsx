import { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { CustomHeader } from "../../../../components/Form";
import { Countdown } from "../../../../components/Countdown/Countdown";
import { InputContainer, Input, Hidden, Resend, Change } from "./styles";
import { getUser } from "../../../../utils/helper";

import { phoneOTP, confirmOTP } from "../../../../network/auth";

const OTP = () => {
  const navigate = useNavigate();
  const hidden = useRef(null);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { verification, email, tel } = useSelector(
    (state) => state.businessSignup
  );

  const user = getUser();

  useEffect(() => {
    if (!user) {
      navigate("/business-login");
      toast.error("Please signup or login");
    }
  }, []);

  const formattedEmail = email
    ?.split("@")
    .map((part, i) => {
      if (i === 0) {
        return part.replace(
          /(.{1}).*(.{1})/,
          `$1${"*".repeat(part.length - 2)}$2`
        );
      }
      return part;
    })
    .join("@");

  const send = async () => {
    try {
      const res = await phoneOTP({
        user: user.phone_number,
      });
      toast.success("OTP sent successfully");
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  const handleOTPCheck = async (code) => {
    setLoading(true);
    const data = {
      user: user.phone_number,
      code,
    };
    try {
      const res = await confirmOTP(data);
      let user = JSON.parse(localStorage.getItem("user"));
      user.message.phone_status = "Verified";
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/download-app");
    } catch (err) {
      console.log(err.response);

      toast.error("An error occurred while verifying your OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = () => {
    hidden.current.focus();
  };
  const handleChange = (e) => {
    if (!loading && (otp.length < 4 || e.key === "Backspace")) {
      setOtp(e.target.value);
    }
    if (e.target.value.length === 4) {
      handleOTPCheck(e.target.value);
    }
  };
  return (
    <>
      {user && (
        <>
          <CustomHeader
            title="Enter OTP"
            text={`Enter the OTP sent to your phone number ending with ${user.phone_number.substring(
              user.phone_number.length - 4
            )}`}
          />
          <InputContainer onClick={handleFocus}>
            <Input>
              <input type="text" readOnly value={otp[0] ? otp[0] : ""} />
            </Input>
            <Input>
              <input type="text" readOnly value={otp[1] ? otp[1] : ""} />
            </Input>
            <Input>
              <input type="text" readOnly value={otp[2] ? otp[2] : ""} />
            </Input>
            <Input>
              <input type="text" readOnly value={otp[3] ? otp[3] : ""} />
            </Input>
          </InputContainer>

          <Countdown resend={send} />
          <Hidden
            className="hidden"
            ref={hidden}
            type="text"
            maxLength="4"
            onKeyUp={(e) => handleChange(e)}
          />
        </>
      )}
    </>
  );
};

export default OTP;
