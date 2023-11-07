import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import PaymentMethodsRadio from "../radios/PaymentMethodsRadio";

export default function PaymentMethodsModal({ isOpen, onOpenChange }) {
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
              <ModalHeader className="flex flex-col gap-1 text-center">
                Choose your preferred way to pay online
              </ModalHeader>
              <ModalBody>
                <p className="mb-5 text-center text-base text-[#2C2E2F]">
                  We’ll use this when you shop online or send money for goods
                  and services. You can always choose a different way to pay at
                  checkout.
                </p>
                <div>
                  <Link className="text-sm text-[#00A9A4]" href="">
                    More about payment preferences
                  </Link>
                </div>
                <div className="mb-5 mt-2">
                  <hr className="border-dashed border-[#afafaf]" />
                </div>
                <div>
                <PaymentMethodsRadio />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" className="bg-[#00A9A4]">
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
