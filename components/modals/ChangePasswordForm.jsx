import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export default function ChangePasswordFormModal({ isOpen, onOpenChange }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

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
                Change Your Password
              </ModalHeader>
              <ModalBody>
                <div>
                  <label htmlFor="Confirm your current password">
                    Confirm your current password
                  </label>
                  <Input
                    label="Current password "
                    id="password"
                    name="password"
                    type={isVisible ? "text" : "password"}
                    variant="bordered"
                    className="mt-2"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <BsFillEyeFill className="pointer-events-none text-2xl text-default-400" />
                        ) : (
                          <BsFillEyeSlashFill className="pointer-events-none text-2xl text-default-400" />
                        )}
                      </button>
                    }
                  />
                </div>
                <div className="mt-5">
                  <label htmlFor="Confirm your current password">
                    Enter your new password (Keep your account more secure.
                    Don&apos;t use your name.)
                  </label>
                  <Input
                    label="New password"
                    id="password"
                    name="password"
                    type={isVisible ? "text" : "password"}
                    variant="bordered"
                    className="mt-3"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <BsFillEyeFill className="pointer-events-none text-2xl text-default-400" />
                        ) : (
                          <BsFillEyeSlashFill className="pointer-events-none text-2xl text-default-400" />
                        )}
                      </button>
                    }
                  />
                  <Input
                    label="Confirm new password"
                    id="password"
                    name="password"
                    type={isVisible ? "text" : "password"}
                    variant="bordered"
                    className="mt-3"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <BsFillEyeFill className="pointer-events-none text-2xl text-default-400" />
                        ) : (
                          <BsFillEyeSlashFill className="pointer-events-none text-2xl text-default-400" />
                        )}
                      </button>
                    }
                  />
                </div>
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
