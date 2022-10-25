import React, { useState, useCallback } from "react";
import { useQuery } from "react-query";
import debounce from "lodash.debounce";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaTimes,
  FaClipboard,
} from "react-icons/fa";
import { Modal } from "../../../../components/Modal/Modal";
import {
  StoreLinkContainer,
  StoreLinkFieldContainer,
  StoreLinkField,
  ModalContent,
} from "./storeLink.styles";
import { CustomButton } from "../../../../components/Button/button.styles";
import {
  Spinner,
  SpinnerContainer,
} from "../../../../components/Spinner/style";
import {
  checkDomainAvailability,
  createStoreLink,
  checkForStorelink,
} from "../../../../network/store";
import toast from "react-hot-toast";

export const StoreLink = () => {
  const [link, setLink] = useState("");
  const [modal, setModal] = useState(false);
  const [taken, setTaken] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const { data, error, isLoading, refetch } = useQuery(
    ["store-link"],
    () => checkForStorelink(),
    {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
      retry: false,
    }
  );

  const debouncedCheck = useCallback(
    debounce(async (val) => {
      try {
        const res = await checkDomainAvailability(val);

        setTaken(true);
      } catch (err) {
        setTaken(false);
        console.log(err);
      }
    }, 500),
    []
  );

  const handleChange = (e) => {
    setLink(e.target.value.toLowerCase().replace(/[\W _]/g, ""));
    debouncedCheck(e.target.value.toLowerCase());
  };

  const registerStorelink = async () => {
    try {
      setLoading(true);
      const res = await createStoreLink(link);
      
      console.log(res);
      refetch();
    } catch (err) {
      
      toast.error();
    } finally {
      setLoading(false);
      setModal(false);
    }
  };

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner size={18} />
      </SpinnerContainer>
    );
  }
  if (error) {
    return (
      <>
        <StoreLinkContainer>
          <h1>Add a URL</h1>
          <StoreLinkFieldContainer>
            <label>Add a name for your store link</label>
            <StoreLinkField>
              <p>https://</p>
              <input
                placeholder="Add a URL"
                value={link}
                onChange={(e) => handleChange(e)}
              />
              <p>.finosell.shop</p>
              {typeof taken !== "undefined" && (
                <>
                  {!taken ? (
                    <p className="message">
                      <FaCheckCircle className="pass" />
                      <span>URL available</span>
                    </p>
                  ) : (
                    <p className="message">
                      <FaTimesCircle className="error" />
                      <span>URL unavailable</span>
                    </p>
                  )}
                </>
              )}
            </StoreLinkField>

            <CustomButton
              width={"65rem"}
              height={"9rem"}
              disabled={taken || typeof taken === "undefined"}
              margin={"0"}
              onClick={() => setModal(!modal)}
            >
              <span>Add</span>
            </CustomButton>
          </StoreLinkFieldContainer>
        </StoreLinkContainer>
        <Modal isOpen={modal} onClose={() => setModal(!modal)}>
          <ModalContent>
            <FaTimes onClick={() => setModal(!modal)} />
            <h1>Confirm storlink name</h1>
            <h4>Please note that the storelink name cannot be changed</h4>
            <p>{`https://${link}.finosell.shop`}</p>
            <CustomButton
              disabled={loading}
              onClick={() => registerStorelink()}
            >
              <span>Continue</span>
            </CustomButton>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <>
      <StoreLinkContainer>
        <h1>Store URL</h1>
        <StoreLinkFieldContainer>
          <label>Copy your store link</label>
          <StoreLinkField overflow="hidden">
            <input
              className="copy"
              disabled={true}
              value={`https://${data.result.subdomain}.finosell.shop`}
            />
            <button
              onClick={() =>
                navigator.clipboard
                  .writeText(`https://${data.result.subdomain}.finosell.shop`)
                  .then(() => {
                    const text = document.getElementById("copy-text");
                    text.innerText = "copied!";
                    setTimeout(() => {
                      text.innerText = "copy";
                    }, 4000);
                  })
              }
            >
              <FaClipboard />
              <span id="copy-text">copy</span>
            </button>
          </StoreLinkField>
        </StoreLinkFieldContainer>
      </StoreLinkContainer>
    </>
  );
};
