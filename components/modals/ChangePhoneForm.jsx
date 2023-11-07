import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ChangePhoneFormModal({ isOpen, onOpenChange }) {
  const [value, setValue] = "";
  const handleOnChange = (value, country) => {
    console.log("Phone Number:", value);
    console.log("Selected Country:", country);
  };

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        classNames={{
          base: "overflow-visible",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Change Your Phone Number
              </ModalHeader>
              <ModalBody>
                <PhoneInput
                  country={"ng"}
                  value={value}
                  onChange={handleOnChange}
                  inputStyle={{
                    width: "100%",
                    height: "50px",
                    paddingLeft: "60px",
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" className="bg-[#00A9A4]">
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
