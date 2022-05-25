import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  if (loading) {
    return <Loading />;
  }

  // if redirected to login page then redirect back after login
  if (user) {
    navigate(from, { replace: true });
  }

  // checking any error and updating if needed
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div>
      {errorElement}
      <div>
        {/* google login button with function */}
        <button
          onClick={() => signInWithGoogle()}
          className="btn border-gray-400 border-2 w-full flex align-items-center justify-content-center gap-2 mx-auto my-3 bg-transparent"
        >
          <img
            className="w-5 h-5"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
