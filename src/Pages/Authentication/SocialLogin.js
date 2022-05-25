import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";

const SocialLogin = () => {
  const [currentUser, setCurrentUser] = useState([]);

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  useEffect(() => {}, []);

  const [token] = useToken(user);

  if (loading) {
    return <Loading />;
  }

  if (token) {
    let from = location.state?.from?.pathname || "/";
    Swal.fire({
      title: "User Registered",
      html: "Account registration successful",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      cancelButtonColor: "#C82333",
      confirmButtonText: "Update Profile!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard/myProfile");
      }
    });
  }

  // if redirected to login page then redirect back after login

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
