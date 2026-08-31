import Component1 from "@/components/Component1";
import { createContext } from "react";

interface UserContextType {
  name: string;
}

export const UserContext = createContext<UserContextType | null>(null);
function About() {
  return (
    <UserContext.Provider value={{ name: "Budi" }}>
      <div>
        <h1>About Page</h1>
        <Component1 />
      </div>
    </UserContext.Provider>
  );
}
export default About;
