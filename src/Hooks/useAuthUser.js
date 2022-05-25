import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAuthUser = () => {
  const [user, loading, error] = useAuthState(auth);

  return [user, loading, error];
};

export default useAuthUser;
