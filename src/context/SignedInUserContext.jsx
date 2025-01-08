import React, { createContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export const SignedInUserContext = createContext();

const SignedInUserContextProvider = ({children}) => {
  const [signedInUser, setSignedInUser] = useState(null);

  const value = {
      signedInUser,
      setSignedInUser,
  }
  return (
    <SignedInUserContext.Provider value={value}>
        {children}
    </SignedInUserContext.Provider>
  )
}

export default SignedInUserContextProvider