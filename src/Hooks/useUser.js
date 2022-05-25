import { useState } from "react";

const useUser = () => {
  const [userName, setUserName] = useState("");

  return [userName, setUserName];
};
export default useUser;
