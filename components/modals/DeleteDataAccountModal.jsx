import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
} from "@nextui-org/react";
import Link from "next/link";
import { RiQuestionnaireFill } from "react-icons/ri";
import CustomLink from "../CustomLink/CustomLink";

export default function DeleteDataAccountModal({ isOpen, onOpenChange }) {
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
              <ModalHeader className="flex flex-col gap-1 pl-5 pr-10 text-center">
                Ask us to delete your data and <br /> close this account?
              </ModalHeader>
              <ModalBody>
                <p className="mb-5 text-center text-base text-[#2C2E2F]">
                  We use your data to provide services, so if we delete your
                  data, we also need to close your account.
                </p>
                <div className="h-[350px] overflow-y-auto border-t pr-3 pt-3">
                  <div>
                    <div className="text-base font-bold text-[#001435]">
                      Before you continue:
                    </div>
                    <div className="ml-10 mt-5">
                      <ul className="flex list-disc flex-col gap-3 text-sm">
                        <li>
                          If your account is limited, go to the Resolution
                          Center, select Go to Account Limitations, then click
                          Resolve.
                        </li>
                        <li>
                          Make sure any outstanding payments have cleared. We
                          won&apos;t be able to close your account until they
                          do.
                        </li>
                        <li>Transfer your PayPal balance to your bank.</li>
                        <li>
                          If you have a negative balance, click the
                          &quot;Resolve your negative balance&quot; link next to
                          your PayPal balance.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-5 mt-5">
                    <hr className="border-dashed border-[#afafaf]" />
                  </div>
                  <div className="mt-4 rounded-xl border bg-[#f5f7fa] p-5 shadow-sm">
                    <p className="text-base">
                      Once your account&apos;s clear, and if you&apos;re
                      eligible, we&apos;ll close your account and delete your
                      data. We need to retain some of your data for legal and
                      regulatory reasons. To learn more, see our{" "}
                      <CustomLink
                        path=""
                        text="Privacy Statement"
                        style="simpleStyle"
                        className="font-bold text-[#00A9A4]"
                      />
                      .
                      <br />
                      <br />
                      We&apos;ll email you to let you know the status, and if
                      there are any other steps you need to take.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-base">
                    <RiQuestionnaireFill className="text-2xl text-[#00A9A4]" />
                    <p>
                      Have more questions about data deletion?
                      <CustomLink
                        path=""
                        text="Contact us"
                        style="simpleStyle"
                        className="font-bold text-[#00A9A4]"
                      />
                    </p>
                  </div>
                  <div className="mb-5 mt-5">
                    <hr className="border-dashed border-[#afafaf]" />
                  </div>
                  <div>
                    <Checkbox size="md">
                      I understand that account deletion is permanent and
                      can&apos;t be reversed.
                    </Checkbox>
                  </div>
                  <p className="mt-4 text-lg font-bold text-[#001435]">
                    Are you sure you want to close your account?
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  No
                </Button>
                <Button color="primary" className="bg-[#00A9A4]">
                  Yes, continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
