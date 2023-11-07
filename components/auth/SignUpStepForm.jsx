"use client";

import { Select, SelectItem, Avatar, Input, Button } from "@nextui-org/react";
import { countriesData, nigeriaStates } from "@/constants";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "@nextui-org/react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { DatePicker, ConfigProvider } from "antd";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/redux/slices/userDataSlice";

export function CountriesSelectForm({ onNext }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Dispatch an action to update the user data in the Redux store
    dispatch(updateUser(data));
    onNext();
  };

  return (
    <div>
      <div className="mb-8 text-center text-3xl font-semibold text-[#001435]">
        Let&apos;s get started
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="selectedCountry"
          control={control}
          rules={{ required: "Please select your country/region." }}
          render={({ field }) => (
            <Select
              {...field}
              items={countriesData}
              className="w-full"
              label="Where do you live?"
              placeholder="Select your country/region"
              labelPlacement="outside"
              size="lg"
              autoFocus={true}
              variant="bordered"
            >
              {(country) => (
                <SelectItem
                  key={country.label} // Use the country label as the key
                  textValue={country.label}
                  startContent={
                    <Avatar
                      alt="countries avatar"
                      className="h-6 w-6"
                      src={country.flag}
                    />
                  }
                >
                  {country.label}
                </SelectItem>
              )}
            </Select>
          )}
        />
        {errors.selectedCountry && (
          <div className="mt-2 text-red-500">
            {errors.selectedCountry.message}
          </div>
        )}
        <div className="mt-8">
          <Button
            type="submit"
            className="h-12 w-full rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export function PhoneNumberForm({ onNext, onPrevious }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedCountry, setSelectedCountry] = useState("ng");

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Dispatch an action to update the user data in the Redux store
    dispatch(updateUser(data));
    onNext();
  };

  return (
    <div>
      <div className="mb-8 text-center text-3xl font-semibold text-[#001435]">
        <p className="mb-4">Sign up for Saturn</p>
        <p className="text-center text-base font-semibold">
          First, add your mobile number
        </p>
      </div>
      <div className="mb-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Please enter a valid phone number",
              },
            }}
            render={({ field }) => (
              <PhoneInput
                country={selectedCountry} // Use the selected country from state
                value={field.value || ""} // Ensure value is not undefined
                onChange={(value, country) => {
                  // Update the selected country in the form state
                  setSelectedCountry(country.iso2);
                  // Update the form field value
                  field.onChange(value);
                }}
                inputStyle={{
                  width: "100%",
                  height: "50px",
                  paddingLeft: "60px",
                }}
                placeholder="Enter your phone number"
                containerStyle={{ marginBottom: "15px" }}
              />
            )}
          />

          {errors.phoneNumber && (
            <div className="mt-2 text-red-500">
              {errors.phoneNumber.message}
            </div>
          )}

          <div className="mb-5 text-sm font-medium text-[#333333]">
            By continuing, you confirm that you’re the owner or primary user of
            this mobile phone number. You agree to receive automated texts to
            confirm your phone number. Message and data rates may apply.
          </div>

          <div className="mt-10 flex items-center justify-between gap-5">
            <Button
              type="button"
              onClick={onPrevious} // Navigate back to the previous route
              className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
            >
              Previous
            </Button>
            <Button
              type="submit"
              className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function PhoneNumberConfirmationForm({ onNext, onPrevious }) {
  const numOTPFields = 6;
  const [otp, setOTP] = useState(Array(numOTPFields).fill(""));
  const inputRefs = useRef(Array(numOTPFields).fill(null));
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const handleInputChange = (index, value) => {
    // Only update state if the input is a number
    if (/^[0-9]*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move focus to the next input field if there's a value
      if (value && index < numOTPFields - 1) {
        inputRefs.current[index + 1].focus();
      }

      // Move focus to the previous input field on backspace
      if (!value && index > 0) {
        inputRefs.current[index - 1].focus();
      }

      // Check if entered OTP matches the testing OTP
      const enteredOTP = newOTP.join(""); // Combine OTP digits
      if (enteredOTP === "123456") {
        setIsLoading(true); // Show loader
        setTimeout(() => {
          setIsLoading(false); // Hide loader after a delay
          alert("Phone number verified");
        }, 3000); // Delay for showing loader (adjust as needed)
      }
    }
  };

  useEffect(() => {
    // Clear OTP and loader state when component unmounts
    return () => {
      setOTP(Array(numOTPFields).fill(""));
      setIsLoading(false);
    };
  }, [numOTPFields]);

  return (
    <div>
      <div className="mb-8 text-center text-3xl font-semibold text-[#001435]">
        <p className="mb-4">Confirm your phone</p>
        <p className="text-center text-base font-semibold">
          Code sent to +234 812 703 6094
        </p>
      </div>
      <div className="flex gap-5">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={value}
            className="h-[50px] w-full rounded-lg border p-[8px] text-center text-[25px] font-semibold shadow-md sm:h-[80px] sm:text-[35px]"
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !value && index > 0) {
                inputRefs.current[index - 1].focus();
              }
            }}
            ref={(input) => (inputRefs.current[index] = input)}
          />
        ))}
      </div>
      <div className="mb-5 mt-5 flex items-center justify-between">
        <button
          type="button"
          className="mx-auto max-w-[100%] font-semibold text-[#00A9A4] hover:underline"
        >
          Send code again in 01:59
        </button>
      </div>
      <div className="mt-10 flex items-center justify-between gap-5">
        <Button
          onClick={onPrevious}
          className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
        >
          Previous
        </Button>
        <Button
          onClick={onNext}
          className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
        >
          Next
        </Button>
      </div>
      {isLoading && <Spinner label="Loading..." color="warning" />}
    </div>
  );
}

