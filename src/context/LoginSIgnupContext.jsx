import { createContext, useState } from "react";

export const LoginSignupContext = createContext();

const LoginSIgnupContextProvider = ({children}) => {
    const [page, setPage] = useState('');
    const value = {
        page,
        setPage,
    }
  return (
    <LoginSignupContext.Provider value={value}>
        {children}
    </LoginSignupContext.Provider>
  )
}

export default LoginSIgnupContextProvider