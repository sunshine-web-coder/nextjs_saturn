"use client"

import { useState } from "react";
import ConfirmationPage, { CountriesSelectForm, EmailNamePasswordForm, PhoneNumberConfirmationForm, PhoneNumberForm, UserAddressForm } from "./SignUpStepForm";

export function SignUpForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <CountriesSelectForm
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <PhoneNumberForm
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <PhoneNumberConfirmationForm
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <EmailNamePasswordForm
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 5:
        return (
          <UserAddressForm
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 6:
        return (
          <ConfirmationPage
            data={formData}
            onPrevious={handlePrevious}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
}

export default SignUpForm;