export function EmailNamePasswordForm({ onNext, onPrevious }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updateUser(data));
    onNext();
  };

  return (
    <div>
      <div className="mb-8 text-center text-3xl font-semibold text-[#001435]">
        <p className="mb-4">Set up your profile</p>
        <p className="text-center text-base font-semibold">
          This info needs to be accurate
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Email Address"
                type="email"
                variant="bordered"
              />
            )}
          />
          {errors.email && (
            <div className="mt-2 text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: "First Name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                label="First Name"
                type="text"
                variant="bordered"
              />
            )}
          />
          {errors.firstName && (
            <div className="mt-2 text-red-500">{errors.firstName.message}</div>
          )}
        </div>
        <div>
          <Controller
            name="lastName"
            defaultValue=""
            control={control}
            rules={{ required: "Last Name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                label="Last Name"
                type="text"
                variant="bordered"
              />
            )}
          />
          {errors.lastName && (
            <div className="mt-2 text-red-500">{errors.lastName.message}</div>
          )}
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#])[A-Za-z\d@$!#]{8,}$/,
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
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
            )}
          />
          {errors.password && (
            <div className="mt-2 text-red-500">
              {errors.password.type === "required" ? (
                "Password is required"
              ) : (
                <ul className="list-disc pl-8">
                  <li>Your password must be at least 8 characters long.</li>
                  <li>
                    It must contain a mix of uppercase and lowercase letters.
                  </li>
                  <li>
                    It should include at least one special character (e.g., !,@,
                    #, $).
                  </li>
                  <li>You must also use at least one number (0-9).</li>
                </ul>
              )}
            </div>
          )}
        </div>
        <div className="mt-5 flex items-center justify-between gap-5">
          <Button
            type="button"
            onClick={onPrevious} // Navigate back to the previous route
            className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
          >
            Previous
          </Button>
          <Button
            type="submit"
            className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export function UserAddressForm({ onNext, onPrevious }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updateUser(data));
    onNext();
  };
  return (
    <div className="">
      <div className="mb-8 text-center text-3xl font-semibold text-[#001435]">
        What’s your home address?
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="relative">
          <label
            htmlFor="dateOfBirth"
            className="font-medium text-gray-700 transition-all"
          >
            Date of birth
          </label>
          <Controller
            name="dateOfBirth"
            control={control}
            defaultValue=""
            rules={{
              required: "Date of birth is required",
            }}
            render={({ field }) => (
              <ConfigProvider
                theme={{
                  components: {
                    DatePicker: {
                      colorPrimary: "rgb(115 115 115 / 0.7)",
                      activeBorderColor: "#333333",
                      activeShadow: "#ffffff",
                      borderRadius: 4,
                      algorithm: true,
                    },
                  },
                }}
              >
                <DatePicker
                  format="DD-MM-YYYY"
                  activeBg="#c8dfff"
                  placeholder="DD-MM-YYYY"
                  className="mt-2 h-[50px] w-full rounded-lg border-2 border-neutral-500/20 bg-transparent text-sm font-medium"
                  {...field}
                />
              </ConfigProvider>
            )}
          />
          {errors.dateOfBirth && (
            <div className="mt-2 text-red-500">
              {errors.dateOfBirth.message}
            </div>
          )}
        </div>
        <div>
          {/* Address line 1 input */}
          <Controller
            name="addressLine1"
            control={control}
            defaultValue=""
            rules={{
              required: "Address line 1 is required",
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Address line 1"
                type="text"
                variant="bordered"
              />
            )}
          />
          {errors.addressLine1 && (
            <div className="mt-2 text-red-500">
              {errors.addressLine1.message}
            </div>
          )}
        </div>
        <div>
          {/* Address line 2 input */}
          <Controller
            name="addressLine2"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Address line 2"
                type="text"
                variant="bordered"
              />
            )}
          />
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="w-full">
            {/* City input */}
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{
                required: "City is required",
              }}
              render={({ field }) => (
                <Input {...field} label="City" type="text" variant="bordered" />
              )}
            />
            {errors.city && (
              <div className="mt-2 mt-2 text-red-500">
                {errors.city.message}
              </div>
            )}
          </div>
          <div className="w-full">
            {/* Postal code input */}
            <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{
                required: "Postal code is required",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Postal code"
                  type="text"
                  variant="bordered"
                />
              )}
            />
            {errors.postalCode && (
              <div className="mt-2 text-red-500">
                {errors.postalCode.message}
              </div>
            )}
          </div>
        </div>

        <div>
          {/* State/Capital select input */}
          <Controller
            name="state"
            control={control}
            defaultValue=""
            rules={{
              required: "State/Capital is required",
            }}
            render={({ field }) => (
              <Select
                label="State/Capital"
                size="lg"
                variant="bordered"
                {...field}
              >
                {nigeriaStates.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          {errors.state && (
            <div className="mt-2 text-red-500">{errors.state.message}</div>
          )}
        </div>

        <div>
          {/* Checkbox input */}
          <Checkbox defaultSelected size="md">
            I confirm that I have read, consent and agree to Saturn&apos;s&nbsp;
            <Link href="" className="font-bold text-[#00A9A4]">
              User Agreement
            </Link>
            &nbsp;and&nbsp;
            <Link href="" className="font-bold text-[#00A9A4]">
              Privacy Statement
            </Link>
            , and I am of legal age. I understand that I can change my
            communication preferences any time in my Saturn Account.
          </Checkbox>
        </div>

        <div className="mt-5 flex items-center justify-between gap-5">
          <Button
            onClick={onPrevious}
            className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
          >
            Previous
          </Button>
          <Button
            type="submit"
            className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function ConfirmationPage({ onPrevious }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const userData = useSelector((state) => state.userData);

  return (
    <div>
      <h2 className="text-xl">Confirm Your Information</h2>
      <div className="w-700 grid w-full grid-cols-2 gap-3 mt-3">
        <Input
          label="Selected Country"
          disabled
          type="text"
          variant="bordered"
          value={userData.selectedCountry}
        />
        <Input
          label="Phone"
          disabled
          type="text"
          variant="bordered"
          value={userData.phoneNumber}
        />
        <Input
          label="First Name"
          disabled
          type="text"
          variant="bordered"
          value={userData.firstName}
        />
        <Input
          label="Last Name"
          disabled
          type="text"
          variant="bordered"
          value={userData.lastName}
        />
        <Input
          label="Email address"
          disabled
          type="text"
          variant="bordered"
          value={userData.email}
        />
        <Input
          label="Password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
          disabled
          value={userData.phoneNumber}
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
          label="Date of birth"
          disabled
          type="text"
          variant="bordered"
          value={userData.dateOfBirth}
        />
        <Input
          label="Address"
          disabled
          type="text"
          variant="bordered"
          value={userData.addressLine1}
        />
        <Input
          label="City"
          disabled
          type="text"
          variant="bordered"
          value={userData.city}
        />
        <Input
          label="Postal Code"
          disabled
          type="text"
          variant="bordered"
          value={userData.postalCode}
        />
        <Input
          label="State/Capital"
          disabled
          type="text"
          variant="bordered"
          value={userData.state}
        />
      </div>

      {/* Add a confirmation button to submit the data to the backend */}
      <div className="mt-5 flex items-center justify-between gap-5">
        <Button
          onClick={onPrevious}
          className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
        >
          Previous
        </Button>
        <Button
          type="submit"
          className="h-12 max-w-max rounded-lg bg-[#00A9A4] text-lg font-semibold text-white"
        >
          Agree & Create Account
        </Button>
      </div>
    </div>
  );
}
