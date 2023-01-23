import {createContext, ReactNode, useEffect, useState} from 'react'

interface IProps {
  children: ReactNode,
}

interface ISingIn {
  email: string,
  password: string
}

type UsersProps = {
  email: string
}

export const AuthContext = createContext({})

export const AuthProvider = ({children}: IProps) => {
  const [user, setUser] = useState<UsersProps[]>()

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const SignIn = ({email, password}: ISingIn) =>{

  }

  return(
    <AuthContext.Provider value={{

    }}>
      {children}
    </AuthContext.Provider>
  )
}