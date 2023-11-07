import React from "react";
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
import { nigeriaStates } from "@/constants";

export default function EditAddressFormModal({ isOpen, onOpenChange }) {
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
                Edit Your Address
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Address line 1"
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  label="Address line 2"
                  type="text"
                  id="addressLine2"
                  name="addressLine2"
                  variant="bordered"
                />
                <div className="flex items-center justify-center gap-5">
                  <Input
                    autoFocus
                    label="City"
                    type="text"
                    id="city"
                    name="city"
                    variant="bordered"
                  />
                  <Input
                    autoFocus
                    label="Postal code"
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    variant="bordered"
                  />
                </div>

                <div>
                  <Select
                    label="State/Capital"
                    defaultSelectedKeys={["Lagos"]}
                    size="lg"
                    variant="bordered"
                  >
                    {nigeriaStates.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {state.label}
                      </SelectItem>
                    ))}
                  </Select>
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
