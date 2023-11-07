import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { blockedContactList } from "@/constants/dashboard";

export default function BlockedContactModal({ isOpen, onOpenChange }) {
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
                Blocked Contact
              </ModalHeader>
              <ModalBody>
                {blockedContactList.length === 0 ? (
                  <p className="mb-5 text-center text-base text-[#2C2E2F]">
                    You have no blocked contact.
                  </p>
                ) : (
                  <div className="h-[300px] overflow-y-auto border-t pt-3">
                    {blockedContactList.map((user) => (
                      <div
                        key={user.id}
                        className="flex w-full items-center justify-between rounded-xl p-3 pb-2 pt-2 hover:bg-gray-500/5"
                      >
                        <User
                          name={user.name}
                          avatarProps={{
                            src: `${user.avatar}`,
                          }}
                        />
                        <Button
                          size="sm"
                          className="bg-transparent p-0 text-sm text-[#00A9A4]"
                          color="primary"
                        >
                          Unblock
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
