import { createContext, ReactNode, useEffect, useState } from "react";

interface IUser {
  name?: string 
  email: string
  password?: string
}

interface IContextProps{
  user: IUser | null
  signin: (email: string, password: string) => string | boolean 
  signup: (email: string, password: string, name: string) => string | boolean
  signout: () => void
  signed: any 
}

export const AuthContext = createContext<IContextProps>(null!);

interface IAuthProps{
  children: ReactNode
}

interface IUserProps {
  email: string
  password: string
}

export const AuthProvider = ({ children }: IAuthProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user: IUserProps) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email: string, password: string) => {
    //@ts-ignore
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") );

    console.log("chegueiaq")
    
    const hasUser = usersStorage?.filter((user: IUserProps) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const name = hasUser[0].name;
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, name });
        return true;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (email: string, password: string, name: string) => {
    //@ts-ignore
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user: IUserProps) => user.email === email);

    if (hasUser?.length) {
       return "Já tem uma conta com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password, name }];
    } else {
      newUser = [{ email, password, name }];
    }

     localStorage.setItem("users_bd", JSON.stringify(newUser));

    return true;
  };

  const signout = () => {
    setUser({email: "", name: ""});
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signin, signup, signout, signed: !!user}}
    >
      {children}
    </AuthContext.Provider>
  );
};