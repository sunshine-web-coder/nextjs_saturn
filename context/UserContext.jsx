// UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    country: "", // Store country data
    phoneNumber: "", // Store phone number
    email: "", // Store email
    firstName: "", // Store first name
    lastName: "", // Store last name
    password: "", // Store password
    address: "", // Store address
    city: "", // Store city
    postalCode: "", // Store postal code
    state: "", // Store state
    agreedToTerms: false, // Store agreement status
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
