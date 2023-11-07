import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { questionOne, questionTwo } from "@/constants/dashboard";

export default function SecurityQuestionFormModal({ isOpen, onOpenChange }) {
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
                Security Questions
              </ModalHeader>
              <ModalBody>
                <p className="text-center text-sm text-[#001435] mb-5">
                  For your protection, please choose 2 security questions. This
                  way, we can verify it&apos;s really you if there&apos;s ever a
                  doubt.
                </p>

                <form>
                  <div>
                    {/* <label htmlFor="Security question 1">
                      Security question 1
                    </label> */}
                    <Select
                      label="Security question 1"
                      placeholder="Select a question"
                      defaultSelectedKeys={["Lagos"]}
                      size="lg"
                      variant="bordered"
                    >
                      {questionOne.map((item, i) => (
                        <SelectItem key={i}>{item.question}</SelectItem>
                      ))}
                    </Select>
                    <Input
                      autoFocus
                      type="text"
                      name="answerQuiz1"
                      id="answerQuiz1"
                      label="Answer"
                      variant="bordered"
                      className="mt-4"
                    />
                  </div>
                  <div className="mt-10">
                    {/* <label htmlFor="Security question 2">
                      Security question 2
                    </label> */}
                    <Select
                      label="Security question 2"
                      placeholder="Select a question"
                      defaultSelectedKeys={["Lagos"]}
                      size="lg"
                      variant="bordered"
                    >
                      {questionTwo.map((item, i) => (
                        <SelectItem key={i}>{item.question}</SelectItem>
                      ))}
                    </Select>
                    <Input
                      autoFocus
                      type="text"
                      name="answerQuiz2"
                      id="answerQuiz2"
                      label="Answer"
                      variant="bordered"
                      className="mt-4"
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" className="bg-[#00A9A4]">
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
