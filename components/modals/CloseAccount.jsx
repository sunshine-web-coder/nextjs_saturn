import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import CustomLink from "../CustomLink/CustomLink";

export default function CloseAccount({ isOpen, onOpenChange }) {
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
              <ModalHeader className="flex flex-col gap-1 pl-5 pr-10 text-center">
                Account close confirmation, <br />
                are you sure you want to close your account?
              </ModalHeader>
              <ModalBody>
                <p className="text-center">
                  If there&apos;s anything we can help you with, please
                  <CustomLink
                    path=""
                    text=" contact us. "
                    style="simpleStyle"
                    className="font-semibold text-[#00A9A4]"
                  /> 
                  once it&apos;s closed, you won&apos;t be able to use this
                  saturn account or see your past transactions. <br />It can&apos;t be
                  re-opened.
                </p>
              </ModalBody>
              <ModalFooter>
      
                <Button color="primary" className="bg-[#00A9A4] w-full">
                  Close Account
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
