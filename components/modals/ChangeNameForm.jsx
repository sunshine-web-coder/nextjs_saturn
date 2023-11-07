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

export default function ChangeNameFormModal({ isOpen, onOpenChange }) {
  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Change Your Name
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  type="text"
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  type="text"
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="bordered"
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
